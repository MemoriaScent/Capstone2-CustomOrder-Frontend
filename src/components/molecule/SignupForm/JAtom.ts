import { atom } from "jotai";
export interface SignupState {
	email: string;
	pw: string;
	pwCheck: string;
	name: string;
	phone: string;
	location: {
	  zonecode: string;
	  address: string;
	  addrDet: string;
	};
  }
  
  export const signupAtom = atom<SignupState>({
	email: "",
	pw: "",
	pwCheck: "",
	name: "",
	phone: "",
	location: {
	  zonecode: "",
	  address: "",
	  addrDet: "",
	},
  });