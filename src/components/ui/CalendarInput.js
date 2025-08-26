export default function CalendarInput(){

    return(
        <div className="relative w-full">
            {/* The input field with a text-only placeholder */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v10a2 2 0 002 2h10a2 2 0 002-2V8h1a1 1 0 100-2h-1V4a2 2 0 00-2-2H6zm0 2h8v2H6V4zm-1 4h12v9a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
                </svg>
            </div>
            <input
                type="text"
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pick a date"
            />

            {/* The icon container, which is positioned over the input */}

        </div>
    )
}