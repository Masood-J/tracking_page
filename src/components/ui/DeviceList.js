

export default function DeviceList(props){



    return (
        <div>
        <div className="flex flex-col ml-3 mt-3">
            <div className="flex flex-row justify-between">
            <label className="flex items-center text-black font-medium" htmlFor="devices">
                <input className="w-4 h-4 mr-3" type="checkbox" name="devices"/>
                <h2 className="font-semibold text-lg">{props.name}</h2>
            </label>
                <p className="bg-gray-400 text-white mr-3 p-1.5 rounded-md">Not Connected</p>
        </div>
            <div className="ml-3 mt-3 text-gray-500 font-normal">
                <hr/>
                <h4 className="mt-2 text-sm">IMEI:{props.imei}</h4>
                <h4 className="mt-2 text-sm">Type: {props.DType}</h4>
                <hr className="mt-2"/>
                <h4 className="text-sm">Last Update</h4><h4 className="mt-2 text-sm">No data availaible</h4>
            </div>
        </div>
            <hr className="mt-3"/>
        </div>
    )
}