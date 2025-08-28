
import Card from "@/components/ui/Card";
import WeekEventsV3 from "@/components/ui/WeekEventsV3";
import {Satellite} from "lucide-react";
import {ShieldAlert} from "lucide-react";
import CircularBar from "@/components/ui/CircularBar";
import EmptyGraph from "@/components/ui/EmptyGraph";
import { Line } from 'rc-progress';
import ProgressLine from "@/components/ui/ProgressLine";
import {Timer} from "lucide-react";
import { TiWarningOutline } from "react-icons/ti";
import { PiBatteryEmpty } from "react-icons/pi";
import DotProgress from "@/components/ui/DotProgress";
import {LuTruck} from "react-icons/lu";
import {Clock} from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import {Bell} from "lucide-react";
import VStats2 from "@/components/ui/VStats2";
import ProgressBarContainer from "@/components/ui/ProgressBarContainer";
import {Users} from "lucide-react";
import {TrendingUp} from "lucide-react";
import { IoMdArrowUp } from "react-icons/io";
import DonutChart from "@/components/ui/DonutChart";
import {Search} from "lucide-react";
import DonutChart2 from "@/components/ui/DonutChart2";
import Chart from "@/components/ui/Chart";
import ChartV2 from "@/components/ui/ChartV2";
import { BsActivity } from "react-icons/bs";
import VehicleAnalytics from "@/components/ui/VehicleAnalytics";

