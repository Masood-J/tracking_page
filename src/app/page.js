"use client"
import Navigation from "@/components/section/Navigation";
import Main from "./Main";
import Analytics from "@/components/section/Analytics";

export default function Home() {
  return (
    <div className="flex flex-row">
        <Navigation></Navigation>
        <Main>
            <Analytics></Analytics>

        </Main>

    </div>
  );
}
