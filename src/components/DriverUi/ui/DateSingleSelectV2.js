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
        <div className={`p-2 rounded-xl flex items-center gap-2 text-black border-1 border-gray-300 focus-within:outline-none   ${error ? "border-red-500 focus-within:ring-1 focus-within:ring-red-400" : "focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-400 focus-within:shadow hover:border-gray-400"}`}
        >
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