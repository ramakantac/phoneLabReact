import { create } from 'zustand';

const store = create((set) => ({
  isAuthenticated: false, // Initial state for authentication
  setAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),

}));

export default store;