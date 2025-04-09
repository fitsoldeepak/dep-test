// import { create } from "zustand";
// import { combine, persist, devtools } from "zustand/middleware";

// export const useUser = create(
//   devtools(
//     persist(
//       combine({ user: "" }, (set) => {
//         return {
//           setUser: (name: string) =>
//             set(() => ({ user: name }), false, "setUser"),
//         };
//       }),
//       {
//         name: "user-details",
//       }
//     )
//   )
// );

interface UserState {
  user: string | null;
}

interface UserActions {
  setUser: (user: string) => void;
}

export const userSlice: UserState = { user: null };

export const userActions = (set: SET_FUNC<UserState>): UserActions => ({
  setUser: (user: string) => set(() => ({ user }), false, "setUser"),
});
