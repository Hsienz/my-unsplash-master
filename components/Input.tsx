import React, { HTMLInputTypeAttribute } from "react";
interface Props {
    label:string,
    id:string,
    placeholder?: string
	type?: HTMLInputTypeAttribute
}
const Input:React.FC<Props> = ({label,id,placeholder,type}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="p text-normal_gray" htmlFor={id}>{label}</label>
			<input
				id={id}
                name={id}
				className="input"
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
};

export default Input;
