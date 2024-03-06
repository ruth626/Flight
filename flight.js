class cwalgoFlight {
    static setNeutral= "Neutral"
    constructor (Batteries, MagnetoSwitches, MasterSwitches, MeshSwitches, Generator, Invertors, ControlSurface, Brakes, FuelPump, Props, MixtureControl, CowlFlaps, TurboControl, speed) {        
        this.MagnetoSwitches =cwalgoFlight.setNeutral;
        this.Batteries = true;
        this.MasterSwitches = false;
        this.MeshSwitches = false;
        this.Generator = false;
        this.Invertors = true;
        this.ControlSurface = true;
        this.FuelPump = true;
        this.Props = 12;
        this.MixtureControl = "";
        this.CowlFlaps = true;
        this.TurboControl = false;
        this.Brakes = true;
        this.speed = 0;

    }
    crankThrottle(throttle) {
        this.FuelPump = true;
        return throttle
    }

    startEngine () {
        if (this.MagnetoSwitches ) {
            this.MeshSwitches = true
            this.MixtureControl = "auto rich"
        return `MagnetoSwitches is set to ${this.MagnetoSwitches} and mxture control is set to ${this.MixtureControl}`
        }
    } 
    idleEngine(){
        this.speed=800+"RPM"
        return `Speed is set to ${this.speed}`
    }

}

const cathflight = new cwalgoFlight();
console.log(cathflight.startEngine());
console.log(cathflight.idleEngine());
