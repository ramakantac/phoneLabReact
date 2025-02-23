import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  user: null,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  setUser: (userInfo) => set({ user: userInfo }),
}));

export default useStore;