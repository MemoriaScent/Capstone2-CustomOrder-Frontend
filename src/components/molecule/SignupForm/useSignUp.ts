import { useAtom } from "jotai";
import { signupAtom } from "./JAtom";

export default function useSignUp(){
    const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Gd")
    }

    return {
        handleclick // 객체 형태로 반환
    }
}