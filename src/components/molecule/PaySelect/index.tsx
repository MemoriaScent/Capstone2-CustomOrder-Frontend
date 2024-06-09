import React from "react";

interface PaySelectProps {
  children: React.ReactNode;
}

const PaySelect: React.FC<PaySelectProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-535 border border-black divide-y divide-black">
      {children}
    </div>
  );
};
export default PaySelect;
