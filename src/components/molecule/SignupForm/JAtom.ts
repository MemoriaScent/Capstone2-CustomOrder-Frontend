import { atom } from "jotai";
interface SignupState {
	email: string;
	pw: string;
	pwcheck: string;
	name: string;
	phone: string;
	location: string;
  }

export const signupAtom = atom({
    email: "",
	pw: "",
	pwCheck: "",
	name: "",
	phone: "",
	location: "",
})
export const locationAtom = atom(
	{
		zipcode: "",
		addr : "",
		addrDet : ""
	}
)
