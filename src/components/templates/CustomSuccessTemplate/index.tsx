"use client";
import Custom6 from "@/components/organism/Custom6";
import CustomBGImage from "@/components/organism/CustomBGImage";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { customAtom } from "../CustomTemplate/JAtom";
import getGPTData from "@/api/GPT";

const CustomSuccessTemplate = async () => {
  const router = useRouter();
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  // GPT API 호출
  const custom = useAtomValue(customAtom);

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
            custom.image
          );

          console.log("---------------");

          const like: string[] = [];
          const hate: string[] = [];

          if (response) {
            const dataObject = response["선호도"];

            for (const key in dataObject) {
              if (dataObject.hasOwnProperty(key)) {
                const value = dataObject[key];
                if (value.Level === 1 || value.Level === 2) {
                  like.push(key);
                } else if (value.Level === 0) {
                  hate.push(key);
                }
              }
            }
            const res = { like, hate };
            setResponseData(res);
            useState(false);
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
      <div className="flex flex-col justify-center items-center">
        <div>Loading</div>
      </div>
    );
  }

  if (responseData) console.log(responseData.like);
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
