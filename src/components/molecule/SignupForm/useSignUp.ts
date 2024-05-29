
import { useAtom } from "jotai";
import { signupAtom } from "./JAtom";

export default function useSignUp(){
    const [signUp,setSignup] = useAtom(signupAtom)
    // 예시코드 지워야함
    const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(signUp)
    }
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...signUp,
            email : e.target.value.toString(),
        }
        setSignup(newData)
    }
    return {
        handleclick,
        handleEmail // 객체 형태로 반환
    }
}