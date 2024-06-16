"use client";
import Button from "@/components/atoms/Button";
import {
  customAtom,
  gptImageFileAtom,
} from "@/components/templates/CustomTemplate/JAtom";
import { useAtom, useSetAtom } from "jotai";
import React, { useRef, useState } from "react";

interface CustomProps {
  nextLevel: () => void;
}

const Custom2: React.FC<CustomProps> = ({ nextLevel }) => {
  const [imgSrc, setImgSrc] = useState<string>(
    "/customImage/default-image.png"
  );
  const [custom, setCustom] = useAtom(customAtom);
  const [imageFile, setImageFile] = useAtom(gptImageFileAtom);
  const [imageUpload, setImageUpload] = useState<boolean>(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 업로드 된 파일 받아옴
    // 파일이 정상적으로 업로드되지 않은 경우 종료
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.type.startsWith("image/")) {
      setImageFile(file);
    }

    // 파일리더 객체 생성
    // 받아온 파일을 DataURL 형식으로 변환(Base64 인코딩 문자열)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // 파일 읽기가 완료되었을 때 이미지 변경 콜백함수 실행
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImgSrc(event.target?.result);
        setCustom({
          image: event.target?.result,
          story: custom.story,
          taste: custom.taste,
          name: custom.name,
        });
      }
    };
  };
  return (
    <div className="mt-20 z-10">
      <div className="mb-20 flex flex-row justify-center">
        <img src={imgSrc} className="h-200" />
      </div>

      <div className="flex flex-col items-center">
        <input
          className="hidden"
          type="file"
          accept="customImage/*"
          onChange={handleChange}
          ref={fileInput}
        ></input>
        <Button
          className="w-300 h-50 bg-black text-white rounded-none mb-4"
          onClick={() => {
            fileInput.current?.click();
            setImageUpload(true);
          }}
        >
          사진 업로드 하기
        </Button>
        <Button
          className="w-300 h-50 bg-white text-black rounded-none border border-black pretendardNormalFont-18"
          onClick={nextLevel}
        >
          {imageUpload ? "다음" : "건너뛰기"}
        </Button>
      </div>
    </div>
  );
};

export default Custom2;
