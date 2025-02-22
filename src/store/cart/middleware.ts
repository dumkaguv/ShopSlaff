import { createListenerMiddleware } from "@reduxjs/toolkit";
import { RootState } from "../store";
import LOCAL_STORAGE from "@/constants/localStorage";
import { saveToLocalStorage } from "@/utils/localStorage";

const cartMiddleware = createListenerMiddleware();

cartMiddleware.startListening({
  predicate: (action, currentState, previousState) =>
    (currentState as RootState).cart !== (previousState as RootState).cart,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    saveToLocalStorage(LOCAL_STORAGE.CART, state.cart.data);
  },
});

export default cartMiddleware;
