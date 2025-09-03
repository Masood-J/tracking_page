"use client"
import { LuTruck } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { PiRoadHorizonFill } from "react-icons/pi";
import DatePicker from "react-datepicker"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,ReferenceLine } from "recharts";
import FleetCard from "@/components/ui/FleetCard";
import Card from "@/components/ui/Card";
import CircleBar from "@/components/ui/CircleBar"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { LuClock3 } from "react-icons/lu";
import Map from "@/components/ui/Map"
import DeviceList from "@/components/ui/DeviceList"
import { PiLessThanBold } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import DashButton from "@/components/ui/DashButton";
import DashButton1 from "@/components/ui/DashButton1";
import { FiPlus } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import CalendarInput from "@/components/ui/CalendarInput";
import { BsActivity } from "react-icons/bs";
import DateSelect from "@/components/ui/DateSelect"
import { Route } from "lucide-react";
import { SiSpeedtest } from "react-icons/si";
export default function main(props){

    const data = [
        { month: "Jan", sales: 0 },
        { month: "Feb", sales: 1 },
        { month: "Mar", sales: 2 },
        { month: "Apr", sales: 3 },
        { month: "May", sales: 4 },
    ];

    return (
        <div className="flex-1 bg-white px-5 min-h-screen">
            <header className="pt-5 pl-5 flex flex-row justify-between">
                <div className="font-black">
                    <h1 className="text-4xl text-black">Dashboard</h1>
                    <p className="text-[gray] font-medium">Comprehensive Fleet Management & Analytics</p>
                </div>
                <div className="Buttons flex flex-col gap-2">
                    <div className="flex flex-row gap-3 mr-5">
                        <DashButton title={`Refresh Dashboard`}></DashButton>
                        <DashButton title={`Edit Layout`}></DashButton>
                        <DashButton1>
<div className="flex flex-row items-center gap-4"><FiPlus />
<p>Add Widget</p>
</div></DashButton1>

                    </div>
                    <div className="flex flex-row gap-3 mt-3 ml-8">

                        <DateSelect></DateSelect>

                        <button className="bg-blue-600 p-1.5 rounded-xl disabled:opacity-50 font-semibold" disabled >Apply Filters</button>
                    </div>
                </div>
            </header>

            <Card mt={`mt-10`} h={`h-45`}  title="Fleet Summary" desc="Key metrics at a glance" icon={<LuTruck></LuTruck>}>
                    <div className="flex flex-row flex-wrap gap-3 mt-3">
                        <FleetCard title="Total Distance" value="0 km" icon={<Route className={`text-blue-500 h-4 w-4`}/>}></FleetCard>
                        <FleetCard title="Fleet Size" value="2" icon={<LuTruck color="blue"/>}></FleetCard>
                        <FleetCard title="In Maintenance" value="0" icon={<LuWrench color="orange"/>}></FleetCard>
                    </div>
            </Card>

            <div className="flex flex-row flex-wrap justify-center gap-2 mt-4 text-black">
                <Card title="Driver Safety Score" desc="Overall fleet safety rating" icon={<MdOutlineShield></MdOutlineShield>}>
                    <div className="flex flex-col items-center justify-center gap-2">
<CircleBar styles={`border-[#f1f5f9]`}>
<div className="flex flex-col">
    <h1 className="text-center font-bold text-3xl">0</h1>
    <p>/100</p>
</div>
</CircleBar>
                        <div className="flex flex-row gap-2 items-center">
                            <IoMdCheckmarkCircleOutline color={`red`} size={`20`} ></IoMdCheckmarkCircleOutline>
                            <h3 className="text-red-700 font-medium">Poor Safety!</h3>
                        </div>

                        <p className="text-[#6e7d8b] font-medium">Safety improvement needed, immediate attention required</p>
                    </div>
                </Card>
                <Card title={`Activity Monitor`} desc={`Driver and vehicle activity`} icon={<BsActivity></BsActivity>}>
<div className="flex flex-row gap-3 mt-3">
                    <FleetCard title={`Idling`} value={`0`} icon={<LuClock3 color={`orange`}></LuClock3>}></FleetCard>
                    <FleetCard title={`Over Speed`} value={`0`} icon={<SiSpeedtest color={`red`}></SiSpeedtest>}></FleetCard>
</div>
                </Card>
            </div>
            <div className="flex flex-row flex-wrap mt-3 rounded-md gap-3 h-[560px]" style={{}}>
                <Map></Map>
                <Card CustomP={`p-0`} h={`h-full`}>
                    <div className="h-10 ml-5">
                        <h2 className=" mt-5 font-bold text-lg text-black">Devices (10)</h2>
                    </div>

                    <div className="h-[450px] overflow-y-auto">
                        <div className="flex items-center bg-[#f1f5f9] pt-3 pl-3 pb-3">
                            <input className="w-4 h-4 mr-2" type="checkbox" name="all" />
                            <label  htmlFor="all">
                                Select All
                            </label>
                        </div>
                        <DeviceList
                        name="Device" imei="866069063446437" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="Tucker Sparks" imei="67923445667787" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="123456" imei="533425355343332" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="Toyota" imei="866062063426437" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="Device" imei="866069063446437" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="Device" imei="866069063446437" DType={`GPS Tracker`}></DeviceList>
                        <DeviceList
                            name="Device" imei="866069063446437" DType={`GPS Tracker`}></DeviceList>


                    </div>
                    <div className="flex flex-row h-12 justify-between items-center rounded-b-2xl border-t-1 text-gray-400 pt-7">

                        <div className="flex flex-row items-center mb-7 ml-3">
                            <button className="border-1 mr-2 rounded-md p-2 text-[#e2e8f0] disabled:opacity-50">
                                <MdKeyboardArrowLeft color={`black`}></MdKeyboardArrowLeft>
                            </button>
                            <h2 className="font-semibold text-black">1 / 6</h2>
                            <button className="p-2 border-2 ml-2 rounded-md text-gray-400 border-[#e2e8f0] "><MdKeyboardArrowRight
                            color={`black`}></MdKeyboardArrowRight>
                            </button>
                        </div>
                        <div className="mb-7 mr-3">
                            <select className="rounded-xl border-1 p-2 pl-3 pr-3 border-[#e2e8f0] text-black" name="select" id="10">
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>
                </Card>
            </div>
            {props.children}


        </div>
    )
};