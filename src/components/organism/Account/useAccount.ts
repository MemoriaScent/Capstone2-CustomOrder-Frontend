
import { useAtom } from "jotai";
import { useEffect,useState } from "react";
import { signupAtom } from "@/components/molecule/SignupForm/JAtom";
export default function useAccount(){
    const [signUp, setSignup] = useAtom(signupAtom);
    const serverUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
    const serverPort = process.env.NEXT_PUBLIC_API_SERVER_PORT;
    
    const fetchAccountData = async () => {  // 유저정보데이터 받아오기
        try {
          const token = localStorage.getItem('token');
          console.log(token)
          if (!token) {
            throw new Error('No token found');
          }
  
          const response = await fetch(`${serverUrl}:${serverPort}/user/myaccount?token=${token}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          const formattedPhone = data.phone.replace(/-/g, '');
          setSignup({
            email: data.email,
            pw: data.pw,
            pwCheck: "",
            name: data.name,
            phone: formattedPhone,
            location: JSON.parse(data.location)
          });
          console.log(data.phone)
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    const handleDupLogin = async (e:React.MouseEvent<HTMLButtonElement>) => {  //중복확인
        try {
            
            const response = await fetch(`${serverUrl}:${serverPort}/user/duplication`, {
                
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                
                body: JSON.stringify({
                    email: signUp.email,
                }) 
                
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            alert("중복 된 이메일입니다.")
        }
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
        const signUpWithParsedLocation = {
            ...signUp,
            location: JSON.stringify(signUp.location)
        };
        console.log(signUpWithParsedLocation)
        // 백엔드로 데이터 전송
        try {
            const response = await fetch(`${serverUrl}:${serverPort}/user/update`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(signUpWithParsedLocation)
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
    const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(signUp)
    }
    return {
        fetchAccountData,
        handleDupLogin,
        handleEmail,
        handlePw,
        handlePwChk,
        handleName,
        handlePhone,
        handleArrDet,
        handleClick,
        handleclick,

    }
}