import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import VehicleModel from "@/models/Vehicle";
import type { VehicleDocument } from "@/types/vehicle";
import { StatusCodes } from "http-status-codes";

export async function GET() {
  try {
    await connectToDatabase();

    const vehicle: VehicleDocument | null = await VehicleModel.findOne({
      slug: "honda-amaze",
    }).lean();

    if (!vehicle) {
      return NextResponse.json({ success: false, error: "Honda Amaze not found" }, { status: StatusCodes.NOT_FOUND });
    }

    return NextResponse.json(
      {
        success: true,
        data: vehicle,
      },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error("Error fetching Honda Amaze:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch vehicle data",
      },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}
