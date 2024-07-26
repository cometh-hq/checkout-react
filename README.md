# Checkout React library

This library provides React components and hooks to intergrate Cometh Checkout. 

# CheckoutButton Component

The button can be directly added within your site to trigger a checkout process.


## Example
```tsx
import React from 'react';
import { CheckoutButton } from './CheckoutButton';

const App = () => {
  const handleNewTransaction = (transactionId: string) => {
    // Store the transaction ID somewhere for later polling
    console.log('New transaction ID:', transactionId);
  };

  const handleError = (error: unknown) => {
    console.error('Checkout error:', error);
  };

  return (
    <div>
      <h1>Product Checkout</h1>
      <CheckoutButton
        apikey="your-stripe-api-key"
        productId={12345}
        userAddress="123 Main St, Anytown, USA"
        email="user@example.com"
        successUrl="https://yourdomain.com/success"
        failUrl="https://yourdomain.com/fail"
        openInNewTab={false}
        onNewTransaction={handleNewTransaction}
        onError={handleError}
      >
        Buy Now
      </CheckoutButton>
    </div>
  );
};

export default App;
```

## Parameters

- **apikey** (string): The API key for authentication.
- **apiUrl** (string, optional): Optional API URL override.
- **productId** (number): The ID of the product to checkout.
- **userAddress** (string): The wallet address of the user.
- **email** (string, optional): Optional email of the user to prefill the checkout form.
- **parameters** (Record<string, unknown>, optional): Optional additional parameters.
- **successUrl** (string, optional): URL to redirect upon successful checkout.
- **failUrl** (string, optional): URL to redirect upon checkout failure.
- **openInNewTab** (boolean, optional): Whether to open the checkout session in a new tab.
- **onError** ((error: unknown) => void, optional): Callback function to handle errors.
- **onNewTransaction** ((transactionId: string) => void | Promise<void>, optional): Callback function to handle a new transaction ID before redirecting to the checkout session.

# `useWaitForTransaction` React Hook

The `useWaitForTransaction` React hook is designed to monitor the status of a Stripe transaction in your React application. This guide will walk you through how to use the hook and integrate it into your components.

## Parameters

- **apikey** (string): The API key for authentication.
- **apiUrl** (string, optional): Optional API URL override.
- **transactionId** (string): The ID of the transaction to monitor.

## Example Usage

Here is an example of how to use the `useWaitForTransaction` hook in your application:

```tsx
import React from 'react';
import { useWaitForTransaction } from './useWaitForTransaction';

const TransactionStatus = ({ apikey, apiUrl, transactionId }) => {
  const { isLoading, transaction, error } = useWaitForTransaction(apikey, apiUrl, transactionId);

  if (isLoading) {
    return <div>Loading transaction status...</div>;
  }

  if (error) {
    return <div>Error loading transaction status: {error.message}</div>;
  }

  return (
    <div>
      <h1>Transaction Status</h1>
      <p>Status: {transaction.status}</p>
      <p>Price: {transaction.price}</p>
      <p>Currency: {transaction.currency}</p>
    </div>
  );
};

export default TransactionStatus;
```

# useCheckoutClient

This hook will return the checkout client if you want to implement advanced use cases with the API. See the [checkout SDK](https://www.npmjs.com/package/@cometh/checkout-sdk) for more details.

# useCheckoutSession hook

If you want to create a custom UX, you can use the hook `useCheckoutSession` which will take the same parameters as the button itself without any UI. 