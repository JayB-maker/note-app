import Select from "react-select";
import "./Dropdown.scss";

interface DropdownTypes {
  dropdownClass?: string;
  labelClass?: string;
  label?: string;
  placeholder?: string;
  onChange?: any;
  value?: string;
  id?: string;
  name?: string;
  className?: string;
  options?: any;
  selectedOption?: null;
  setSelectedOption?: Function;
}

const Dropdown = (props: DropdownTypes) => {
  const {
    dropdownClass,
    labelClass,
    label,
    placeholder,
    value,
    id,
    name,
    className,
    onChange,
    // options,
  } = props;

  const options = [
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ay" },
    { label: "Jayb", value: "Ao" },
    { label: "Jayb", value: "yo" },
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ayfo" },
    { label: "Jayb", value: "Ayro" },
    { label: "Jayb", value: "Ay o" },
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ay" },
    { label: "Jayb", value: "Ao" },
    { label: "Jayb", value: "yo" },
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ayfo" },
    { label: "Jayb", value: "Ayro" },
    { label: "Jayb", value: "Ay o" },
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ay" },
    { label: "Jayb", value: "Ao" },
    { label: "Jayb", value: "yo" },
    { label: "Jayb", value: "Ayo" },
    { label: "Jayb", value: "Ayfo" },
    { label: "Jayb", value: "Ayro" },
    { label: "Jayb", value: "Ay o" },
  ];

  return (
    <>
      <div className={`dropdown-input ${className}`}>
        <label className={`label ${labelClass}`} htmlFor={id}>
          {label}
        </label>
        <Select
          onChange={console.log}
          options={options}
          placeholder={placeholder}
          className={`dropdown ${dropdownClass}`}
          id={id}
        />
      </div>
    </>
  );
};

export default Dropdown;
