import { CheckoutAPI, PublicTransaction } from "@cometh/checkout-sdk"
import { useCallback, useEffect, useMemo, useState } from "react"

const TRANSACTION_POLLING_INTERVAL = 1000
export enum TransactionStatus {
  INITIATED = "initiated",
  CASHED = "cashed",
  RELAYED = "relayed",
  REVERTED = "reverted",
  CANCELLED = "cancelled",
  COMPLETED = "completed"
}
const FINAL_TRANSACTION_STATUSES = [
  TransactionStatus.REVERTED,
  TransactionStatus.CANCELLED,
  TransactionStatus.COMPLETED
]

function _getCheckoutApi(
  apikey: string,
  apiurl: string = "https://checkout.cometh.io/v1"
): CheckoutAPI {
  return new CheckoutAPI({
    BASE: apiurl,
    HEADERS: {
      apikey
    }
  })
}

export function useCheckoutClient(
  apikey: string,
  apiurl?: string
): CheckoutAPI {
  const checkoutApi = useMemo(
    () => _getCheckoutApi(apikey, apiurl),
    [apikey, apiurl]
  )
  return checkoutApi
}

export const useCheckoutSession = (
  apikey: string,
  apiUrl: string | undefined,
  productId: number,
  userAddress: string,
  email?: string,
  parameters?: Record<string, unknown>,
  successUrl?: string,
  failUrl?: string,
  openInNewTab?: boolean,
  onError?: (error: unknown) => void,
  onNewTransaction?: (transactionId: string) => void | Promise<void>
) => {
  const checkoutClient = useCheckoutClient(apikey, apiUrl)
  const [isLoading, setIsLoading] = useState(false)

  const redirectToCheckoutSession = useCallback(async () => {
    try {
      setIsLoading(true)
      const checkoutSession =
        await checkoutClient.checkoutSessions.createCheckoutSession({
          requestBody: {
            productId,
            userAddress,
            email,
            parameters,
            successUrl,
            failUrl
          }
        })
      if (onNewTransaction) {
        onNewTransaction(checkoutSession.transactionId)
      }
      if (openInNewTab) {
        // Create a link to avoid popup blockers after an async action
        const link = document.createElement("a")
        link.href = checkoutSession.url
        link.target = "_blank"
        link.click()
        link.remove()
        return
      } else {
        window.location.href = checkoutSession.url
      }
    } catch (error) {
      console.error("Error during redirection", error)
      if (onError) {
        onError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }, [
    checkoutClient,
    productId,
    userAddress,
    email,
    parameters,
    successUrl,
    failUrl,
    openInNewTab,
    onError,
    onNewTransaction
  ])

  return { isLoading, redirectToCheckoutSession }
}

export const useWaitForTransaction = (
  apikey: string,
  apiUrl: string | undefined,
  transactionId: string
) => {
  const checkoutClient = useCheckoutClient(apikey, apiUrl)
  const [isLoading, setIsLoading] = useState(true)
  const [transaction, setTransaction] = useState<PublicTransaction | null>(null)
  const [error, setError] = useState<unknown | null>(null)

  const waitForTransaction = useCallback(async () => {
    try {
      setIsLoading(true)
      const publicTransaction =
        await checkoutClient.transactions.getPublicTransactionById({
          transactionId
        })
      setTransaction(publicTransaction)
      if (
        FINAL_TRANSACTION_STATUSES.includes(
          publicTransaction.status as TransactionStatus
        )
      ) {
        setIsLoading(false)
      } else {
        setTimeout(waitForTransaction, TRANSACTION_POLLING_INTERVAL)
      }
    } catch (error) {
      console.error("Error during transaction polling", error)
      setError(error)
      setIsLoading(false)
    }
  }, [checkoutClient, transactionId])

  useEffect(() => {
    waitForTransaction()
  }, [waitForTransaction])

  return { isLoading, transaction, error }
}
