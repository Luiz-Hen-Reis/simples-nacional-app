import { X } from "lucide-react";
import { ChangeEvent } from "react";

type Props = {
  inputType: string;
  inputValue: string;
  resetSearch?: () => void;
  placeholder?: string;
  maxLength?: number;
  handleClick?: () => void;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput({
  inputType,
  inputValue,

  handleClick,
  handleChange,
  placeholder,
  resetSearch,
  maxLength,
}: Props) {
  return (
    <div className="relative">
      <input
        type={inputValue!.length > 4 ? "text" : inputType}
        onClick={handleClick}
        onChange={handleChange}
        className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
        value={inputValue}
        placeholder={placeholder}
        autoFocus
        maxLength={maxLength}
      />
      <span
        className={`${
          inputValue!.length > 4 ? "flex" : "hidden"
        } absolute top-4 right-2 cursor-pointer`}
        onClick={resetSearch}
      >
        <X />
      </span>
    </div>
  );
}
