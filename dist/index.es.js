import m, { useMemo as I, useState as C, useCallback as L, useEffect as S } from "react";
import { CheckoutAPI as T } from "@cometh/checkout-sdk";
const R = 1e3;
var y = /* @__PURE__ */ ((e) => (e.INITIATED = "initiated", e.CASHED = "cashed", e.RELAYED = "relayed", e.REVERTED = "reverted", e.CANCELLED = "cancelled", e.COMPLETED = "completed", e))(y || {});
const D = [
  "reverted",
  "cancelled",
  "completed"
  /* COMPLETED */
];
function N(e, t = "https://checkout.cometh.io/v1") {
  return new T({
    BASE: t,
    HEADERS: {
      apikey: e
    }
  });
}
function g(e, t) {
  return I(
    () => N(e, t),
    [e, t]
  );
}
const _ = (e, t, n, u, a, r, h, k, l, s, c) => {
  const o = g(e, t), [f, E] = C(!1), A = L(async () => {
    try {
      E(!0);
      const i = await o.checkoutSessions.createCheckoutSession({
        requestBody: {
          productId: n,
          userAddress: u,
          email: a,
          parameters: r,
          successUrl: h,
          failUrl: k
        }
      });
      if (c && c(i.transactionId), l) {
        const d = document.createElement("a");
        d.href = i.url, d.target = "_blank", d.click(), d.remove();
        return;
      } else
        window.location.href = i.url;
    } catch (i) {
      console.error("Error during redirection", i), s && s(i);
    } finally {
      E(!1);
    }
  }, [
    o,
    n,
    u,
    a,
    r,
    h,
    k,
    l,
    s,
    c
  ]);
  return { isLoading: f, redirectToCheckoutSession: A };
}, w = (e, t, n) => {
  const u = g(e, t), [a, r] = C(!0), [h, k] = C(null), [l, s] = C(null), c = L(async () => {
    try {
      r(!0);
      const o = await u.transactions.getTransactionById({
        transactionId: n
      });
      D.includes(
        o.status
      ) ? (k(o), r(!1)) : setTimeout(c, R);
    } catch (o) {
      console.error("Error during transaction polling", o), s(o), r(!1);
    }
  }, [u, n]);
  return S(() => {
    c();
  }, [c]), { isLoading: a, transaction: h, error: l };
}, B = ({
  apikey: e,
  apiUrl: t,
  productId: n,
  userAddress: u,
  email: a,
  parameters: r,
  successUrl: h,
  failUrl: k,
  children: l,
  loadingComponent: s,
  openInNewTab: c,
  onError: o,
  onNewTransaction: f,
  ...E
}) => {
  const { isLoading: A, redirectToCheckoutSession: i } = _(
    e,
    t,
    n,
    u,
    a,
    r,
    h,
    k,
    c,
    o,
    f
  );
  return /* @__PURE__ */ m.createElement("button", { ...E, onClick: i }, A ? s || "Redirecting..." : l || "Checkout now");
};
export {
  B as CheckoutButton,
  y as TransactionStatus,
  g as useCheckoutClient,
  _ as useCheckoutSession,
  w as useWaitForTransaction
};
//# sourceMappingURL=index.es.js.map
