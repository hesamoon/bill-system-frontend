/* eslint-disable react/prop-types */

// icons
import searchIcon from "../assets/search.svg";

function SearchBox({ value, onChange, baseOn }) {
  return (
    <div className="flex items-center gap-2 border border-outline rounded-xl p-2 w-1/3">
      <img className="w-7 h-7" src={searchIcon} alt="search" />

      <input
        className="w-full bg-transparent outline-none"
        type={baseOn === 0 ? "number" : "text"}
        placeholder="جست و جو..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
