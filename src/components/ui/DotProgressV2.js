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
                        height: 10,
                    },
                    handle: {
                        borderColor: "#ffffff",
                        height: 15,
                        width: 15,
                        backgroundColor: "#6366f1",
                        marginTop:-2,
                    },
                    track: {
                        backgroundColor: "transparent",
                    },
                }}
            />
        </div>
    );
}
