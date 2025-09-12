import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {FiCalendar} from "react-icons/fi";

export default function DateSingleSelect({ onChange,value }) {
    const [date, setDate] = useState(null);
    return(
        <div className="p-2 border border-gray-400 rounded-xl flex items-center gap-2 text-black">
      <span className="text-gray-600">
        <FiCalendar color="black" />
      </span>
            <DatePicker
                onChange={(date) => onChange(date)}
                selected={value || null}
                placeholderText="Select Date"
                className="outline-none font-medium placeholder-black w-35 md:w-full"
                portalId={null}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"

            />
        </div>
    )
}