import {Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import FleetCard from "@/components/ui/FleetCard";
import Card from "@/components/ui/Card";
import { LuTruck } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TiWarningOutline } from "react-icons/ti";
import VStats from "@/components/ui/VStats";
import { IoMdArrowUp } from "react-icons/io";
import WeeklyGraph from "@/components/ui/WeeklyGraph";
import WeekEvents from "@/components/ui/WeekEvents";
import CircleBar from "@/components/ui/CircleBar";
import { MdSpeed } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import GradientBar from "@/components/ui/GradientBar";
import CircleBarv2 from "@/components/ui/CircleBarv2";
import SpeedCalc from "@/components/ui/SpeedCalc";
import EventStatus from "@/components/ui/EventStatus";
import { FiPause } from "react-icons/fi";
import {TrendingUp} from "lucide-react";
import WGraphV2 from "@/components/ui/WGraphV2";
import { FaArrowTurnUp } from "react-icons/fa6";
import EmptyGraph from "@/components/ui/EmptyGraph";
import StraightLineGraph from "@/components/ui/StraightLineGraph";
import { LuHexagon } from "react-icons/lu";
import WeekEventsV2 from "@/components/ui/WeekEventsV2";
import { FcRefresh } from "react-icons/fc";
import WeekEventsV3 from "@/components/ui/WeekEventsV3";
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
            <Card CustomP={`p-0`} title={`Harsh Acceleration Events`} margin={`mt-6 ml-6`} gradient={`bg-gradient-to-r from-[#fff6eb] to-[#ffeed9] pb-3 rounded-t-2xl`} h={`h-[388px]`} icon={<IoMdArrowUp className={`mt-6 ml-6 mr-4`} color={`green`}></IoMdArrowUp>}>
                <WeekEvents status={true} perc={`100`} trends={`Weekly Trend`} totalT={`Total this week`} trend={`Weekly Trend`}  StatusB={`bg-[#dcfce7]`} icon={<IoMdArrowUp className={``} color={`green`}></IoMdArrowUp>}></WeekEvents>
                <WeeklyGraph Event_Status={true} GraphColor={`bg-[#f97316]`}></WeeklyGraph>
            </Card>
        </div>
            <div className="flex flex-row gap-3 max-h-90 mt-4">
                <Card CustomP={`p-0`}  title={`Harsh Braking Events`} margin={`mt-6 ml-6 rounded-t-2xl`} borderType={`rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#fef1f1] to-[#fee3e3] pb-3`} h={`h-[388px]`}>

                    <WeekEvents trends={`Weekly Trend`} totalT={`Total this week`} trend={`Weekly Trend`}></WeekEvents> <div>
                    <WeeklyGraph GraphColor={`bg-[#ef4444] h-1 rounded-xl`}></WeeklyGraph>

                </div>

                </Card>
<div className={`min-w-60`}>
                <Card CustomP={`p-0`}  title={`Harsh Cornering Events`} h={`h-[388px]`} margin={`mt-6 ml-6 rounded-t-2xl`} borderType={`rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#fffbe9] to-[#fef4cb] pb-3`} >

                    <div className="flex flex-row justify-between ml-3">
                        <WeekEvents totalT={`Total this week`}></WeekEvents>
                    </div>
<CircleBar styles={`border-[#f59e0b] h-35 w-35`}>
    <h2 className={`text-[#f6a313] font-bold text-2xl`}>0g</h2>
    <p>max force</p>
