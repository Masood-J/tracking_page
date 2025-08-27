
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
import ProgressBarContainer from "@/components/ui/ProgressBarContainer";

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
                            <div className={`bg-[#e0e7ff] rounded-xl p-1 pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-between items-center mt-3`}>
                            <p className={`font-medium`}>4-5h</p>
                            <div className={`bg-[#e0e7ff] rounded-xl p-1 pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-between items-center mt-3`}>
                            <p className={`font-medium`}>&gt;5h</p>
                            <div className={`bg-[#e0e7ff] rounded-xl p-1 pl-60 pr-2`}>
                                <p className={`text-black text-end`}>0</p>
                            </div>
                        </div>
                </div>

                    <div className={`flex flex-row gap-2 items-center mt-5 bg-[#eef2ff] border-[#e2e8f0] border-2 rounded-xl p-2`}>
                        <Clock className={`w-3 h-4 shrink-0 text-[#8c8df5]`}></Clock>
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
        </div>
    )
}