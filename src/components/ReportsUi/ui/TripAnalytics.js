import { useState } from "react";
import { TriangleAlert } from "lucide-react";
export default function TripAnalytics({ trips }) {
  const [AnalyticSection, UpdateSection] = useState("srN");
  const TripSection = [
    "SR No.",
    "Asset Name",
    "Start Time",
    "End Time",
    "Start Location",
    "End Location",
    "Trip Duration",
    "Engine ON time",
    "In Motion Duration",
    "Idling Duration",
    "Stops Duration",
    "Trip Mileage",
  ];
  const dummyData = [
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
    <div className={`text-black mx-10 mt-4`}>
      <div
        className={`flex flex-row gap-3 p-2 border-2 border-[#e2e8f0] rounded-md min-h-55`}
      >
        <table className={`h-full`}>
          <thead className={`border-b-2 border-[#e2e8f0] `}>
            <tr>
              {TripSection.map((value, index) => {
                return (
                  <th key={index} className={`font-medium px-1`}>
                    {value}
                  </th>
                );
              })}
            </tr>
          </thead>
          {trips ? (
            <tbody>
              {trips.map((value, index) => {
                return (
                  <tr
                    key={index}
                    className={`text-gray-700 border-y-2 border-[#e2e8f0]`}
                  >
                    <td className={`text-center`}>{value.sr}</td>
                    <td className={`text-center`}>{value.asset}</td>
                    <td className={`text-center`}>{value.startTime}</td>
                    <td className={`text-center`}>{value.endTime}</td>
                    <td className={`text-center`}>{value.startLoc}</td>
                    <td className={`text-center`}>{value.endLoc}</td>
                    <td className={`text-center`}>{value.tripDuration}</td>
                    <td className={`text-center`}>{value.engineOn}</td>
                    <td className={`text-center`}>{value.inMotion}</td>
                    <td className={`text-center`}>{value.idling}</td>
                    <td className={`text-center`}>{value.stops}</td>
                    <td className={`text-center`}>{value.mileage}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={TripSection.length}>
                  <div className="flex flex-col justify-center items-center gap-2 text-gray-400 py-10 font-medium">
                    <TriangleAlert className="w-10 h-10" />
                    <h3>No data found</h3>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
