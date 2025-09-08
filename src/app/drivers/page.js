"use client";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Line } from "rc-progress";
import ProgressLine from "@/components/DriverUi/ProgressLine";
import ProfileCard from "@/components/DriverUi/ProfileCard";
import { User } from "lucide-react";
import { MapPin } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Award } from "lucide-react";
import { FileText } from "lucide-react";
import { useState } from "react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import DriverForm from "@/components/DriverUi/section/DriverForm";
export default function Drivers() {
  const [progress, updateProgress] = useState(20);
  const [step, setStep] = useState(1);
  return (
    <div className={`min-h-screen w-full bg-white flex flex-col pb-10`}>
      <div className={`flex flex-row gap-6 ml-5 mt-6 items-center`}>
        <button className="p-2 border-2 rounded-md text-gray-400 border-[#e2e8f0] ">
          <MdKeyboardArrowLeft color={`black`}></MdKeyboardArrowLeft>
        </button>
        <div className={`flex flex-col gap-2`}>
          <h1 className={`text-black text-3xl font-bold`}>
            Register New Driver
          </h1>
          <p className={`text-gray-600`}>
            Complete all steps to register a new driver in the system
          </p>
        </div>
      </div>
      <div className={`flex flex-col h-full gap-5 ml-5 mr-5 mt-3`}>
        <div>
          <div className={`border-2 border-[#e2e8f0] rounded-2xl min-h-50`}>
            <div className={`p-4`}>
              <ProgressLine
                name={step}
                percent={progress}
                Color={`#2563eb`}
                stat={`% Complete`}
              ></ProgressLine>
              <div className={`flex flex-col justify-between mt-3 md:flex-row`}>
                <ProfileCard
                  title={`Personal Information`}
                  desc={`Basic personal details and identification`}
                  stat={step == 1}
                  icon={<User className={``}></User>}
                ></ProfileCard>
                <ProfileCard
                  title={`Address & Contact`}
                  desc={`Location and communication information`}
                  stat={step == 2}
                  icon={<MapPin></MapPin>}
                ></ProfileCard>
                <ProfileCard
                  title={`Employment Details`}
                  desc={`Work-related information and position`}
                  stat={step == 3}
                  icon={<Briefcase></Briefcase>}
                ></ProfileCard>
                <ProfileCard
                  title={`License & Medical`}
                  desc={`Driving credentials and health records`}
                  stat={step == 4}
                  icon={<FileText></FileText>}
                ></ProfileCard>
                <ProfileCard
                  title={`Training & Certifications`}
                  desc={`Professional development and qualifications`}
                  stat={step == 5}
                  icon={<Award></Award>}
                ></ProfileCard>
              </div>
            </div>
          </div>
        </div>

        <DriverForm
          UpdateProgress={updateProgress}
          UpdateStep={setStep}
        ></DriverForm>
      </div>{" "}
    </div>
  );
}
