
import Select from 'react-select'
export default function ReactSelect({ options, instanceId = "default-select", ...props }){

    return(

            <Select options={options} instanceId={instanceId}  styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderRadius:'10px',
                }),
            }}/>

    )
}