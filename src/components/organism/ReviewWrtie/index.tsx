'use client'
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import TextInputForm from "../TextInputForm";
import { useRouter } from 'next/router';
import  useNavigation  from 'next/navigation';
import Dropdown from "@/components/atoms/DropDown";
import { useState } from "react";

const ReviewWrite = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (value: string) => {
        setSelectedValue(value);
    };

    const options = [
        { value: '', label: '' },
        { value: '1', label: '★' },
        { value: '2', label: '★★' },
        { value: '3', label: '★★★' },
        { value: '4', label: '★★★★' },
        { value: '5', label: '★★★★★' },
    ];
    return (
      <div className="flex flex-col items-center mt-50">
        <Label className="flex justify-center pretendardSemiBoldFont-32">리뷰</Label>
        <Label className="w-500 text-left mb-5 " >별점</Label>
        
        <Dropdown
                options={options}
                onChange={handleDropdownChange}
                value={selectedValue}
                className="w-500 h-40 flex border border-black pl-25 mb-30 items-center"
            />
        
        
            <textarea 
    className="w-500 h-300 border border-black pl-25 pt-25 mb-60" 
    placeholder="리뷰를 적어주세요">
    </textarea>
        
        <Button className="w-500 h-50 bg-black text-white mb-200"  
        onClick={() => {
          console.log("gd")
        }}>확인하기</Button>

      </div>
    );
  };

  export default ReviewWrite;