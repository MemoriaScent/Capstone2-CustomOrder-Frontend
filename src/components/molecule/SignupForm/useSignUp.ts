
import { useAtom } from "jotai";
import { signupAtom, locationAtom } from "./JAtom";
import { useEffect } from "react";

export default function useSignUp(){
    const [signUp,setSignup] = useAtom(signupAtom)
    const [location,setLocation] = useAtom(locationAtom)
    useEffect(() => {
        const locationString = `[${location.zipcode}] ${location.addr} ${location.addrDet}`;
        setSignup((prev) => ({
            ...prev,
            location: locationString,
        }));
    }, [location, setSignup]);
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
      const handleZipcode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation((prev) => ({
            ...prev,
            zipcode: e.target.value,
        }));
    };

    const handleAddr = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation((prev) => ({
            ...prev,
            addr: e.target.value,
        }));
    };

    const handleAddrDet = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation((prev) => ({
            ...prev,
            addrDet: e.target.value,
        }));
    };
    

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(signUp);

        // 백엔드로 데이터 전송
        try {
            const response = await fetch('/user/register', {
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
        handleAddr,
        handleZipcode,
        handleAddrDet,
        handleClick
    }
}