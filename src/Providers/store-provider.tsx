"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
// import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  const persistorRef = useRef<Persistor>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore().store;
    persistorRef.current = makeStore().persistedStore;
  }

  return (
    <Provider store={storeRef.current}>
      {/* <PersistGate loading={null} persistor={persistorRef.current!}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
