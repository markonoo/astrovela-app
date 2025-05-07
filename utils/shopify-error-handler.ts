export class ShopifyError extends Error {
  constructor(
    message: string,
    public code: string,
    public status?: number,
    public details?: any
  ) {
    super(message);
    this.name = 'ShopifyError';
  }
}

export const ShopifyErrorCodes = {
  PRODUCT_NOT_FOUND: 'PRODUCT_NOT_FOUND',
  VARIANT_NOT_FOUND: 'VARIANT_NOT_FOUND',
  CHECKOUT_CREATION_FAILED: 'CHECKOUT_CREATION_FAILED',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export function handleShopifyError(error: any): ShopifyError {
  // Network errors
  if (!error.response && error.message?.includes('fetch')) {
    return new ShopifyError(
      'Failed to connect to Shopify. Please check your internet connection.',
      ShopifyErrorCodes.NETWORK_ERROR,
      503
    );
  }

  // API response errors
  if (error.response?.errors) {
    const shopifyError = error.response.errors[0];
    return new ShopifyError(
      shopifyError.message || 'An error occurred with Shopify',
      ShopifyErrorCodes.UNKNOWN_ERROR,
      error.response.status,
      shopifyError
    );
  }

  // Validation errors
  if (error.message?.includes('validation')) {
    return new ShopifyError(
      error.message,
      ShopifyErrorCodes.VALIDATION_ERROR,
      400
    );
  }

  // Product not found
  if (error.message?.includes('No products found')) {
    return new ShopifyError(
      'The requested product could not be found in the store.',
      ShopifyErrorCodes.PRODUCT_NOT_FOUND,
      404
    );
  }

  // Variant not found
  if (error.message?.includes('No variant found')) {
    return new ShopifyError(
      'The requested product variant could not be found.',
      ShopifyErrorCodes.VARIANT_NOT_FOUND,
      404
    );
  }

  // Checkout creation errors
  if (error.message?.includes('Could not create checkout')) {
    return new ShopifyError(
      error.message,
      ShopifyErrorCodes.CHECKOUT_CREATION_FAILED,
      400
    );
  }

  // Default error
  return new ShopifyError(
    error.message || 'An unexpected error occurred',
    ShopifyErrorCodes.UNKNOWN_ERROR,
    500
  );
} 