import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArrowButton({ onclickHandle, navStatus }) {
    return (
        <button
            className={`flex justify-center items-center ${navStatus?"mr-5":""}`}
            onClick={onclickHandle}
        >
            {navStatus ? (
                <ChevronLeft size={24} stroke="white" strokeWidth={2.5} />
            ) : (
                <ChevronRight size={24} stroke="white" strokeWidth={2.5} />
            )}
        </button>
    );
}