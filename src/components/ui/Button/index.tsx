

type Props = {
  inputValue: string;
  handleClick?: () => void;
  typeSubmit?: boolean;
};

export default function Button({
  inputValue,
  handleClick,
  typeSubmit
}: Props) {
  return (
    <>
      {!typeSubmit &&
        <input
          type="button"
          onClick={handleClick}
          className="text-xl py-4 px-5 rounded-lg shadow-lg transition-colors  text-white bg-blue-700 hover:bg-blue-700/75 cursor-pointer"
          value={inputValue}
        />
      }
      {typeSubmit &&
        <input
        type="submit"
        onClick={handleClick}
        className="text-xl py-4 px-5 rounded-lg shadow-lg transition-colors  text-white bg-blue-700 hover:bg-blue-700/75 cursor-pointer"
        value={inputValue}
      />
      }
    </>
  );
}
