"use client";
import { Button, Tooltip } from "antd";
import { Gauge } from "lucide-react";
import { useContext } from "react";
import { statusMotorContext } from "../context/stautsMotorContext";

const ButtonSpeedControl = () => {
  const { EngineSpeed, handelHeightSpeed, PowerMotor } =
    useContext(statusMotorContext);
  return (
    <div className="border border-1 w-[321px] mx-auto border-white rounded-md py-2">
      <div
        style={{ direction: "rtl" }}
        className=" flex gap-2 pb-1 items-center text-white"
      >
        <span style={{ fontWeight: "bold" }} className="text-sm mr-2 text-bold">
          کنترل سرعت
        </span>
        <Gauge size={15} />
      </div>
      <div className="buttom-operations justify-center flex gap-2 ">
        <Tooltip title={`${PowerMotor ? "" : "ابتدا موتور را روشن کنید"}`}>
          <Button
            className={`disabled:bg-[#3d4045] disabled:text-white disabled:border-[#3d4045]
             text-white px-6 ${
               EngineSpeed === "hight" ? "" : "bg-[#3d4045]"
             } py-1`}
            size="large"
            onClick={() => handelHeightSpeed("hight")}
            variant={"solid"}
            disabled={PowerMotor ? false : true}
            color="cyan"
          >
            زیاد
          </Button>
        </Tooltip>
        <Tooltip title={`${PowerMotor ? "" : "ابتدا موتور را روشن کنید"}`}>
          <Button
            className={`disabled:bg-[#3d4045] disabled:text-white disabled:border-[#3d4045]
             text-white px-6 ${
               EngineSpeed === "slow" ? "" : "bg-[#3d4045]"
             } py-1`}
            size="large"
            variant={"solid"}
            disabled={PowerMotor ? false : true}
            color="cyan"
            onClick={() => handelHeightSpeed("slow")}
          >
            کم
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ButtonSpeedControl;