export default function AnalyticsTwo(){


    return(

        <div>
            <div className={`flex flex-row gap-3 min-h-[430px] mt-10`}>
                <Card title={`Driving Without Gps Lock`} icon={<Satellite className={`h-4 w-4`} ></Satellite>} >
                    <WeekEventsV3 status={true} unit={`0`} totalT={`Total this week`} EventValue={`00:00 min`} EventType={`Total duration`} ValueColor={`text-black`}></WeekEventsV3>
                </Card>
                <Card title={`Aggressive Driving Score`} icon={<ShieldAlert className={`w-4 h-4 text-[#eab308]`}></ShieldAlert>} >
                    <CircularBar></CircularBar>
                    <WeekEventsV3 trend={`Weekly Trend`}></WeekEventsV3>
<EmptyGraph></EmptyGraph>
                    <div className={`mt-6`}>
<ProgressLine percent={65} Color={`#f97316`} TextColor={`text-[#f97316]`} name={`Harsh Acceleration`}></ProgressLine>
                    <ProgressLine percent={72} Color={`#eab308`} TextColor={`text-[#eab308]`} name={`Harsh Braking`}></ProgressLine>
                    <ProgressLine percent={85} Color={`#10b981`} TextColor={`text-[#10b981]`} name={`Speeding`}></ProgressLine>
                    </div>
                </Card>
                <Card title={`Long Continous Driving`} icon={<Timer className={`w-4 h-4 text-[#8c8df5]`}></Timer>}>
                    <WeekEventsV3 unit={`0`} totalT={`Total this week`} status={true} StatusB={`bg-[#e0e7ff]`} EventValue={`0 today`} ValueColor={`text-[#6b4eb0]`} icon={<TiWarningOutline color={`#6b4eb0`}></TiWarningOutline>}></WeekEventsV3>
                    <div>
                    <h2 className={`text-black font-semibold mt-3`}>Duration Breakdown</h2>
                        <div className={`flex flex-row justify-between items-center mt-3`}>
                            <p className={`font-medium`}>3-4h</p>
                            <div className={`bg-[#e0e7ff] rounded-xl pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-between items-center mt-3`}>
                            <p className={`font-medium`}>4-5h</p>
                            <div className={`bg-[#e0e7ff] rounded-xl pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-between items-center mt-3`}>
                            <p className={`font-medium`}>&gt;5h</p>
                            <div className={`bg-[#e0e7ff] rounded-xl  pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                </div>

                    <div className={`flex flex-row gap-2 items-center mt-5 bg-[#eef2ff] border-[#e2e8f0] border-2 rounded-xl p-2`}>
                        <Clock className={`w-3 h-4 shrink-0 text-[#797cf1]`}></Clock>
                        <h2 className={`font-semibold text-sm`}>Recommended break:</h2>
                        <p>15 minutes every 2 hours</p>
                    </div>
                    <div className={`mt-3`}>
                        <h2>Latest Event</h2>
<EventCard></EventCard>
                    </div>
                </Card>
                <Card title={`Driving With Low Battery`} icon={<PiBatteryEmpty color={`#f77288`}></PiBatteryEmpty>}>
                    <WeekEventsV3 unit={`0`} totalT={`Total this week`} status={true} StatusB={`bg-[#ffe4e6]`} EventValue={`0 today`} icon={<TiWarningOutline color={`#c6677f`}></TiWarningOutline>}></WeekEventsV3>
                    <ProgressBarContainer></ProgressBarContainer>
                </Card>
            </div>
            <div className={`flex flex-row gap-3 min-h-[370px] mt-10`}>
                <Card title={`Recent Alerts`} desc={`Latest alerts from your devices`} icon={<Bell className={`w-4 h-4 text-[#939eae]`}></Bell>}>
<VStats2 name={`Truck #103`} status={`Low fuel level detected`} active={true} stat={`warning`} time={`10 minutes ago`} StatColor={`text-white`} ></VStats2>
                    <VStats2 name={`Sensor #A45`} status={`Connection lost`} active={false} stat={`critical`} time={`25 minutes ago`} StatColor={`text-white`}></VStats2>
                    <VStats2 name={`Gateway #G12`} status={`Battery level below 20%`} active={true} stat={`warning`} time={`1 hour ago`} StatColor={`text-white`} ></VStats2>
                    <VStats2 name={`Truck #118`} status={`Maintainance reqiured`} background={`bg-[#f1f5f9]`} stat={`info`} time={`2 hour ago`} StatColor={`text-black`}></VStats2>
                </Card>
                <Card title={`Driver Performance`} desc={`Top 5 drivers by safety score`} icon={<Users className={`w-4 h-4 text-[#8c99a9]`}></Users>}>
<div className={`flex flex-col justify-center items-center h-[300px]`}>
    <p className={`text-[#a59dae] font-semibold`}>No driver performance data availaible</p>
</div>
                </Card>
                <Card title={`Top Drivers`} desc={`Highest risk drivers`} icon={<Users className={`w-4 h-4 text-[#8c99a9]`}></Users>}>
<div className={`flex flex-col gap-17`}>
    <div className={`text-black flex flex-row justify-between text-sm font-semibold mt-3`}>
        <h2>Top 5 Aggressive Drivers</h2>
        <h2>Top 5 Speeding Violations</h2>
    </div>
    <div className={`text-black flex flex-row justify-between text-sm text-gray-400 font-semibold`}>
        <p>No aggressive drivers data</p>
        <p>No speeding violations data</p>
    </div>
</div>
                </Card>
                <Card title={`Driver Efficiency Report`} desc={`Performance metrics`} icon={<TrendingUp className={`h-4 w-4 text-[#778599]`}></TrendingUp>}>
                    <div className={`flex flex-row justify-between mt-15`}>
                        <div>
                            <p className={`text-gray-400 font-semibold`}>This Period</p>
                            <h2 className={`font-bold text-3xl`}>0</h2>
                        </div>
                        <div className={`mr-8`}>
                            <p className={`text-gray-400 font-semibold`}>Previous Period</p>
                            <h2 className={`font-bold text-3xl`}>0</h2>
                        </div>
                    </div>
                    <div className={`flex flex-row gap-2 text-green-600 font-medium items-center mt-6 w-90`}>
                        <IoMdArrowUp className={`shrink-0`}></IoMdArrowUp>
                        <p className={``}>Driving behavior is improved by 0% compared to last period</p>
                    </div>
            </Card>
            </div>
            <div className={`flex flex-row gap-3 min-h-[400px] mt-10`}>
                <Card title={`Motion State`} desc={`Vehicle movement status`} icon={<div className={`bg-[#f0fdf4] pt-3 pl-1 pr-1 rounded-xl`}>
                    <h3 className={`text-green-600 text-sm font-semibold`}>ONLINE DATA</h3>
                </div>}>
                <DonutChart></DonutChart></Card>
                <Card title={`Driver Performance Table`} desc={`Detailed driver metrics`} icon={<Users className={`w-4 h-4 text-[#8894a6]`}></Users>}>
                    <WeekEventsV3>
                        <div className={`relative`}>
                            <span><Search className={`absolute w-4 h-4 top-2 left-2 text-[#7f8c9f]`}></Search></span>
                            <input type="text" placeholder={`Search...`} className={`border-2 border-[#e2e8f0] rounded-md h-8 p-4 pl-8`}/>
                        </div>
                    </WeekEventsV3>
                    <div className={`flex flex-col justify-center items-center w-full h-60 gap-3`}>
                        <Users className={`h-15 w-15 text-[#64748b]`}></Users>
                        <h2 className={`text-[#7789a0] font-bold text-xl`}>No driver data availaible</h2>
                        <p className={`text-[#7789a0]`}>No driver performance data has been recorded yet.</p>
                    </div>
                </Card>
            </div>
            <div className={`flex flex-row gap-3 min-h-[350px] mt-10`}>
                <Card title={`Connection State`} desc={`Device connectivity status`} icon={<div className={`bg-[#f0fdf4] pt-3 pl-1 pr-1 rounded-xl`}>
                    <h3 className={`text-green-600 text-sm font-semibold`}>ONLINE DATA</h3>
                </div>}>
<DonutChart2></DonutChart2>
                </Card>
                <Card title={`Mileage Chart`} desc={`Daily mileage by IMEI`} icon={<div className={`bg-[#f0fdf4] pt-3 pl-1 pr-1 rounded-xl`}>
                    <h3 className={`text-green-600 text-sm font-semibold`}>ONLINE DATA</h3>
                </div>}>
<Chart data={[
    { date: '2025-08-15', mileage: '0' },
    { date: '2025-08-16', mileage: '250' },
    { date: '2025-08-17', mileage: '500' },
    { date: '2025-08-18', mileage: '750' },
    { date: '2025-08-19', mileage: '1000' },
    { date: '2025-08-20', mileage: null }
]} dataType={`No mileage data availaible for IMEI devices`}></Chart>

                </Card>

            </div>
            <div className={`flex flex-row gap-3 min-h-[350px] mt-10`}>
                <Card title={`Fuel Consumption Chart`} desc={`Daily fuel consumption`}>
<Chart data={[
    { date: '2025-08-15', mileage: '1' },
    { date: '2025-08-16', mileage: '2' },
    { date: '2025-08-17', mileage: '3' },
    { date: '2025-08-18', mileage: '4' },
    { date: '2025-08-19', mileage: null },
    { date: '2025-08-20', mileage: null },
    { date: '2025-08-21', mileage: null }
]} dataType={`No fuel consumption data availaible`}>

</Chart>
                </Card>
                <Card title={`Fuel Consumption By Vehicle`} desc={`Vehicles with highest fuel usage`}>
<ChartV2 data={[
    {value:0},{value:40},{value:80},{value:120},{value:160}]}></ChartV2>
            </Card>
            </div>
            <div className={`flex flex-row gap-3 min-h-[350px] mt-10`}>
                <Card title={`Top Units By Mileage`} desc={`Vehicles with highes mileage`}>
                    <ChartV2 data={[
                        {value:6500},{value:6900},{value:7300},{value:8000}]}></ChartV2>
                </Card>
                <Card>

                </Card>
            </div>
            <div className={`flex flex-row gap-3 min-h-[350px] mt-10`}>
                <Card mt={`mb-10`} title={`CAN Bus`} icon={<BsActivity color={`#4d8df7`}></BsActivity>}>
<VehicleAnalytics></VehicleAnalytics>
                </Card>
            </div>
        </div>
    )
}