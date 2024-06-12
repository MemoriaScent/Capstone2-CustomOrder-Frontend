
import { useAtom } from "jotai";
import { signupAtom, SignupState } from "./JAtom";
import { useEffect } from "react";

export default function useSignUp(){
    const [signUp,setSignup] = useAtom(signupAtom)

    
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
    const handlePw = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...signUp,
            pw : e.target.value.toString(),
        }
        setSignup(newData)
    }
    const handlePwChk = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...signUp,
            pwCheck : e.target.value.toString(),
        }
        setSignup(newData)
    }
    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...signUp,
            name : e.target.value.toString(),
        }
        setSignup(newData)
    }
    const handlePhone = (partIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        // 현재 전화번호 상태를 '-'을 기준으로 분리합니다.
        let phoneParts = signUp.phone.split("-");
        // 입력된 부분을 업데이트합니다.
        phoneParts[partIndex] = e.target.value;
    
        // 새로운 전화번호를 생성합니다.
        const newPhone = phoneParts.join("-");
        // signupAtom의 상태를 업데이트합니다.
        setSignup({ ...signUp, phone: newPhone });
      };
      
      const handleArrDet = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...signUp,
            location: {
                ...signUp.location,
                addrDet: e.target.value,
            },
        };
        setSignup(newData);
    }
    

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(signUp);

        // 백엔드로 데이터 전송
        try {
            const response = await fetch('http://113.198.229.155:8882/user/register', {
                method: 'POST',
                
                body: JSON.stringify(signUp)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return {
        handleclick,
        handleEmail,
        handlePw,
        handlePwChk,
        handleName,
        handlePhone,
        handleClick,
        handleArrDet
    }
}