</CircleBar>


                    <div className="mt-2 ml-3">
                        <h2 className="text-black font-semibold ">Latest Event</h2>
                        <div className=" mt-3 rounded-md p-2 mr-3">
                            <p className="text-gray-400 font-normal">No Latest Event</p>
                        </div>
                    </div>

                </Card></div>
                <Card CustomP={`p-0`}  title={`Over Speeding Events`} margin={`mt-6 ml-6 rounded-t-2xl`} borderType={`rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#f9f2ff] to-[#f4e9ff] pb-3`} h={`h-[388px]`} icon={<SiSpeedtest className={`mt-6 ml-6 mr-4`} color={`purple`}></SiSpeedtest>}>
                    <WeekEvents desc={`0`} desc1={`Total this week`} totalT={`Total this week`}></WeekEvents>
                    <CircleBarv2></CircleBarv2>

                    <SpeedCalc></SpeedCalc>

                    <EventStatus MarginT={``}></EventStatus>
                </Card>
                <Card CustomP={`p-0`}  title={`Vehicle Idling`} margin={`mt-6 ml-6 rounded-t-2xl`} borderType={`rounded-t-2xl`} gradient={`bg-gradient-to-r from-[#ebf4ff] to-[#dceafe] pb-3`} h={`h-[388px]`} icon={<FiPause className={`mt-6 ml-6 mr-4`} color={`purple`}></FiPause>}>
                    <WeekEvents unit={`m`} trend={`Weekly Idle Time (minutes)`} totalT={`Total idle time this week`} status={true} perc={`0`} StatusB={`bg-[#fee2e2] text-red-900 font-semibold`} icon={<TrendingUp className={`w-3 h-3`}></TrendingUp>}></WeekEvents>
                    <WGraphV2></WGraphV2>
                </Card>

            </div>
            <div className={`flex flex-row gap-3 max-h-90 mt-10`}>
                <Card title={`Sharp Turns Events`} icon={<FaArrowTurnUp color={`#ecbc26`}></FaArrowTurnUp>}>
                    <WeekEvents trend={`Weekly Trend`} totalT={`Total this week`} info={``}></WeekEvents>
                    <div className={`flex justify-end`}>
                        <p className={`text-[#8f8c9f] font-semibold`}>7 days</p>
                    </div>
                    <EmptyGraph Case={true}></EmptyGraph>

                    <div className="mt-2 ml-3">
                        <h2 className="text-black font-semibold ">Latest Event</h2>
                        <div className=" mt-3 rounded-xl p-2 border-2 border-[#e2e8f0]">
                            <p className="text-gray-400 font-normal text-center">No Recent Event</p>
                        </div>
                    </div>
                </Card>
                <Card title={`Sudden Stop Events`}>
                    <WeekEvents trend={`Daily Events`} totalT={`Total this week`} info={``}></WeekEvents>
                    <div className={`flex flex-row justify-end items-center gap-2`}>

                            <p className={`text-[#8f8c9f] font-semibold`}>Avg: 0.0</p>
                            <div className={`w-5 h-1 bg-[#fca5a5]`}></div>

                    </div>
                    <StraightLineGraph></StraightLineGraph>
                </Card>
                <Card title={`Zigzag Driving Events`} icon={<LuHexagon color={`#f06eae`}></LuHexagon>}>
                    <WeekEventsV2 EventType={`Severity Breakdown`} status={true} totalT={`Total this week`}></WeekEventsV2>
                    <EmptyGraph></EmptyGraph>
                    <div className="mt-9 ml-3">
                        <h2 className="text-black font-semibold ">Latest Event</h2>
                        <div className=" mt-3 rounded-xl p-2 border-1 border-[#e2e8f0]">
                            <p className="text-gray-400 font-normal text-center">No Recent Event</p>
                        </div>
                    </div>
                </Card>
                <Card title={`Frequent Start/Stop Events`} icon={<FcRefresh color={`#10b9d6`}></FcRefresh>}>
                    <WeekEventsV3 EventType={`Avg stops/hour`} unit={`0`} EventValue={`0`} status={true} totalT={`Total this week`}></WeekEventsV3>
                    <EmptyGraph></EmptyGraph>
                    <div className="mt-9 ml-3">
                        <h2 className="text-black font-semibold ">Latest Event</h2>
                        <div className=" mt-3 rounded-xl p-2 border-1 border-[#e2e8f0]">
                            <p className="text-gray-400 font-normal text-center">No Recent Event</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}