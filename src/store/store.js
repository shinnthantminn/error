import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { AuthApi } from "./Service/AuthService";

export const Store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

setupListeners(Store.dispatch);
