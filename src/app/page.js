"use client"
import Navigation from "@/components/section/Navigation";
import Main from "./Main";
import Analytics from "@/components/section/Analytics";
import AnalyticsTwo from "@/components/section/AnalyticsTwo";

export default function Home() {
  return (
    <div className="flex-1 ">
        <Main>
            <Analytics></Analytics>
            <AnalyticsTwo></AnalyticsTwo>
        </Main>

    </div>
  );
}
