import { atom } from "jotai";
export interface LoginState {
	email: string;
	pw: string;
	
  }
  
  export const LoginAtom = atom<LoginState>({
	email: "",
	pw: "",
  });

  

