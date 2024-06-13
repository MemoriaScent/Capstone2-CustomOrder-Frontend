"use client";
import Custom1 from "@/components/organism/Custom1";
import Custom2 from "@/components/organism/Custom2";
import Custom3 from "@/components/organism/Custom3";
import Custom4 from "@/components/organism/Custom4";
import Custom5 from "@/components/organism/Custom5";
import CustomBGImage from "@/components/organism/CustomBGImage";
import axios from "axios";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { customAtom } from "./JAtom";

const CustomTamplate = () => {
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const [content, setContent] = useState<React.ReactNode>();
  const nextLevel = () => {
    setLevel(level + 1);
  };

  // API 호출
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const custom = useAtomValue(customAtom);

  const handleSubmit = async () => {
    console.log("12");

    if (!custom.story) {
      console.log("no story");
      setError("Both story are required");
      return;
    }

    if (!custom.image) {
      console.log("no image");
    } else {
      const response = await axios.get(custom.image, {
        responseType: "blob",
      });

      const formData = new FormData();
      formData.append("file", response.data, "image.jpg");

      setLoading(true); // 로딩 시작
      setError(null); // 기존 에러 리셋

      console.log("2");
      try {
        const res = await axios.post(
          `http://113.198.229.153:201/api/tasks/?story=${encodeURIComponent(
            custom.story + custom.taste
          )}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        localStorage.setItem("apiResponse", JSON.stringify(res.data)); // API 응답을 localStorage에 저장
        setLoading(false); // 로딩 종료
        console.log(JSON.stringify(res.data));
        router.push("/custom/success"); // 성공 페이지로 이동
      } catch (err) {
        console.log("api error");
        setError("Failed to send request");
        setLoading(false); // 로딩 종료
      }
    }
  };
  useEffect(() => {
    switch (level) {
      case 1:
        setContent(<Custom1 nextLevel={nextLevel}></Custom1>);
        break;
      case 2:
        setContent(<Custom2 nextLevel={nextLevel}></Custom2>);
        break;
      case 3:
        setContent(<Custom3 nextLevel={nextLevel}></Custom3>);
        break;
      case 4:
        setContent(<Custom4 nextLevel={nextLevel}></Custom4>);
        break;
      case 5:
        setContent(<Custom5 handleSubmit={handleSubmit}></Custom5>);
        break;
    }
  }, [level]);

  return (
    <div>
      <div className="relative w-100vw h-66vw">
        <CustomBGImage />
        <div className="absolute w-full h-full flex justify-center">
          <div className=" flex flex-col items-center w-1300 h-45vw border-x border-t border-black bg-white">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTamplate;
