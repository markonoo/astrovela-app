import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from "@/utils/shopify-config"
import type { QuizState } from "@/contexts/quiz-context"

const checkoutCreateMutation = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        message
        field
      }
    }
  }
`

interface CreateShopifyCheckoutProps {
  selectedOption: "app" | "paperback" | "ebook"
  quizState: QuizState
}

export async function createShopifyCheckout({
  selectedOption,
  quizState,
}: CreateShopifyCheckoutProps): Promise<string> {
  try {
    let lineItems = []

    if (selectedOption === "paperback") {
      lineItems = [{ variantId: "gid://shopify/ProductVariant/46919207928118", quantity: 1 }] // Replace with actual variant ID
    }

    const input = {
      lineItems,
      email: quizState.email || "",
      customAttributes: [
        { key: "firstName", value: quizState.firstName || "" },
        { key: "lastName", value: quizState.lastName || "" },
        {
          key: "birthDate",
          value: quizState.birthDate.month + "/" + quizState.birthDate.day + "/" + quizState.birthDate.year,
        },
        { key: "birthPlace", value: quizState.birthPlace || "" },
        { key: "astrologyLevel", value: quizState.astrologyLevel || "" },
        { key: "gender", value: quizState.gender || "" },
      ],
    }

    const response = await fetch(SHOPIFY_STOREFRONT_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: checkoutCreateMutation,
        variables: { input },
      }),
    })

    const { data } = await response.json()

    if (data?.checkoutCreate?.checkoutUserErrors?.length) {
      const errors = data.checkoutCreate.checkoutUserErrors.map((error: any) => error.message).join(", ")
      throw new Error(`Could not create checkout: ${errors}`)
    }

    const checkoutUrl = data?.checkoutCreate?.checkout?.webUrl
    if (!checkoutUrl) {
      throw new Error("Could not retrieve checkout URL")
    }

    return checkoutUrl
  } catch (error: any) {
    console.error("Shopify Checkout Error:", error)
    throw new Error(`Shopify Checkout Error: ${error.message}`)
  }
}

