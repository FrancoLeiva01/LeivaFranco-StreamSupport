import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isAuth: false,
      username: null,
      setToken: (token) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      setUsername: (username) =>
        set((state) => ({
          username,
        })),
      logout: () =>
        set((state) => ({
          token: null,
          isAuth: false,
          username: null,
        })),
    }),
    {
      name: "auth",
    }
  )
);
