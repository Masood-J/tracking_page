import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {FiCalendar} from "react-icons/fi";
import { useFormikContext,getIn } from "formik";
export default function DateSingleSelectV2({ onChange,value,FieldName }) {
    const [date, setDate] = useState(null);
    const {errors,touched}=useFormikContext();

    const error=getIn(errors,FieldName)
    const isTouched=getIn(touched,FieldName)
    return(
        <div className={`p-2 border border-gray-300 rounded-xl flex items-center gap-2 text-black ${error ? "border-red-500" : ""}`}>
      <span className="text-gray-600">
        <FiCalendar color="black" />
      </span>
            <DatePicker
                onChange={(date) => onChange(date)}
                selected={value || null}
                placeholderText="Select Date"
                className="outline-none font-medium placeholder-gray w-35 md:w-full"
                portalId={null}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"

            />
        </div>
    )
}