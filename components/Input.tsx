import React from "react";
interface Props {
    label:string,
    id:string,
    placeholder: string
}
const Input:React.FC<Props> = ({label,id,placeholder}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="p text-normal_gray" htmlFor={id}>{label}</label>
			<input
				id={id}
                name={id}
				className="input"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
