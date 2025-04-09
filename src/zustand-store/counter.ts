// import { create } from "zustand";
// import { combine, persist, devtools } from "zustand/middleware";

// export const useCounter = create(
//   devtools(
//     persist(
//       combine({ count: 0 }, (set) => {
//         return {
//           increment: () => set((state) => ({ count: state.count + 1 })),
//           decrement: () => set((state) => ({ count: state.count - 1 })),
//         };
//       }),
//       {
//         name: "counter",
//         partialize: (state) => ({ count: state.count }),
//       }
//     )
//   )
// );


interface CounterState {
  count: number;
}

interface CounterActions {
  increment: () => void;
  decrement: () => void;
}


export const counterSlice: CounterState = { count: 0 };
export const counterActions = (
  set: SET_FUNC<CounterState>
): CounterActions => ({
  increment: () => set((state) => ({ count: state.count + 1 }), false, "inc"),
  decrement: () => set((state) => ({ count: state.count - 1 }), false, "dec"),
});
