import {Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import FleetCard from "@/components/ui/FleetCard";
import Card from "@/components/ui/Card";
import { LuTruck } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TiWarningOutline } from "react-icons/ti";
import VStats from "@/components/ui/VStats";
import { IoMdArrowUp } from "react-icons/io";
import WeeklyGraph from "@/components/ui/WeeklyGraph";
export default function Analytics(){


    const data = [
        { month: "Jan", sales: 0 },
        { month: "Feb", sales: 1 },
        { month: "Mar", sales: 2 },
        { month: "Apr", sales: 3 },
        { month: "May", sales: 4 },
    ];


    return(
        <div>
        <div className="flex flex-row gap-3  mt-4">
            <Card title={`Safety Incidents`} desc={`Breakdown of safety violations`} icon={<TiWarningOutline></TiWarningOutline>}>
                <div>
                    <ResponsiveContainer width={250} height={250} className="">
                        <LineChart className="" data={data}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
                            <ReferenceLine x={0} stroke="gray" strokeDasharray="5 5" />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="flex flex-row items-center whitespace-nowrap">
                        <div className="bg-blue-600 w-6 h-3 mr-2"></div>
                        <h6 className="mr-2 text-xs">idling</h6>
                        <div className="bg-orange-400 w-6 h-3 mr-1"></div>
                        <h6 className="mr-2 text-xs">Harsh Breaking</h6>
                        <div className="bg-red-500 w-6 h-3 mr-2"></div>
                        <h6 className="text-xs">Overspeeding</h6>
                    </div>
                </div>
            </Card>

            <Card title={`Fleet Overview`} desc={`Summary of your fleet status`} icon={<LuTruck></LuTruck>}>
               <FleetCard title={`Vehicles`} value={`2`} icon={<LuTruck color={`blue`}></LuTruck>}>

               </FleetCard>
<div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between mt-3">
                    <div className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline
                        color={`green`}></IoCheckmarkCircleOutline>
                        <h3 className="text-black ml-2">Active Vehicles</h3>
                    </div>
                    <p className="text-green-600 rounded-full border-1 pl-3 pr-3">0</p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <TiWarningOutline color={`orange`}></TiWarningOutline>
                        <h3 className="text-black ml-2">Maintenance Due</h3>
                    </div>
                    <p className="text-orange-400 rounded-full border-1 pl-3 pr-3">0</p>
                </div>
</div>
            </Card>
            <Card title="Vehicle Status" desc={`Current Status of your vehicles`} h={`h-97`} icon={<LuTruck></LuTruck>}>

                <div className="flex flex-col overflow-y-auto max-h-70">
                   <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Unknown`} active={false} background={`bg-red-600`}></VStats>

                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Active`} active={true}></VStats>
                    <VStats name={`Vehicle:`} time={`22 Days Ago`} status={`Unknown`} active={false} ></VStats>

                </div>
            </Card>
            <Card CustomP={`p-0`} title={`Harsh Acceleration Events`} margin={`mt-6 ml-6`} gradient={`bg-gradient-to-r from-[#fff6eb] to-[#ffeed9] pb-3 rounded-t-2xl`} icon={<IoMdArrowUp className={`mt-6 ml-6 mr-4`} color={`green`}></IoMdArrowUp>}>
                <div className="flex flex-row justify-between ml-3">
                    <div>
                        <h1 className="text-black text-2xl font-bold">0</h1>
                        <p className="text-gray-400 whitespace-nowrap">Total this week</p>
                        <h3 className="text-black font-medium mt-3">Weekly Trend</h3>
                    </div>
                    <div>
                        <p className="bg-green-200 text-green-900 font-medium rounded-3xl p-0.5 mt-4 mr-3 pr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline-block">
                            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
                        </svg>
                            100% from last week
                        </p></div>
                </div>
                <WeeklyGraph></WeeklyGraph>
            </Card>
        </div>
            <div className="flex flex-row gap-3 max-h-90 mt-4">
                <Card CustomP={`p-0`}  title={`Harsh Braking Events`} margin={`mt-6 ml-6 rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#fef1f1] to-[#fee3e3] pb-3`}>

                    <div className="flex flex-row justify-between ml-3">
                        <div>
                            <h1 className="text-black text-2xl font-bold">0</h1>
                            <p className="text-gray-400 whitespace-nowrap">Total this week</p>
                            <h3 className="text-black font-medium mt-3">Weekly Trend</h3>
                        </div>
                    </div> <div>
                    <WeeklyGraph></WeeklyGraph>

                </div>

                </Card>

                <Card CustomP={`p-0`}  title={`Harsh Cornering Events`} margin={`mt-6 ml-6 rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#fffbe9] to-[#fef4cb] pb-3`}>

                    <div className="flex flex-row justify-between ml-3">
                        <div>
                            <h1 className="text-black text-2xl font-bold">0</h1>
                            <p className="text-gray-400 whitespace-nowrap">Total this week</p>
                            <h3 className="text-black font-medium mt-3">Weekly Trend</h3>
                        </div>
                    </div> <div>


                </div>

                </Card>
                <div className="flex-1 flex flex-col rounded-md border-1 h-90">
                    <div className="flex flex-row justify-between items-center bg-gradient-to-r from-purple-200 to-purple-300 pt-3 pb-1 rounded-md ">
                        <h2 className="text-black mt-3 font-semibold pr-3 ml-3">Over Speeding Events</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-green-900">
                            <path fillRule="evenodd" d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-row justify-between ml-3">
                        <div>
                            <h1 className="text-black text-2xl font-bold">0</h1>
                            <p className="text-gray-400 whitespace-nowrap">Total this week</p>
                        </div>

                    </div> <div>
                    <div className="flex flex-row justify-center gap-2 ml-3 mr-3 mt-10">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div
                                className="w-40 h-20 border-t-[14px] border-l-[14px] border-r-[14px] border-pink-500 rounded-t-full flex flex-col items-center justify-center">
                                <h2 className="text-xl font-bold text-orange-400">0g</h2>
                                <p className="text-gray-400">max force</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-1 bg-purple-300 rounded-md">
                            <p className="text-center text-gray-800">Max</p>
                            <h3 className="text-center text-purple-600 font-medium">0 Mph</h3>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                    </div>
                    <div className="mt-2 ml-3">
                        <h2 className="text-black font-semibold ">Latest Event</h2>
                        <div className="border-1 border-red-400 bg-red-100 mt-3 rounded-md p-2 mr-3">
                            <p className="text-center text-gray-400 font-normal">No Latest Event</p>
                        </div>
                    </div>

                </div>

                </div>
                <div className="flex-1"></div>
            </div>
        </div>

    )
}