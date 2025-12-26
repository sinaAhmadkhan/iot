import ButtonPumpOperations from "./components/ButtonPumpOperations";
import ButtonMotorOperations from "./components/buttonMotorOperaitons";
import ButtonSpeedControl from "./components/buttonSpeedControl";
import StatusPumpAndMotor from "./components/statusPumpAndMotor";
import { Settings, CircleDot } from "lucide-react";
export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#25262b" }}
      className="container mx-auto  w-full h-full "
    >
      <div className="w-full h-full md:w-[400px] p-1 md:h-auto border border-1 border-white-200 rounded-md mx-auto ">
        <div className="flex  mt-2 justify-between px-10 mt-10">
          <Settings
            size={30} // Sets width and height to 24px
            className="text-white"
          />
          <p className="text-white text-2xl ">کنترل سیستم </p>
        </div>
        <div style={{ direction: "rtl" }} className="px-10 flex mt-2">
          <span className="text-3xl mx-1 " style={{ color: "green" }}>
            <CircleDot className="text-emerald-500 animate-pulse" size={20} />
          </span>
          <p className="ml-auto text-md text-white">
            اتصال به دستگاه برقرار است
          </p>
        </div>
        <div className="status">
          <StatusPumpAndMotor />
        </div>
        <div className="buttom-operations flex flex-col gap-2 ">
          <ButtonMotorOperations />
          <ButtonPumpOperations />
          <ButtonSpeedControl />
        </div>
      </div>
    </div>
  );
}
