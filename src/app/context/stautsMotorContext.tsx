"use client";
import React, { createContext, useState } from "react";
import { MotorSatus } from "./type/statusMotorTypes";

type StatusMotorProviderProps = {
  children: React.ReactNode;
};

//context
export const statusMotorContext = createContext<MotorSatus>({
  EngineSpeed: "slow",
  PowerMotor: false,
  handelOnMotor: () => {},
  handelOffMotor: () => {},
  handelHeightSpeed: (value: string) => {},
});

//context provider
const StatusMotorContextProvider = ({ children }: StatusMotorProviderProps) => {
  const [engineSpeed, setEngineSpeed] = useState("slow");
  const [PowerMotor, setPowerMotor] = useState(false);
  function handelOnMotor() {
    setPowerMotor(true);
  }
  function handelOffMotor() {
    setPowerMotor(false);
  }
  function handelHeightSpeed(value: string) {
    setEngineSpeed(value);
  }
  return (
    <statusMotorContext.Provider
      value={{
        EngineSpeed: engineSpeed,
        PowerMotor: PowerMotor,
        handelOnMotor,
        handelOffMotor,
        handelHeightSpeed,
      }}
    >
      {children}
    </statusMotorContext.Provider>
  );
};

export default StatusMotorContextProvider;
