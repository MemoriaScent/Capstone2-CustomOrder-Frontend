"use client";
import Custom6 from "@/components/organism/Custom6";
import CustomBGImage from "@/components/organism/CustomBGImage";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { customAtom, gptImageFileAtom } from "../CustomTemplate/JAtom";
import getGPTData from "@/api/GPT";
import Label from "@/components/atoms/Label";

const CustomSuccessTemplate = async () => {
  const router = useRouter();
  const [responseData, setResponseData] = useState<{
    like: string[];
    hate: string[];
  }>();
  const [loading, setLoading] = useState<boolean>(true);

  // GPT API 호출
  const custom = useAtomValue(customAtom);
  const imageFile = useAtomValue(gptImageFileAtom);
  useEffect(() => {
    const fetchData = async () => {
      if (!custom.story && !custom.taste) {
        console.log("no text");
        return;
      } else if (!custom.image) {
        console.log("no image");
        return;
      } else {
        try {
          const response = await getGPTData(
            custom.story + custom.taste,
            imageFile
          );

          const like = [];
          const hate = [];

          if (response) {
            const dataObject = response["선호도"];

            for (const key in dataObject) {
              if (dataObject.hasOwnProperty(key)) {
                console.log(`0 ${key} `);
                const value = dataObject[key];
                if (value.Level === 2) {
                  console.log(key.toString());
                  like.push(key.toString());
                } else if (value.Level === 0) {
                  console.log(key.toString());
                  hate.push(key.toString());
                }
              }
            }
            const res = { like, hate };
            setResponseData(res);
            setLoading(false);
          }
        } catch (error) {
          console.error("API 호출 오류:", error);
        }
      }
    };

    fetchData();
  }, [custom]);

  if (loading) {
    return (
      <div className="relative w-100vw h-66vw">
        <CustomBGImage />
        <div className="absolute w-full h-full flex justify-center">
          <div className="absolute z-10 w-full h-full flex justify-center bg-black cursor-wait opacity-10"></div>
          <div className=" flex flex-col items-center justify-center w-1300 h-45vw border-x border-t border-black bg-white">
            <div className="z-30 bg-white border p-32 flex flex-col items-center rounded-[30px] cursor-wait ">
              <Label className=" mb-20 pretendardNormalFont-16">
                당신의 이야기를 향기로 변환하고 있어요.
              </Label>
              <img
                src="/loading.svg"
                width="20"
                height="20"
                className="animate-spin w-20 h-20 "
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (responseData) {
    console.log(responseData);
  }
  const complete = () => {
    router.push("/custom/complete");
  };
  return (
    <div>
      <div className="relative w-100vw h-66vw">
        <CustomBGImage />
        <div className="absolute w-full h-full flex justify-center">
          <div className=" flex flex-col items-center w-1300 h-45vw border-x border-t border-black bg-white">
            <Custom6 complete={complete} note={responseData}></Custom6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSuccessTemplate;
