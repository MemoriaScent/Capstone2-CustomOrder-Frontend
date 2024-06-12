"use client";
import Custom6 from "@/components/organism/Custom6";
import CustomBGImage from "@/components/organism/CustomBGImage";
import { useRouter } from "next/navigation";

const CustomSuccessTemplate = () => {
  const router = useRouter();
  const complete = () => {
    router.push("/custom/complete");
  };
  return (
    <div>
      <div className="relative w-100vw h-66vw">
        <CustomBGImage />
        <div className="absolute w-full h-full flex justify-center">
          <div className=" flex flex-col items-center w-1300 h-45vw border-x border-t border-black bg-white">
            <Custom6 complete={complete}></Custom6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSuccessTemplate;
