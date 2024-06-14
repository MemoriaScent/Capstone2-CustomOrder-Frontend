import { useAtom } from "jotai";
import { LoginAtom } from "./JAtom";
import { useEffect } from "react";

export default function useLogin() {
  const [login, setLogin] = useAtom(LoginAtom);

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(login);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...login,
      email: e.target.value.toString(),
    };
    setLogin(newData);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...login,
      pw: e.target.value.toString(),
    };
    setLogin(newData);
  };

  const serverUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
  const serverPort = process.env.NEXT_PUBLIC_API_SERVER_PORT;

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<number> => {
    //
    e.preventDefault();

    console.log(
      "NEXT_PUBLIC_API_SERVER_URL:",
      process.env.NEXT_PUBLIC_API_SERVER_URL
    );
    console.log(
      "NEXT_PUBLIC_API_SERVER_PORT:",
      process.env.NEXT_PUBLIC_API_SERVER_PORT
    );

    console.log(login);
    // 백엔드로 데이터 전송
    try {
      const response = await fetch(`${serverUrl}:${serverPort}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      localStorage.setItem("token", data.token);
      return 200;
    } catch (error) {
      console.error("Error:", error);
      return 0;
    }
  };
  return {
    handleClick,
    handleclick,
    handleEmail,
    handlePw,
  };
}
