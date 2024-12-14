/* eslint-disable react/prop-types */
function Button({ value, onClick, onlyBorder = false }) {
  return (
    <button
      className={`${
        onlyBorder
          ? "border border-primary text-primary hover:bg-[#176FCF1a]"
          : "text-white bg-primary hover:bg-[#176FCFa1]"
      } transition-all ease-linear duration-200 text-center text-base py-2.5 px-8 rounded-xl`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
