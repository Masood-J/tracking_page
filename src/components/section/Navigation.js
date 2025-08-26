import {getImgProps} from "next/dist/shared/lib/get-img-props";
import {bars4} from '@heroicons/react/24/outline';
import {useState} from "react";
import ArrowButton from "@/components/ui/ArrowButton";
import { IoMdPower } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import NavLink from "@/components/ui/NavLink";
import { MdGridOn } from "react-icons/md";
import { SlCursor } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import {Navigation as NavIc} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { HiOutlineCube } from "react-icons/hi";
import { RiSpeedUpFill } from "react-icons/ri";
import {Package} from "lucide-react";
import {UserRound} from "lucide-react";
import { FiAlertCircle } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { LuCpu } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import {FileText} from "lucide-react";
import { LuUsers } from "react-icons/lu";
import {User} from "lucide-react";

export default function Navigation(){
    const[navStatus,updateStatus]=useState("true");
    function onClickHandle(){
        if(navStatus==true) {
            updateStatus(false);
        }
        else{
            updateStatus(true);
        }
    }
return (
    <div className="bg-white border-r-2 border-r-[#e2e8f0]">
<div className={`sticky top-0 overflow-y-auto h-screen`} style={{scrollbarWidth: "none",}}>
        <div className="flex flex-row bg-[#2056df] justify-between">
            {navStatus && (<img src="/logo.png" alt=""/>)}
        <ArrowButton onclickHandle={onClickHandle}></ArrowButton>
        </div>
        {navStatus && (
        <div className="transition-all duration-500 ease-in-out w-58">

        <div className="relative left-1/12 top-2 flex flex-col gap-y-3 gap-2 mt-3">
            <h3 className="text-[#878f9a] font-semibold text-sm">NAVIGATION</h3>
            <NavLink title={`Dashboard`} icon={<MdGridOn color={`black`}></MdGridOn>}></NavLink>
            <NavLink title={`Tracking Dashboard`} icon={<NavIc className={`w-4 h-4`}></NavIc>} >
                <div className={`flex flex-row justify-end w-full`}>
                    <ChevronDown className={``}></ChevronDown>
                </div>
            </NavLink>
            <NavLink title={`Devices`} icon={<HiOutlineCube></HiOutlineCube>}>
                <div className={`flex flex-row justify-end w-full`}>
                <ChevronDown className={``}></ChevronDown>
                </div>
            </NavLink>
           <NavLink title={`Sensors`} icon={<RiSpeedUpFill></RiSpeedUpFill>} >

           </NavLink>
            <NavLink title={`Assets`} icon={<Package className={`h-4 w-4`}></Package>}></NavLink>
            <NavLink title={`Drivers`} icon={<UserRound className={`h-4 w-4`}></UserRound>}></NavLink>
            <NavLink title={`Alerts`} icon={<FiAlertCircle></FiAlertCircle>}></NavLink>
            <NavLink title={`Configurations`} icon={<MdOutlineSettings></MdOutlineSettings>}></NavLink>
           <NavLink title={`SIM Cards`} icon={<LuCpu></LuCpu>}></NavLink>
            <NavLink title={`Reports`} icon={<FileText className={`h-4 w-4`}></FileText>}></NavLink>
            <NavLink title={`Technicians`} icon={<LuWrench></LuWrench>}></NavLink>
        </div>

        <div className="relative left-1/12 top-7 flex flex-col gap-y-3 gap-2">
            <h3 className="text-[#878f9a] font-semibold text-sm">MANAGEMENT</h3>
            <NavLink title={`Users`} icon={<LuUsers></LuUsers>}></NavLink>
            <NavLink title={`Profile`} icon={<User className={`h-4 w-4`}></User>}></NavLink>
            <NavLink title={`Api Configurations`} icon={<MdOutlineSettings></MdOutlineSettings>}></NavLink>
        </div>

        <div className="flex flex-col gap-y-3 mt-20">
            <button className="flex flex-row items-center justify-center p-2.5  w-58 rounded-2xl gap-3 self-center bg-gradient-to-r from-[#235fe7] to-[#1e51db] hover:bg-blue-700">
                <GoPlus color={`white`}></GoPlus>
<p className={`font-bold`}>Add Device</p>
            </button>
            <button className="flex flex-row items-center justify-center gap-3 p-3 hover:bg-gray-200">
                <IoMdPower color={`red`}></IoMdPower>
                <p className="text-[#dd4142] font-bold">Logout</p>
            </button>

        </div>
    </div>)
        }
    </div>
    </div>
    
)
}