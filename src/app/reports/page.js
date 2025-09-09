"use client";
import { useState } from "react";
import SearchBar from "@/components/ReportsUi/ui/SearchBar";
import MultiSelectDropdown from "@/components/ReportsUi/ui/MultiSelectDropdown";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
import { Download } from "lucide-react";
import { Car } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { eachDayOfInterval, format } from "date-fns";
import { Calendar } from "lucide-react";
import TripAnalytics from "@/components/ReportsUi/ui/TripAnalytics";
export default function Reports() {
  const [selectedPeople, UpdatePeople] = useState([
    { value: "1", label: "Noelle Simpson" },
    { value: "2", label: "Evan Allen" },
  ]);
  const [DateRanges, setDateRanges] = useState({});
  const [button, setButton] = useState("one");
  const [expanded, setExpanded] = useState({});
  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [dateExpanded, setDateExpanded] = useState({});
  const toggleDateExpanded = (id) => {
    setDateExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const dummyTrips = {
    1: {
      // user value "1" = Noelle Simpson
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Toyota Corolla",
          startTime: "08:00",
          endTime: "09:30",
          startLoc: "Raiwind",
          endLoc: "Naz Town",
          tripDuration: "1h 30m",
          engineOn: "1h 40m",
          inMotion: "1h 20m",
          idling: "10m",
          stops: "5m",
          mileage: "20 km",
        },
        {
          sr: 2,
          asset: "Honda Civic",
          startTime: "10:00",
          endTime: "11:15",
          startLoc: "Gulberg",
          endLoc: "DHA",
          tripDuration: "1h 15m",
          engineOn: "1h 25m",
          inMotion: "1h 10m",
          idling: "15m",
          stops: "2",
          mileage: "18 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Suzuki Swift",
          startTime: "07:30",
          endTime: "08:45",
          startLoc: "Township",
          endLoc: "Model Town",
          tripDuration: "1h 15m",
          engineOn: "1h 25m",
          inMotion: "1h 10m",
          idling: "10m",
          stops: "1",
          mileage: "22 km",
        },
      ],
    },
    2: {
      // user value "2" = Evan Allen
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Toyota Corolla",
          startTime: "11:00",
          endTime: "12:30",
          startLoc: "Gulberg",
          endLoc: "Model Town",
          tripDuration: "1h 30m",
          engineOn: "1h 35m",
          inMotion: "1h 20m",
          idling: "15m",
          stops: "2",
          mileage: "25 km",
        },
      ],
    },
    3: {
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
    },
    4: {
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
    },
    5: {
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
    },
    6: {
      "Aug 04, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
      "Aug 05, 2025": [
        {
          sr: 1,
          asset: "Honda City",
          startTime: "09:00",
          endTime: "10:00",
          startLoc: "Liberty",
          endLoc: "Shalimar",
          tripDuration: "1h",
          engineOn: "1h 10m",
          inMotion: "50m",
          idling: "10m",
          stops: "1",
          mileage: "15 km",
        },
      ],
    },
  };
  let days = [];
  if (DateRanges.startDate && DateRanges.endDate) {
    days = eachDayOfInterval({
      start: DateRanges.startDate,
      end: DateRanges.endDate,
    });
  }
  const trips = [
    {
      sr: 1,
      asset: "Toyota",
      startTime: "08:00",
      endTime: "09:30",
      startLoc: "Raiwind",
      endLoc: "Naz Town",
      tripDuration: "1h 30m",
      engineOn: "1h 40m",
      inMotion: "1h 20m",
      idling: "10m",
      stops: "5m",
      mileage: "20 km",
    },
  ];
  return (
    <div className={`bg-white flex-1`}>
      {/*Heading*/}
      <div className={`flex flex-col gap-0 ml-5 mt-3 mb-4`}>
        <h1 className={`text-black text-3xl font-bold`}>Trip Detail Report</h1>
        <p className={`text-gray-400`}>
          Comprehensive trip analysis with detailed insights on routes,
          performance and driver behavior
        </p>
      </div>
      <hr className={`border-1 border-[#e2e8f0]`} />
      {/*TripList/Analytics/Summary*/}
      <div>
        <div
          className={`flex flex-row gap-1 justify-center rounded-md mt-4 ml-4 bg-[#f1f4f9] text-gray-400 font-semibold max-w-68 p-1 `}
        >
          <button
            className={`p-1 px-2 ${button === "one" ? "bg-white rounded-md p-1 text-black font-semibold" : ""}`}
            onClick={() => setButton("one")}
          >
            Trip List
          </button>
          <button
            className={`p-1 px-2 ${button === "two" ? "bg-white rounded-md p-1 text-black font-semibold" : ""}`}
            onClick={() => setButton("two")}
          >
            Analytics
          </button>
          <button
            className={`p-1 px-2 ${button === "three" ? "bg-white rounded-md p-1 text-black font-semibold" : ""}`}
            onClick={() => setButton("three")}
          >
            Summary
          </button>
        </div>
      </div>
      {/*Filters & Search*/}
      <div
        className={`min-h-55 border-2 border-[#e2e8f0] m-4 rounded-xl text-black`}
      >
        <div className={`m-4`}>
          <h2 className={`text-2xl font-bold`}>Filters & Search</h2>
          <div className={`flex flex-row gap-2 justify-between mt-3`}>
            <div className={`flex flex-row gap-3 `}>
              <div className={`flex flex-col gap-2`}>
                <h3 className={`font-semibold`}>Search</h3>
                <SearchBar></SearchBar>
              </div>
              <div className={`flex flex-col gap-2`}>
                <h3 className={`font-semibold`}>Asset</h3>
                <MultiSelectDropdown
                  value={selectedPeople}
                  onChange={UpdatePeople}
                ></MultiSelectDropdown>
              </div>
            </div>
            <div className={`flex flex-col gap-2`}>
              <h3 className={`font-semibold`}>Date Range</h3>
              <DateSelect onChange={setDateRanges}></DateSelect>
            </div>
          </div>
        </div>
      </div>
      {/*Trip Details*/}

      <div className={`m-4 rounded-xl border-2 border-[#e2e8f0] p-3`}>
        <div className={`flex flex-row m-4 justify-between`}>
          <h2 className={`text-2xl text-black font-semibold`}>Trip Details</h2>
          <div
            className={`flex flex-row items-center gap-2 rounded-xl border-2 border-[#f1f5fa] p-2 px-4 text-black`}
          >
            <Download className={`h-4 w-4`}></Download>
            <h3>Export Excel</h3>
          </div>
        </div>
        <div className={`mt-3`}>
          {selectedPeople.map((item, index) => (
            <div
              key={index}
              className={`border-x-2 border-b-2 border-[#e2e8f0] rounded-xl mt-2`}
            >
              <div
                onClick={() => {
                  toggleExpanded(item.value);
                }}
                className={` flex flex-row items-center justify-between p-2 rounded-xl ${expanded[item.value] ? "bg-[#2663e8]" : "bg-gray-500 "}`}
              >
                <div className={`flex flex-row items-center gap-2`}>
                  <Car className={`w-4 h-4 text-white`}></Car>
                  <h3 className={`font-semibold`}>{item.label}</h3>
                </div>
                <div>
                  {expanded[item.value] ? (
                    <ChevronUp
                      className={`w-4 h-4 stroke-2 text-white`}
                    ></ChevronUp>
                  ) : (
                    <ChevronDown
                      className={`w-4 h-4 stroke-2 text-white`}
                    ></ChevronDown>
                  )}
                </div>
              </div>
              {expanded[item.value] &&
                days.map((day, i) => {
                  const dateKey = `${item.value}-${format(day, "MMM dd, yyyy")}`;
                  return (
                    //Trip Date Section

                    <div key={i}>
                      <div
                        className={`p-2 border rounded-xl mt-2 mx-8 mb-2 flex flex-row justify-between ${dateExpanded[dateKey] ? "bg-[#2663e8]" : "bg-gray-500"}`}
                        onClick={() => toggleDateExpanded(dateKey)}
                      >
                        <div
                          className={`flex flex-row items-center gap-2 font-medium`}
                        >
                          <Calendar className={`w-4 h-4`}></Calendar>
                          {format(day, "MMM dd, yyyy")}
                        </div>
                        {dateExpanded[dateKey] ? (
                          <ChevronUp
                            className={`w-4 h-4 text-white`}
                          ></ChevronUp>
                        ) : (
                          <ChevronDown className={`w-4 h-4 text-white`} />
                        )}
                      </div>
                      {dateExpanded[dateKey] && (
                        <TripAnalytics
                          trips={
                            dummyTrips[item.value]?.[
                              format(day, "MMM dd, yyyy")
                            ]
                          }
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
