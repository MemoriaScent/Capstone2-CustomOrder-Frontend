import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import React from "react";

interface OderItemProps {
  className: string;
  css: string;
  children: React.ReactNode;
  props: any;
}

const OderItem: React.FC<OderItemProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-row divide-y divide-black h-20">
      <Label className="w-170 flex items-center justify-center border-t border-black">
        {props.oderNumber}
      </Label>
      <Label className="w-244 flex items-center justify-center">
        {props.name}
      </Label>
      <Label className="w-155 flex items-center justify-center">
        {props.count}
      </Label>
      <Label className="w-155 flex items-center justify-center">
        {props.price}
      </Label>
      <Label className="w-194 flex items-center justify-center">
        {props.status}
      </Label>
      <Button className="rounded-none w-218" onClick={() => {}}>
        클릭
      </Button>
    </div>
  );
};

export default OderItem;
