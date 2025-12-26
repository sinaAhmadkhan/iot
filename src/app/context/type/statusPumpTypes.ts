export type PumpSatus = {
    PumpPower: boolean,
    handelOffPump?: () => void,
    handelOnPump?: () => void
}