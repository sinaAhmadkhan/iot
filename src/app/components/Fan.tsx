"use client";
import "../style/Fan.css";
import { Fan } from "lucide-react";
import { useContext } from "react";
import { statusMotorContext } from "../context/stautsMotorContext";

const FanIcon = () => {
  const { PowerMotor, EngineSpeed } = useContext(statusMotorContext);
  return (
    <div
      className={`my-[25px] border rounded-full mx-auto w-fit p-5 border-1 border-withe`}
    >
      <Fan
        style={{ color: "white" }}
        className={`mx-auto text-withe  ${
          PowerMotor && EngineSpeed === "hight" ? "fan-fast" : ""
        } ${PowerMotor && EngineSpeed === "slow" ? "fan-medium" : ""}
        `}
        size={100}
      />
    </div>
  );
};

export default FanIcon;
