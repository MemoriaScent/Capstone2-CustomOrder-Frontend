import CompanyInfo from "@/components/molecule/CompanyInfo";
import CustomerCenter from "@/components/molecule/CustomerCenter";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-20 pb-20 pt-10 bg-black text-white">
      <CompanyInfo />
      <CustomerCenter />
    </div>
  );
};

export default Footer;
