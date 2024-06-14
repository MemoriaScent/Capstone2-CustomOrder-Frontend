import { useAtom } from "jotai";
import { signupAtom, SignupState } from "./JAtom";
import { useEffect, useState } from "react";

export default function useSignUp() {
  const [signUp, setSignup] = useAtom(signupAtom);
  const [phoneParts, setPhoneParts] = useState(["", "", ""]);

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(signUp);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...signUp,
      email: e.target.value.toString(),
    };
    setSignup(newData);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...signUp,
      pw: e.target.value.toString(),
    };
    setSignup(newData);
  };
  const handlePwChk = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...signUp,
      pwCheck: e.target.value.toString(),
    };
    setSignup(newData);
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...signUp,
      name: e.target.value.toString(),
    };
    setSignup(newData);
  };

  const handlePhone =
    (partIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPhoneParts = [...phoneParts];
      newPhoneParts[partIndex] = e.target.value;
      setPhoneParts(newPhoneParts);

      // 하이픈을 제거한 전화번호를 상태에 업데이트합니다.
      const formattedPhone = newPhoneParts.join("");
      setSignup({ ...signUp, phone: formattedPhone });
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
  };

  const serverUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
  const serverPort = process.env.NEXT_PUBLIC_API_SERVER_PORT;

  const handleDupLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      console.log(
        JSON.stringify({
          email: signUp.email,
        })
      );
      const response = await fetch(
        `${serverUrl}:${serverPort}/user/duplication`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: signUp.email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<number> => {
    // 회원가입
    e.preventDefault();
    const signUpWithParsedLocation = {
      ...signUp,
      location: JSON.stringify(signUp.location),
    };
    console.log(signUpWithParsedLocation);
    // 백엔드로 데이터 전송
    try {
      const response = await fetch(`${serverUrl}:${serverPort}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpWithParsedLocation),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      return 200;
    } catch (error) {
      console.error("Error:", error);
      return 0;
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
    handleArrDet,
    handleDupLogin,
  };
}
