import { create } from 'zustand';

interface LoginOrNot {
  isLogIn: boolean;
  setLogIn: (loggedIn: boolean) => void; // 올바른 메서드 이름으로 수정
}

const useLoginStore = create<LoginOrNot>((set) => ({
  isLogIn: false,
  setLogIn: (logIn) => set({ isLogIn: logIn }), // 메서드 이름 수정
}));

export default useLoginStore;
