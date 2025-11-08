import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { StatusCodes } from "http-status-codes";

import VehicleModel from "@/models/Vehicle";
import { GET } from "./route";

// Mock dependencies
jest.mock("@/lib/mongodb");
jest.mock("@/models/Vehicle");

const mockVehicleModel = VehicleModel as jest.Mocked<typeof VehicleModel>;

describe("Hero Splendor API Route", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return vehicle data when found", async () => {
    const mockVehicle = {
      modelName: "Hero Splendor Plus",
      slug: "hero-splendor-plus",
      about: "Test description",
      category: "motorcycle" as const,
      engine: { displacement: "97.2cc", type: "Air-cooled" },
      performance: { power: "7.9 bhp", torque: "8.05 Nm", mileage: "70 kmpl" },
      variants: [],
      prices: new Map(),
    };

    mockVehicleModel.findOne = jest.fn().mockReturnValue({
      lean: jest.fn<() => Promise<typeof mockVehicle>>().mockResolvedValue(mockVehicle),
    }) as any;

    const response = await GET();
    const data = await response.json();

    expect(mockVehicleModel.findOne).toHaveBeenCalledWith({
      slug: "hero-splendor-plus",
    });
    expect(response.status).toBe(StatusCodes.OK);
    expect(data.success).toBe(true);
    expect(data.data.modelName).toBe("Hero Splendor Plus");
    expect(data.data.slug).toBe("hero-splendor-plus");
  });

  it("should return 404 when vehicle not found", async () => {
    mockVehicleModel.findOne = jest.fn().mockReturnValue({
      lean: jest.fn<() => Promise<null>>().mockResolvedValue(null),
    }) as any;

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Hero Splendor Plus not found");
  });

  it("should return 400 when database error occurs", async () => {
    mockVehicleModel.findOne = jest.fn().mockReturnValue({
      lean: jest.fn<() => Promise<never>>().mockRejectedValue(new Error("Database error")),
    }) as any;

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Failed to fetch vehicle data");
  });
});
