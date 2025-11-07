import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import VehicleModel from "@/models/Vehicle";
import type { VehicleDocument } from "@/types/vehicle";

export async function GET() {
  try {
    await connectToDatabase();

    const vehicle: VehicleDocument | null = await VehicleModel.findOne({
      slug: "hero-splendor-plus",
    }).lean();

    if (!vehicle) {
      return NextResponse.json({ success: false, error: "Hero Splendor Plus not found" }, { status: StatusCodes.NOT_FOUND });
    }

    return NextResponse.json(
      {
        success: true,
        data: vehicle,
      },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error("Error fetching Hero Splendor Plus:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch vehicle data",
      },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}
