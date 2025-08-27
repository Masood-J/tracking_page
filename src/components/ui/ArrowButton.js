import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArrowButton({ onclickHandle, navStatus }) {
    return (
        <button
            className="mr-4 ml-3 pl-3"
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