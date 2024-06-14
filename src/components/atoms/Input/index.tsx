import React from "react";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  canEdit?: boolean;
  name?: string;
  checked?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  canEdit = true,
  name,
  checked = true
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 ${className} align-baseline`}
      readOnly={!canEdit}
      name={name}
      checked={checked}
    />
  );
};

export default Input;