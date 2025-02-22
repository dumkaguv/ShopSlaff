import { createListenerMiddleware } from "@reduxjs/toolkit";

import { RootState } from "../store";
import LOCAL_STORAGE from "@/constants/localStorage";
import { saveToLocalStorage } from "@/utils/localStorage";

const favoritesMiddleware = createListenerMiddleware();

favoritesMiddleware.startListening({
  predicate: (action, currentState, previousState) =>
    (currentState as RootState).favorites !==
    (previousState as RootState).favorites,

  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    saveToLocalStorage(LOCAL_STORAGE.FAVORITES, state.favorites.data);
  },
});

export default favoritesMiddleware;
