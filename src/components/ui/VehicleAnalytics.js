
import {Gauge} from "lucide-react";
import {Navigation} from "lucide-react";
import {Droplet} from "lucide-react";
import WeekEventsV3 from "@/components/ui/WeekEventsV3";
import {Signal} from "lucide-react";
import FuelStat from "@/components/ui/FuelStat";
export default function VehicleAnalytics(){

    return(
<div>
            <div className={`flex flex-row items-center gap-2`}>
                <div className={`flex flex-col bg-[#eff6ff] justify-center pl-3 w-full h-16 rounded-xl`}>
                    <div className={`flex flex-row items-center gap-2`}>
                        <Gauge className={`h-4 w-4 text-[#5880e2]`}></Gauge>
                        <p className={`text-[#3d56bb]`}>Avg Speed</p>
                    </div>
                    <h2 className={`text-[#2d47b3] font-bold`}>6.0 mph</h2>
                </div>
                <div className={`flex flex-col bg-[#eff6ff] justify-center pl-3 w-full h-16 rounded-xl`}>
                    <div className={`flex flex-row items-center gap-2`}>
                        <Navigation className={`h-4 w-4 text-[#5880e2]`}></Navigation>
                        <p className={`text-[#3d56bb]`}>Avg Distance</p>
                    </div>
                    <h2 className={`text-[#2d47b3] font-bold`}>638352145.0 km</h2>
                </div>
                <div className={`flex flex-col bg-[#eff6ff] justify-center pl-3 w-full h-16 rounded-xl`}>
                    <div className={`flex flex-row items-center gap-2`}>
                        <Droplet className={`h-4 w-4 text-[#5880e2]`}></Droplet>
                        <p className={`text-[#3d56bb]`}>Avg Fuel</p>
                    </div>
                    <h2 className={`text-[#2d47b3] font-bold`}>77916.0 L</h2>
                </div>
            </div>
<div className={`border-2 border-[#e2e8f0] rounded-2xl mt-6 pb-4 pr-3`}>
<WeekEventsV3 status={true} StatusB={`bg-[#dbeafe]`} ValueColor={`text-[#3d56bb]`} EventValue={`11 satellites`} icon={<Signal className={`h-4 w-4 text-[#3d56bb]`}></Signal>}></WeekEventsV3>
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full justify-between pl-3 pr-10 mt-3`}>
<FuelStat f1={`Ignition:`} f2={`Fuel Level:`} f2Val={` 72%`} f3={`Engine Temperature:`} f3Val={` 590°C`}></FuelStat>
        <FuelStat f1={`Battery:`} f1Val={` 0%`} f2={`Fuel Consumed:`} f2Val={`77916 L`} f3={`Accelerator Pedal Position:`} f3Val={`0%`}></FuelStat>
        <FuelStat f1={`Movement:`} f1Val={`-`} f2={`Speed:`} f2Val={`6 km/h`} f3={`Total Mileage(Counted):`} f3Val={`29297965 km`}></FuelStat>
        <FuelStat f1={`Engine RPM:`} f1Val={`495 rpm`} f2={`Total Mileage:`} f2Val={`638352145 km`} f3={`Engine Temperature:`} f3Val={` 590°C`}></FuelStat>
        <FuelStat f1={`Engine Load:`} f1Val={`0%`} f2={`Main Power:`} f2Val={`0 V`}></FuelStat>
        <FuelStat f1={`Total Odometer:`} f1Val={`75,209,619 m`} f2={`Crash Detection:`} f2Val={`Normal`}></FuelStat>
    </div>
</div>



</div>




    )
}