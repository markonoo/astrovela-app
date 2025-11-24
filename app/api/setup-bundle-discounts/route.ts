import { NextRequest, NextResponse } from 'next/server';
import { SHOPIFY_CONFIG } from '@/utils/shopify-config';
import { logger } from '@/utils/logger';

export async function POST(request: NextRequest) {
  try {
    const adminEndpoint = `https://${SHOPIFY_CONFIG.SHOP_DOMAIN}/admin/api/${SHOPIFY_CONFIG.ADMIN_API_VERSION}/graphql.json`;
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': SHOPIFY_CONFIG.ADMIN_API_ACCESS_TOKEN,
    };

    // First, get existing automatic discounts to avoid duplicates
    const getDiscountsQuery = `
      query getAutomaticDiscounts {
        automaticDiscountNodes(first: 50) {
          edges {
            node {
              id
              automaticDiscount {
                ... on DiscountAutomaticBxgy {
                  title
                  status
                  summary
                }
              }
            }
          }
        }
      }
    `;

    const discountsResponse = await fetch(adminEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: getDiscountsQuery })
    });

    const discountsData = await discountsResponse.json();
    
    if (discountsData.errors) {
      throw new Error(`Failed to fetch discounts: ${JSON.stringify(discountsData.errors)}`);
    }

    const existingDiscounts = discountsData.data?.automaticDiscountNodes?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.automaticDiscount?.title || 'Unknown',
      status: edge.node.automaticDiscount?.status || 'UNKNOWN'
    })) || [];

    // Create the 3 automatic discounts we need for AstroVela bundles
    const freeAppWithPaperback = {
      title: 'AstroVela Bundle: Free App with Paperback',
      customerBuys: {
        value: { quantity: "1" },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278068859267'] // Paperback
          }
        }
      },
      customerGets: {
        value: { 
          discountOnQuantity: {
            quantity: "1",
            effect: { percentage: 1.0 }
          }
        },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278069252483'] // App
          }
        }
      }
    };

    const freeEbookWithPaperback = {
      title: 'AstroVela Bundle: Free eBook with Paperback',
      customerBuys: {
        value: { quantity: "1" },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278068859267'] // Paperback
          }
        }
      },
      customerGets: {
        value: { 
          discountOnQuantity: {
            quantity: "1",
            effect: { percentage: 1.0 }
          }
        },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278068072835'] // eBook
          }
        }
      }
    };

    const freeAppWithEbook = {
      title: 'AstroVela Bundle: Free App with eBook Only',
      customerBuys: {
        value: { quantity: "1" },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278068072835'] // eBook
          }
        }
      },
      customerGets: {
        value: { 
          discountOnQuantity: {
            quantity: "1",
            effect: { percentage: 1.0 }
          }
        },
        items: {
          products: {
            productsToAdd: ['gid://shopify/Product/15278069252483'] // App
          }
        }
      }
    };

    const discountsToCreate = [freeAppWithPaperback, freeEbookWithPaperback, freeAppWithEbook];

    const createDiscountMutation = `
      mutation createBundleDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
        discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
          automaticDiscountNode {
            id
            automaticDiscount {
              ... on DiscountAutomaticBxgy {
                title
                status
                summary
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const results = [];

    for (const discount of discountsToCreate) {
      // Check if discount already exists
      const exists = existingDiscounts.some((existing: any) => existing.title === discount.title);
      
      if (exists) {
        results.push({
          title: discount.title,
          status: 'already_exists',
          message: 'Discount already configured'
        });
        continue;
      }

      // Create the discount
      const discountInput = {
        title: discount.title,
        startsAt: new Date().toISOString(),
        customerBuys: discount.customerBuys,
        customerGets: discount.customerGets
      };

      const createResponse = await fetch(adminEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: createDiscountMutation,
          variables: { automaticBxgyDiscount: discountInput }
        })
      });

      const createData = await createResponse.json();

      if (createData.errors || createData.data?.discountAutomaticBxgyCreate?.userErrors?.length > 0) {
        results.push({
          title: discount.title,
          status: 'error',
          error: createData.errors || createData.data.discountAutomaticBxgyCreate.userErrors
        });
      } else {
        results.push({
          title: discount.title,
          status: 'created',
          id: createData.data.discountAutomaticBxgyCreate.automaticDiscountNode.id,
          summary: createData.data.discountAutomaticBxgyCreate.automaticDiscountNode.automaticDiscount.summary
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Bundle discounts setup completed',
      existingDiscounts,
      results,
      instructions: [
        '✅ Automatic discounts have been created in Shopify',
        '🛍️ When customers add paperback book, app & ebook will be FREE',
        '📱 When customers add ebook only, app will be FREE', 
        '🛒 Customers will see all products in their cart, with discounts applied',
        '🔗 Test URL: https://3zpk1a-pb.myshopify.com/cart/55883677925763:1,55883673665923:1,55883676156291:1'
      ]
    });

  } catch (error) {
    logger.error('Bundle discount setup error', error, { endpoint: '/api/setup-bundle-discounts' });
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to setup bundle discounts'
    }, { status: 500 });
  }
}
 