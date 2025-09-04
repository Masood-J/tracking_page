import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

export default function CalendarInput() {
    const [dates, setDates] = useState([null, null]);
    const [startDate, endDate] = dates;

    return (
        <div className="p-2 border-1 border-gray-400 rounded-xl flex items-center gap-2 text-black">
            <span className="text-gray-600"><FiCalendar color={`black`}></FiCalendar></span>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDates(update)}
                placeholderText="Pick a date range"
                className="outline-none font-medium placeholder-black w-35 md:w-full"
                portalId={null}
            />
        </div>
    );
}