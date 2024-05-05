{
  type a1 = null;
  type b1 = undefined;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type hasBike = CheckVehicle<"ship">;
  type hasTractor = CheckVehicle<"tractor">;
}
