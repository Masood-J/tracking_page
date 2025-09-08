import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import { format } from "date-fns";

export default function CalendarInput({onChange}) {
    const [dates, setDates] = useState([null, null]);
    const [startDate, endDate] = dates;

    const displayValue =
        startDate && endDate
            ? `${format(startDate, "MMM dd, yyyy")} - ${format(endDate, "MMM dd, yyyy")}`
            : "";

    return (
        <div className="p-2 border border-gray-400 rounded-xl flex items-center gap-2 text-black">
      <span className="text-gray-600">
        <FiCalendar color="black" />
      </span>
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {setDates(update);
                if(onChange) onChange({ startDate: update[0], endDate: update[1] });;}}
                placeholderText="Pick a date range"
                value={displayValue}
                className="outline-none font-medium placeholder-black w-35 md:w-full"
                portalId={null}
            />
        </div>
    );
}
