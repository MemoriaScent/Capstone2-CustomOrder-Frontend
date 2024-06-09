import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { useRouter } from "next/navigation";
import React from "react";

interface MenuProps {
  clickCloseMenu: (event: React.MouseEvent) => void;
  completeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ clickCloseMenu, completeMenu }) => {
  const router = useRouter();
  return (
    <div className="z-20 h-full fixed top-0 left-0 flex flex-col justify-start items-start w-400  bg-black text-white pb-5">
      <Button
        className="after:content-['\00d7'] text-4xl mt-3.5 ml-2"
        onClick={clickCloseMenu}
      >
        {" "}
      </Button>
      <div className="p-12">
        <div className="flex flex-col h-600  pretendardNormalFont-24">
          <div className="mb-10">
            <Button
              className="pl-0"
              onClick={(event) => {
                completeMenu();
                event.stopPropagation;
                router.push("/");
              }}
            >
              Main
            </Button>
          </div>
          <div className="mb-10">
            <div>Diffuser</div>
            <div className="pretendardNormalFont-20 flex flex-col items-start">
              <Button
                className="mt-2.5"
                onClick={(event) => {
                  completeMenu();
                  event.stopPropagation;
                  router.push("/product");
                }}
              >
                All Products
              </Button>
              <Button
                className="mt-2.5"
                onClick={(event) => {
                  completeMenu();
                  event.stopPropagation;
                  router.push("/custom");
                }}
              >
                Custom Diffuser
              </Button>
              <Button
                className="mt-2.5"
                onClick={(event) => {
                  completeMenu();
                  event.stopPropagation;
                  // 임시로 1번페이지로 바로가게 만듬
                  router.push("/product");
                }}
              >
                Signature Diffuser
              </Button>
            </div>
          </div>
          <div className="mb-10">
            <div>About</div>
            <div className="pretendardNormalFont-20 flex flex-col items-start">
              <Button onClick={() => {}} className="mt-2.5">
                Brand Story
              </Button>
              <Button onClick={() => {}} className="mt-2.5 cursor-not-allowed">
                Promotion
              </Button>
              <Button onClick={() => {}} className="mt-2.5 cursor-not-allowed">
                Collaboration
              </Button>
            </div>
          </div>
          <div className="mb-10">
            <div>Find Us</div>
            <div className="pretendardNormalFont-20 flex flex-col items-start">
              <Button onClick={() => {}} className="mt-2.5 cursor-not-allowed">
                Store Locator
              </Button>
            </div>
          </div>
          <div className="flex items-start">
            <Button
              className="mb-10 pl-0"
              onClick={(event) => {
                completeMenu();
                event.stopPropagation;
                router.push("/my");
              }}
            >
              My Page
            </Button>
          </div>
          <div className="flex flex-row border-b border-white mb-10">
            <Input className="bg-inherit outline-none cursor-white mb-2"></Input>
            <Label>
              <img src="/Search.svg" width="20" height="20" color="white"></img>
            </Label>
          </div>
          <div className="flex flex-row justify-end">
            <Button
              className="pr-0"
              onClick={(event) => {
                completeMenu();
                event.stopPropagation;
                router.push("/auth/login");
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
