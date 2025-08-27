import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function DotProgressV2() {
    let value=50;
    return (
        <div className="w-full">
            <Slider
                value={value}
                min={0}
                max={100}
                styles={{
                    rail: {
                        background: "linear-gradient(90deg, #919bf7, #6e6eee)",
                        height: 20,
                    },
                    handle: {
                        borderColor: "#902445",
                        height: 10,
                        width: 10,
                        backgroundColor: "",
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
