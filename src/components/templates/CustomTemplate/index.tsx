"use client";
import Custom1 from "@/components/organism/Custom1";
import Custom2 from "@/components/organism/Custom2";
import Custom3 from "@/components/organism/Custom3";
import Custom4 from "@/components/organism/Custom4";
import Custom5 from "@/components/organism/Custom5";
import Custom6 from "@/components/organism/Custom6";
import CustomBGImage from "@/components/organism/CustomBGImage";
import { useEffect, useState } from "react";

const CustomTamplate = () => {
  const [level, setLevel] = useState(1);
  const [content, setContent] = useState();
  const nextLevel = () => {
    setLevel(level + 1);
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
        setContent(<Custom5 nextLevel={nextLevel}></Custom5>);
        break;
      case 6:
        setContent(<Custom6 nextLevel={nextLevel}></Custom6>);
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
