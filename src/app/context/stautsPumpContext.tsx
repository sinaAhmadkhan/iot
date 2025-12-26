"use client";
import React, { createContext, useState } from "react";
import { PumpSatus } from "./type/statusPumpTypes";

type StatusMotorProviderProps = {
  children: React.ReactNode;
};

//context
export const statusPumpContext = createContext<PumpSatus>({ PumpPower: false });

//context provider
const StatusPumpContextProvider = ({ children }: StatusMotorProviderProps) => {
  const [PumpPower, setPumpPower] = useState(false);
  function handelOnPump() {
    setPumpPower(true);
  }
  function handelOffPump() {
    setPumpPower(false);
  }

  return (
    <statusPumpContext.Provider
      value={{ PumpPower, handelOffPump, handelOnPump }}
    >
      {children}
    </statusPumpContext.Provider>
  );
};

export default StatusPumpContextProvider;
