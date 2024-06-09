"use client";
import { useRouter } from "next/navigation";

const CustomComplete = () => {
  const router = useRouter();
  console.log(router);
  setTimeout(
    () => router.push("/payment?name=CustomDiffuser&count=1&price=60000"),
    6000
  );
  return (
    <div className="relative w-100vw h-45vw animate-introafter2 bg-white">
      <div className="">
        <div className="animate-introafter1 bgOrangeStyle-end"></div>
        <div className="animate-introafter1 bgBlackStyle-end"></div>
        <div className="animate-introafter bgBlackStyle-1-end"></div>
        <div className="animate-introafter bgBlackStyle-2-end"></div>
      </div>
      <div className="absolute w-full flex justify-center mb-0">
        <div className="flex flex-col items-center w-1300 h-0 translate-y-45vw border-x border-t border-black bg-white animate-intro "></div>
      </div>
    </div>
  );
};

export default CustomComplete;
