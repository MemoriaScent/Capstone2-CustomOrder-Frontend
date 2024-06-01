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
        <div style={bgOrangeStyle} className="animate-introafter1"></div>
        <div style={bgBlackStyle} className="animate-introafter1"></div>
        <div style={bgBlack1Style} className="animate-introafter"></div>
        <div style={bgBlack2Style} className="animate-introafter"></div>
      </div>
      <div className="absolute w-full flex justify-center mb-0">
        <div className="flex flex-col items-center w-1300 h-0 translate-y-45vw border-x border-t border-black bg-white animate-intro "></div>
      </div>
    </div>
  );
};

export default CustomComplete;

const bgOrangeStyle = {
  zIndex: "1",
  width: "0px",
  height: "0px",
  top: "0vw",
  borderTop: "45vw solid transparent",
  borderRight: "100vw solid #FF7A00",
  position: "absolute",
  left: "0",
};

const bgBlackStyle = {
  zIndex: "2",
  width: "0px",
  height: "0px",
  top: "0vw",
  borderTop: "45vw solid transparent",
  borderLeft: "100vw solid black",
  position: "absolute",
};

const bgBlack1Style = {
  zIndex: "0",
  width: "0px",
  height: "0px",
  borderBottom: "0vw solid transparent",
  borderLeft: "50vw solid black",
  position: "absolute",
};

const bgBlack2Style = {
  zIndex: "0",
  width: "0px",
  height: "0px",
  left: "50vw",
  borderBottom: "0vw solid transparent",
  borderRight: "50vw solid black",
  position: "absolute",
};
