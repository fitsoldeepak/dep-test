import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { counterActions, counterSlice } from "./counter";
import { userActions, userSlice } from "./user";

export const useCombineStore = create(
  devtools(
    persist(
      combine(
        {
          ...counterSlice,
          ...userSlice,
        },
        (set) => {
          return {
            ...counterActions(set),
            ...userActions(set),
          };
        }
      ),
      {
        name: "combined-store",
        partialize: (state) => ({
          count: state.count,
            // user: state.user,
        }),
      }
    )
  )
);
