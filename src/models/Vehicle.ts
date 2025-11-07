import { model, models, Schema, type Model } from "mongoose";

import type { VehicleDocument } from "@/types/vehicle";

const EngineSchema = new Schema(
  {
    displacement: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false }
);

const PerformanceSchema = new Schema(
  {
    power: { type: String, required: true },
    torque: { type: String, required: true },
    mileage: { type: String, required: true },
  },
  { _id: false }
);

const VariantPriceSchema = new Schema(
  {
    currency: { type: String, required: true, default: "INR" },
    onRoadPrice: { type: Number, required: true },
    exShowroom: { type: Number, required: true },
  },
  { _id: false }
);

const VariantSchema = new Schema(
  {
    name: { type: String, required: true },
    transmission: { type: String },
    features: { type: [String], required: true },
    prices: {
      type: Map,
      of: VariantPriceSchema,
    },
  },
  { _id: false }
);

const CityPriceSchema = new Schema(
  {
    currency: { type: String, required: true, default: "INR" },
    onRoadPrice: { type: Number, required: true },
    exShowroom: { type: Number, required: true },
  },
  { _id: false }
);

const VehicleSchema = new Schema<VehicleDocument>(
  {
    modelName: { type: String, required: true },
    about: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, enum: ["motorcycle", "car"], required: true },
    engine: { type: EngineSchema, required: true },
    performance: { type: PerformanceSchema, required: true },
    variants: { type: [VariantSchema], required: true },
    prices: {
      type: Map,
      of: CityPriceSchema,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "vehicles",
  }
);

// Prevent model recompilation in development
const VehicleModel: Model<VehicleDocument> = models.Vehicle || model<VehicleDocument>("Vehicle", VehicleSchema);

export default VehicleModel;
