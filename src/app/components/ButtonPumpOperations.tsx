"use client";
import { Button } from "antd";
import { useContext } from "react";
import { statusPumpContext } from "../context/stautsPumpContext";
import { Droplet } from "lucide-react";

const ButtonPumpOperations = () => {
  const { PumpPower, handelOnPump, handelOffPump } =
    useContext(statusPumpContext);
  return (
    <div className="border border-1 w-[266px] mx-auto border-white rounded-md py-2">
      <div
        style={{ direction: "rtl" }}
        className=" flex gap-2 pb-1 items-center text-white"
      >
        <span style={{ fontWeight: "bold" }} className="text-sm mr-2 text-bold">
          کنترل پمپ
        </span>
        <Droplet size={15} />
      </div>
      <div className="buttom-operations justify-center flex gap-2 ">
        <Button
          size="small"
          className={`${PumpPower ? "" : "bg-[#3d4045]"} `}
          onClick={() => {
            handelOnPump && handelOnPump();
          }}
          variant={"solid"}
          color="green"
        >
          روشن
        </Button>
        <Button
          className={`${PumpPower ? "bg-[#3d4045]" : ""} `}
          size="small"
          onClick={() => {
            handelOffPump && handelOffPump();
          }}
          variant={"solid"}
          color="danger"
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

export default ButtonPumpOperations;
