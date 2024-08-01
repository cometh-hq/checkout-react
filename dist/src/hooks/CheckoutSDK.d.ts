import { CheckoutAPI } from '@cometh/checkout-sdk';

export declare enum TransactionStatus {
    INITIATED = "initiated",
    CASHED = "cashed",
    RELAYED = "relayed",
    REVERTED = "reverted",
    CANCELLED = "cancelled",
    COMPLETED = "completed"
}
export declare function useCheckoutClient(apikey: string, apiurl?: string): CheckoutAPI;
export declare const useCheckoutSession: (apikey: string, apiUrl: string | undefined, productId: number, userAddress: string, email?: string, parameters?: Record<string, unknown>, successUrl?: string, failUrl?: string, openInNewTab?: boolean, onError?: (error: unknown) => void, onNewTransaction?: (transactionId: string) => void | Promise<void>) => {
    isLoading: boolean;
    redirectToCheckoutSession: () => Promise<void>;
};
export declare const useWaitForTransaction: (apikey: string, apiUrl: string | undefined, transactionId: string) => {
    isLoading: boolean;
    transaction: import('@cometh/checkout-sdk').BaseTransaction | null;
    error: unknown;
};
//# sourceMappingURL=CheckoutSDK.d.ts.map