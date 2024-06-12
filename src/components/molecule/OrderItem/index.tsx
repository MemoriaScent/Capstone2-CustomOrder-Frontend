import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import React from "react";

interface OrderItemProps {
  key: number;
  orderNumber: string;
  name: string;
  count: number;
  price: number;
  status: number;
}

const OrderItem: React.FC<OrderItemProps> = ({
  key,
  orderNumber,
  name,
  count,
  price,
  status,
}) => {
  return (
    <div className="flex flex-row divide-y divide-black h-20">
      <Label className="w-170 flex items-center justify-center border-t border-black">
        {orderNumber}
      </Label>
      <Label className="w-244 flex items-center justify-center">{name}</Label>
      <Label className="w-155 flex items-center justify-center">{count}</Label>
      <Label className="w-155 flex items-center justify-center">{price}</Label>
      <Label className="w-194 flex items-center justify-center">{status}</Label>
      <Button className="rounded-none w-218" onClick={() => {}}>
        클릭
      </Button>
    </div>
  );
};

export default OrderItem;
