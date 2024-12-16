export interface CarRange {
  name: string;
  partOfYear: {
    summer: number;
    autumn: number; //Also Spring
    winter: number;
  };
  typeOfRoad: {
    city: number;
    outsideCity: number;
    highway: number;
  };
  drivingStyle: {
    snail: number;
    normal: number;
    aggressive: number;
  };
  fullRange: number;
  heatingConsumption: number;
  coolingConsumption: number;
}
