import ButtonPumpOperations from "./components/ButtonPumpOperations";
import ButtonMotorOperations from "./components/buttonMotorOperaitons";
import ButtonSpeedControl from "./components/buttonSpeedControl";
import StatusPumpAndMotor from "./components/statusPumpAndMotor";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#25262b" }}
      className="container mx-auto w-full h-screen "
    >
      <div className="w-full h-screen md:w-[300px] p-1 md:h-[530px] border border-1 border-white-200 rounded-md mx-auto ">
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
