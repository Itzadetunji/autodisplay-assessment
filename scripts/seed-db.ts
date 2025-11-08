import mongoose from "mongoose";

import VehicleModel from "../src/models/Vehicle";

const MONGODB_URI = process.env.MONGODB_URI as string;

const vehicles = [
  {
    modelName: "Hero Splendor Plus",
    about:
      "The Hero Splendor Plus is India's most popular commuter motorcycle from Hero MotoCorp, known for exceptional fuel efficiency, reliability, and affordability. It combines modern technology with proven performance.",
    slug: "hero-splendor-plus",
    category: "motorcycle",
    engine: {
      displacement: "124.7 cc",
      type: "Air cooled, 4-stroke, Single cylinder, OHC",
    },
    performance: {
      power: "8.02 bhp @ 8000 rpm",
      torque: "8.05 Nm @ 6000 rpm",
      mileage: "73 kmpl",
    },
    variants: [
      {
        name: "i3s",
        transmission: "4 Speed Manual",
        features: [
          "Drum Brakes (130mm Front & Rear)",
          "97.2cc Engine",
          "IBS Braking System",
          "Analogue Speedometer",
          "Analogue Odometer",
          "Low Fuel Indicator",
          "Self Start",
          "Pass Light",
          "Self Start",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 73902,
            onRoadPrice: 82992,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 73678,
            onRoadPrice: 88617,
          },
        },
      },
      {
        name: "Xtec",
        transmission: "4 Speed Manual",
        features: [
          "97.2cc Engine",
          "XSens Advantage Technology",
          "i3S (Idle Start-Stop System)",
          "Silent Start",
          "Drum Brakes (130mm Front & Rear)",
          "IBS Braking System",
          "Digital LCD Console",
          "Bluetooth Connectivity",
          "Digital Speedometer",
          "Digital Odometer",
          "Real-Time Mileage Indicator",
          "USB Charging Port",
          "Call/SMS Alerts",
          "Low Fuel Indicator",
          "Stand Alarm",
          "DRLs (Daytime Running Lights)",
          "Side Stand Engine Cut-off",
          "Pass Light",
          "Digital Odometer",
          "Self Start",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 74500,
            onRoadPrice: 83592,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 74276,
            onRoadPrice: 89215,
          },
        },
      },
      {
        name: "Super XTEC",
        transmission: "5 Speed Manual",
        features: [
          "124.7cc Engine",
          "5-Speed Manual Gearbox",
          "LED Headlight",
          "DRLs (Daytime Running Lights)",
          "Drum Brakes (130mm Front & Rear)",
          "IBS Braking System",
          "Digital LCD Console",
          "Digital Speedometer",
          "Digital Odometer",
          "Real-Time Mileage Indicator",
          "USB Charging Port",
          "Call/SMS Alerts",
          "Low Fuel Indicator",
          "Stand Alarm",
          "Pass Light",
          "Digital Odometer",
          "Kick and Self Start",
          "Malfunction Indicator",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 77103,
            onRoadPrice: 86193,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 76879,
            onRoadPrice: 91802,
          },
        },
      },
    ],
  },
  {
    modelName: "Honda Amaze",
    about:
      "The Honda Amaze is a subcompact sedan known for combining Honda's reputation for reliability with a stylish design and practical features. It is India's most affordable sedan with ADAS technology.",
    slug: "honda-amaze",
    category: "car",
    engine: {
      displacement: "1199 cc",
      type: "4 Cylinder, SOHC I-VTEC",
    },
    performance: {
      power: "89 bhp @ 6000 rpm",
      torque: "110 Nm @ 4800 rpm",
      mileage: "18.65 kmpl (Manual) / 19.46 kmpl (CVT)",
    },
    variants: [
      {
        name: "V",
        transmission: "Manual",
        features: ["6 Airbags", "8-inch Touchscreen", "14-inch Steel Wheels", "Rear Parking Sensors", "LED Headlamps", "Keyless Entry", "Idle Start-Stop System"],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 799000,
            onRoadPrice: 842000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 799000,
            onRoadPrice: 855000,
          },
        },
      },
      {
        name: "V CVT",
        transmission: "Automatic",
        features: ["6 Airbags", "8-inch Touchscreen", "14-inch Steel Wheels", "Rear Parking Sensors", "LED Headlamps", "Keyless Entry", "Idle Start-Stop System"],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 919000,
            onRoadPrice: 969000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 919000,
            onRoadPrice: 982000,
          },
        },
      },
      {
        name: "VX",
        transmission: "Manual",
        features: [
          "6 Airbags",
          "8-inch Touchscreen",
          "15-inch Alloy Wheels",
          "Automatic Climate Control",
          "Rear Parking Sensors",
          "LED Headlamps",
          "Keyless Entry",
          "Push Button Start",
          "Rear Camera with Guidelines",
          "Idle Start-Stop System",
          "Wireless Phone Charging",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 909000,
            onRoadPrice: 954000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 909000,
            onRoadPrice: 967000,
          },
        },
      },
      {
        name: "VX CVT",
        transmission: "Automatic",
        features: [
          "6 Airbags",
          "8-inch Touchscreen",
          "15-inch Alloy Wheels",
          "Automatic Climate Control",
          "Rear Parking Sensors",
          "LED Headlamps",
          "Keyless Entry",
          "Push Button Start",
          "Rear Camera with Guidelines",
          "Idle Start-Stop System",
          "Wireless Phone Charging",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 915000,
            onRoadPrice: 1025000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 915000,
            onRoadPrice: 1038000,
          },
        },
      },
      {
        name: "ZX",
        transmission: "Manual",
        features: [
          "6 Airbags",
          "8-inch Touchscreen",
          "15-inch Dual-Tone Alloy Wheels",
          "Automatic Climate Control",
          "Adaptive Cruise Control",
          "Lane Keep Assist",
          "Auto Headlamps",
          "Push Button Start",
          "Rear Camera with Guidelines",
          "Rear Parking Sensors",
          "Wireless Phone Charging",
          "Idle Start-Stop System",
          "LED Headlamps",
          "Keyless Entry",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 970000,
            onRoadPrice: 1043000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 970000,
            onRoadPrice: 1056000,
          },
        },
      },
      {
        name: "ZX CVT",
        transmission: "Automatic",
        features: [
          "6 Airbags",
          "8-inch Touchscreen",
          "15-inch Dual-Tone Alloy Wheels",
          "Automatic Climate Control",
          "Adaptive Cruise Control",
          "Lane Keep Assist",
          "Auto Headlamps",
          "Push Button Start",
          "Rear Camera with Guidelines",
          "Rear Parking Sensors",
          "Wireless Phone Charging",
          "Idle Start-Stop System",
          "LED Headlamps",
          "Keyless Entry",
        ],
        prices: {
          delhi: {
            currency: "INR",
            exShowroom: 1090000,
            onRoadPrice: 1198000,
          },
          kolkata: {
            currency: "INR",
            exShowroom: 1090000,
            onRoadPrice: 1211000,
          },
        },
      },
    ],
  },
];

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    console.log("Clearing existing vehicles...");
    await VehicleModel.deleteMany({});

    console.log("Inserting seed data...");
    const result = await VehicleModel.insertMany(vehicles);
    console.log(`Successfully inserted ${result.length} vehicles`);

    console.log("\nSeeded vehicles:");
    result.forEach((vehicle) => {
      console.log(`- ${vehicle.modelName} (${vehicle.slug})`);
    });

    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
