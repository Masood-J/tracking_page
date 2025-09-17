import { useFormikContext, getIn } from "formik";
import { useEffect } from "react";

const ShowErrorV2 = ({ name }) => {
    const { errors, touched, values, validateField } = useFormikContext();

    const fieldError = getIn(errors, name);
    const fieldTouched = getIn(touched, name);
    const fieldValue = getIn(values, name);

    useEffect(() => {
        if (fieldTouched && fieldValue !== "") {
            validateField(name);
        }
    }, [fieldValue]);

    return fieldTouched && fieldError ? (
        <span className="text-red-700">{fieldError}</span>
    ) : null;
};

export default ShowErrorV2;
