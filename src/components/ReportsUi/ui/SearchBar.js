
import {Search} from "lucide-react";
export default function SearchBar(props) {


    return(

        <div className={`max-w-75 flex flex-row items-center gap-2 rounded-md border-2 border-[#e9edf1] p-2`}>
            <span><Search className={`h-4 w-4 text-gray-500`}></Search></span>
            <input type="text" className={`focus:outline-none`} placeholder={`Search trips`}/>
        </div>
    )
}