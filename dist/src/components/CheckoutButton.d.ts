import { default as React } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type CheckoutButtonProps = ButtonProps & {
    /**
     * The API key for authentication.
     */
    apikey: string;
    /**
     * Optional API URL override.
     */
    apiUrl?: string;
    /**
     * The ID of the product to checkout.
     */
    productId: number;
    /**
     * The wallet address of the user.
     */
    userAddress: string;
    /**
     * Optional email of the user to prefill the checkout form.
     */
    email?: string;
    /**
     * Optional additional parameters.
     */
    parameters?: Record<string, unknown>;
    /**
     * URL to redirect upon successful checkout.
     */
    successUrl?: string;
    /**
     * URL to redirect upon checkout failure.
     */
    failUrl?: string;
    /**
     * Whether to open the checkout session in a new tab.
     */
    openInNewTab?: boolean;
    /**
     * The content of the button.
     */
    children?: React.ReactNode;
    /**
     * Component to display while loading.
     */
    loadingComponent?: React.ReactNode;
    /**
     * Callback function to handle a new transaction ID. Called right before redirecting to the checkout session.
     */
    onNewTransaction?: (transactionId: string) => void;
    /**
     * Callback function to handle errors.
     */
    onError?: (error: unknown) => void | Promise<void>;
};
export declare const CheckoutButton: React.FC<CheckoutButtonProps>;
//# sourceMappingURL=CheckoutButton.d.ts.map