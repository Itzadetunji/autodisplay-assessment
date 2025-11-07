export interface Engine {
  displacement: string;
  type: string;
}

export interface Performance {
  power: string;
  torque: string;
  mileage: string;
}

export interface Variant {
  name: string;
  transmission?: string;
  features: string[];
  prices?: {
    delhi?: CityPrice;
    kolkata?: CityPrice;
    [city: string]: CityPrice | undefined;
  };
}

export interface CityPrice {
  currency: string;
  onRoadPrice: number;
  exShowroom: number;
}

export interface Prices {
  delhi: CityPrice;
  kolkata: CityPrice;
  [city: string]: CityPrice; // Allow additional cities
}

export interface Vehicle {
  _id?: string;
  modelName: string;
  about: string;
  slug: string;
  category: "motorcycle" | "car";
  engine: Engine;
  performance: Performance;
  variants: Variant[];
  prices?: Prices;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface VehicleDocument extends Vehicle {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
