import { FaArrowLeft } from "react-icons/fa6";

export default function ArrowButton(props){


    return(

        <button className="border-1 ml-2 rounded-md text-gray-400" onClick={props.onclickHandle}>
            <FaArrowLeft color="black" size={20} className="hover:bg-gray-400 transition hover:scale-120 transition-transform duration-300 ease-in-out"></FaArrowLeft>
        </button>


    )


}