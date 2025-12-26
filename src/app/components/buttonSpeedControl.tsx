"use client";
import { Button } from "antd";
import { Gauge } from "lucide-react";
import { useContext } from "react";
import { statusMotorContext } from "../context/stautsMotorContext";

const ButtonSpeedControl = () => {
  const { EngineSpeed, handelHeightSpeed } = useContext(statusMotorContext);
  return (
    <div className="border border-1 w-[266px] mx-auto border-white rounded-md py-2">
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
        <Button
          className={`px-6 ${
            EngineSpeed === "hight" ? "" : "bg-[#3d4045]"
          } py1`}
          size="large"
          onClick={() => handelHeightSpeed("hight")}
          variant={"solid"}
          color="cyan"
        >
          زیاد
        </Button>
        <Button
          className={`px-6 ${EngineSpeed === "slow" ? "" : "bg-[#3d4045]"} py1`}
          size="large"
          variant={"solid"}
          color="cyan"
          onClick={() => handelHeightSpeed("slow")}
        >
          کم
        </Button>
      </div>
    </div>
  );
};

export default ButtonSpeedControl;
