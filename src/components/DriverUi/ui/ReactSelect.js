
import Select from 'react-select'
export default function ReactSelect({ options, instanceId,onChange,value = "default-select",errors, ...props }){

    return(

            <Select onChange={(data)=>onChange(data)} options={options} instanceId={instanceId} value={value}  styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius:'10px',
                    padding: "2px",
borderColor:errors? "#ef4444":"#d1d5dc",
                }),
            }}/>

    )
}