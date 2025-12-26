"use client";

import { useContext } from "react";
import { statusMotorContext } from "../context/stautsMotorContext";
import { statusPumpContext } from "../context/stautsPumpContext";
import FanIcon from "./Fan";

const StatusPumpAndMotor = () => {
  const { EngineSpeed, PowerMotor } = useContext(statusMotorContext);
  const { PumpPower } = useContext(statusPumpContext);
  return (
    <div className="text-center mx-auto  h-[300px] flex justify-center items-center">
      <div
        style={{ backgroundColor: "#18466a" }}
        className="  rounded-md p-1 w-[266px] h-[268px]"
      >
        <FanIcon />
        <p className="text-white  text-2xl text-bold mt-1">
          سرعت موتور:{EngineSpeed === "slow" ? " کم " : " زیاد "}
        </p>
        <p className="text-white text-sm text-bold mt-1">
          وضعیت پمپ موتور:{PumpPower ? " روشن " : " خاموش "}
        </p>
      </div>
    </div>
  );
};

export default StatusPumpAndMotor;
