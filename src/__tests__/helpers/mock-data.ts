import type { VehicleDocument } from "@/types/vehicle";

// Mock vehicle data, we have the vehicle Document so that is the data type
export const createMockVehicle = (overrides?: Partial<VehicleDocument>): VehicleDocument => ({
  _id: "mock-id",
  modelName: "Mock Vehicle",
  slug: "mock-vehicle",
  category: "motorcycle",
  about: "This is a mock vehicle for testing purposes.",
  engine: {
    displacement: "100cc",
    type: "4-Stroke",
  },
  performance: {
    power: "7.5 bhp @ 8000 rpm",
    torque: "8.5 Nm @ 6000 rpm",
    mileage: "70 km/l",
  },
  variants: [
    {
      name: "Base",
      features: ["Electric Start", "LED Headlamp"],
      prices: {
        delhi: {
          currency: "INR",
          exShowroom: 70000,
          onRoadPrice: 80000,
        },
        kolkata: {
          currency: "INR",
          exShowroom: 72000,
          onRoadPrice: 82000,
        },
      },
    },
  ],
  createdAt: new Date("2025-11-08"),
  updatedAt: new Date("2025-11-08"),
  ...overrides,
});
