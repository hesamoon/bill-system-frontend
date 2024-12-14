/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// icons
import arrowIcon from "../assets/arrow-down.svg";

// data
import { cities, provinces } from "../constants/data";

function SelectOption({
  type,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
}) {
  const [open, setOpen] = useState(false);
  const [controledCities, setControledCities] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        open && setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open]);

  useEffect(() => {
    // setSelectedCity(null);
    if (selectedState !== null) {
      const selState = cities.filter(
        (city) => city.province_id === selectedState.id
      );

      if (selState) setControledCities(selState);
      else setControledCities([]);
    }
  }, [selectedState]);

  return (
    <div
      className={`relative flex items-center justify-between p-2 border border-outline rounded-lg cursor-pointer`}
      ref={ref}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center gap-1">
        <span className={`font-semibold text-sm text-tx_primary`}>
          {type === 0
            ? selectedState === null
              ? "استان را انتخاب کنید"
              : selectedState.name
            : selectedCity === null
            ? "شهرستان را انتخاب کنید"
            : selectedCity.name}
        </span>
      </div>
      <img
        className={`transition-all ease-in-out duration-300 ${
          open ? "rotate-180" : null
        }`}
        src={arrowIcon}
        alt="arrow"
      />

      {/* options */}
      {open && (
        <div className="w-full max-h-40 overflow-y-auto no-scrollbar absolute top-12 right-0 border border-outline rounded-xl divide-y-[1px] z-30 bg-gray-50 shadow-md">
          {type === 0 ? (
            provinces
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((state, index) => (
                <p
                  key={state.id}
                  className={`font-semibold text-sm text-tx_secondary py-2 px-4 hover:bg-outline_level1 ${
                    provinces.length === 1
                      ? "rounded-xl"
                      : index === 0
                      ? "rounded-t-xl"
                      : index === provinces.length - 1
                      ? "rounded-b-xl"
                      : null
                  }`}
                  onClick={() => setSelectedState(state)}
                >
                  {state.name}
                </p>
              ))
          ) : controledCities.length > 0 ? (
            controledCities
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((city, index) => (
                <p
                  key={index}
                  className={`font-semibold text-sm text-tx_secondary py-2 px-4 hover:bg-outline_level1 ${
                    controledCities.length === 1
                      ? "rounded-xl"
                      : index === 0
                      ? "rounded-t-xl"
                      : index === controledCities.length - 1
                      ? "rounded-b-xl"
                      : null
                  } `}
                  onClick={() => setSelectedCity(city)}
                >
                  {city.name}
                </p>
              ))
          ) : (
            <p
              className={`font-bold text-center text-sm text-tx_secondary py-2 px-4`}
            >
              استان خود را انتخاب کنید
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SelectOption;
