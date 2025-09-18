
import Select from 'react-select'
export default function ReactSelect({ options, instanceId,onChange,value = "default-select",errors, ...props }){

    return(

            <Select onChange={(data)=>onChange(data)} options={options} instanceId={instanceId} value={value}  styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius:'10px',
                    padding: "2px",
                    ...(errors
                        ? {
                            borderColor: "#ef4444", // border-red-500
                            boxShadow: state.isFocused ? "0 0 0 1px #f87171" : "none", // focus:ring-red-400
                        }
                        : {
                            // normal state
                            borderColor: state.isFocused ? "#3b82f6" : "#d1d5dc", // focus:border-blue-500 or default gray
                            boxShadow: state.isFocused ? "0 0 0 1px #60a5fa" : "none", // focus:ring-blue-400
                            transition: "border-color 0.2s, box-shadow 0.2s",

                            // hover
                            "&:hover": {
                                borderColor: "#9ca3af", // hover:border-gray-400
                            },
                        }),

                }),
            }}
            />

    )
}