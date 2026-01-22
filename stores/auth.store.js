import { create } from "zustand";

export const useAuthStore = create((set) => ({
  // 1️⃣ undefined = لسه بنحمّل
  userId: undefined,

  login: (id) => {
    localStorage.setItem("session", id);
    set({ userId: id });
  },

  logout: () => {
    localStorage.removeItem("session");
    set({ userId: null });
  },

  loadSession: () => {
    const id = localStorage.getItem("session");

    if (id) {
      set({ userId: id });
    } else {
      set({ userId: null });
    }
  },
}));
