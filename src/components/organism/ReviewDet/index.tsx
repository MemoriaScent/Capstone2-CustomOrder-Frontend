'use client'
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import TextInputForm from "../TextInputForm";
import { useRouter } from 'next/router';
import  useNavigation  from 'next/navigation';

const ReviewDetails = ({params} : {params : {id:string}}) => {

    return (
      <div className="flex flex-col items-center mt-50">
        <Label className="flex justify-center pretendardSemiBoldFont-32">리뷰</Label>
        <Label className="w-500 text-left mb-5 " >별점</Label>
        <div className="w-500 h-40 flex border border-black pl-25 mb-30 items-center">
          <Label className="">★★★★★</Label>
        </div>
        <div className="w-500 h-300 border border-black pl-25 pt-25 mb-60">
          <Label className="">지속력이 약간 안좋았어요!</Label>
        </div>
        <Button className="w-500 h-50 bg-black text-white mb-200"  
        onClick={() => {
          console.log("gd")
        }}>확인하기</Button>

      </div>
    );
  };

  export default ReviewDetails;