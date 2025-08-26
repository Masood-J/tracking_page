import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
export default function ArrowButton(props){


    return(

        <button className="mr-4 ml-3 pl-3" onClick={props.onclickHandle}>
            <IoIosArrowBack color="white" size={20} className=" transition hover:scale-120 transition-transform duration-300 ease-in-out"></IoIosArrowBack>
        </button>


    )


}