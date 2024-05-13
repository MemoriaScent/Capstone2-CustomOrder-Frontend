import React from 'react';

interface DropdownProps {
    options: {value: string; label: string} [];
    onChange: (value:string) => void;
    value : string;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, value, className }) => {
    return(
        <select value={value} onChange={(e)=> onChange(e.target.value)} className={className}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
};

export default Dropdown;