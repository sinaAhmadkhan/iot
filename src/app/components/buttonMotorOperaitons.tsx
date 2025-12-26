"use client";
import { Button } from "antd";
import { useContext } from "react";
import { statusMotorContext } from "../context/stautsMotorContext";
import { Zap } from "lucide-react";

const ButtonMotorOperations = () => {
  const { PowerMotor, handelOffMotor, handelOnMotor } =
    useContext(statusMotorContext);
  return (
    <div className="border border-1 w-[266px] mx-auto border-white rounded-md py-2">
      <div
        style={{ direction: "rtl" }}
        className=" flex gap-2 pb-1 items-center text-white"
      >
        <span style={{ fontWeight: "bold" }} className="text-sm mr-2 text-bold">
          کنترل موتور
        </span>
        <Zap size={15} />
      </div>
      <div className="buttom-operations justify-center flex gap-2 ">
        <Button
          onClick={() => {
            handelOnMotor();
          }}
          className={`${PowerMotor ? "" : "bg-[#3d4045]"} `}
          size="small"
          variant={"solid"}
          color={"green"}
        >
          روشن
        </Button>
        <Button
          size="small"
          className={`${PowerMotor ? "bg-[#3d4045]" : ""} `}
          variant={"solid"}
          color={"danger"}
          onClick={() => {
            handelOffMotor();
          }}
        >
          خاموش
        </Button>
        <Button
          className={`bg-[#3d4045]`}
          size="small"
          variant="solid"
          color="primary"
        >
          اتوماتیک
        </Button>
      </div>
    </div>
  );
};

export default ButtonMotorOperations;
