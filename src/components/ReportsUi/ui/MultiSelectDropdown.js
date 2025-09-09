import Select from "react-select";
export default function MultiSelectDropdown({ onChange, value }) {
  const options = [
    { value: "1", label: "Noelle Simpson" },
    { value: "2", label: "Evan Allen" },
    { value: "3", label: "Bo Cote" },
    { value: "4", label: "Scarlet Butler" },
    { value: "5", label: "Nirvana Heisenberg" },
    { value: "6", label: "North Korean" },
  ];
  return (
    <div>
      <Select
        isMulti={true}
        instanceId="person-select"
        name={`Person`}
        options={options}
        onChange={onChange}
        value={value}
        className={`min-w-75 max-w-75`}
        classNames={{
          control: () =>
            `min-w-75 border border-gray-300 rounded-full flex items-center`, // 👈 sets height + border
          valueContainer: () => "px-4 py-2",
          option: ({ isFocused, isSelected }) =>
            `px-4 py-2 text-sm cursor-pointer 
            ${isFocused ? "bg-gray-200" : ""} 
            ${isSelected ? "bg-red-500 text-white" : ""}`,
          multiValue: () => "bg-blue-700 rounded-full",
          multiValueLabel: () => "text-blue-700 bg-blue-100",
          multiValueRemove: () => "text-blue-500 bg-blue-100",
          input: () => "ml-2 text-sm text-gray-800",
        }}
        placeholder={`Select a person`}
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: 43,
            borderRadius: 10,
              borderColor:"#e2e8f0",
              borderWidth:2,

          }),
          multiValueLabel: (provided) => ({
            ...provided,
            borderRadius: "5px",
          }),
          multiValue: (provided) => ({
            ...provided,
            borderRadius: "5px",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            borderRadius: "5px",
          }),
        }}
      />
    </div>
  );
}
