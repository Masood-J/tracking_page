import {FiCalendar} from "react-icons/fi";
import DatePicker from "react-datepicker";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
export default function DateSelect({placeholder}){
    const [selectedDate, setSelectedDate] = useState(null);

    return(

        <div className="p-2 border-2 border-[#e2e8f0] rounded-xl flex items-center gap-2 text-black">
            <span className="text-gray-600"><FiCalendar color={`black`}></FiCalendar></span>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Pick a date"
                className="flex-1 w-full outline-none font-medium placeholder-black"
                dateFormat="dd/MM/yyyy"      />
        </div>
    )
}