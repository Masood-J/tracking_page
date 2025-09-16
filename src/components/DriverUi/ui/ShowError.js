import { useFormikContext } from "formik";
import { useEffect } from "react";

const ShowError = ({ name }) => {
    const { errors, touched, values, validateField } = useFormikContext();

    useEffect(() => {
        if (touched[name] && values[name] !== "") {
            validateField(name);
        }

    }, [values[name]]);

    return touched[name] && errors[name] ? (
        <span className="text-red-700">{errors[name]}</span>
    ) : null;
};

export default ShowError;
