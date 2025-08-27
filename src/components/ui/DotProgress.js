import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function DotProgress() {
    let value=20;
    return (
        <div className="w-full">
            <Slider
                value={value}
                min={0}
                max={100}
                styles={{
                    rail: {
                        backgroundColor: "#f1f5f9",
                        height: 20,
                    },
                    handle: {
                        borderColor: "#902445",
                        height: 19,
                        width: 2,
                        backgroundColor: "",
                        borderRadius:0,
                        marginTop:1,
                    },
                    track: {
                        backgroundColor: "transparent",
                    },
                }}
            />
        </div>
    );
}
