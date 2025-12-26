export type MotorSatus = {
    PowerMotor: boolean,
    EngineSpeed: string
    handelOnMotor: () => void
    handelOffMotor: () => void
    handelHeightSpeed: (value: string) => void
}