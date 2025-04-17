import { Host } from "./host.model";

export class Property {
  ref: string;  
  title: string;
  location: string;
  price: number;
  images: string[];
  host: Host;
  properties: any;

  constructor(data: any) {
    this.ref = data.ref;
    this.title = data.title;
    this.location = data.location;
    this.price = data.price;
    this.images = data.images;
    this.host = data.host;
    this.properties =  {
      type: "Villa",
      yearBuilt: 2018,
      buildingCondition: "Excellent",
      totalFloors: 2,
      floorLocation: "Ground + 1",
      totalUnits: 1,
      bedrooms: 3,
      bathrooms: 2,
      halfBathrooms: 1,
      ensuiteBathrooms: 1,
      livingRooms: 2,
      diningRooms: 1,
      kitchens: 1,
      laundryRoom: true,
      walkInCloset: true,
      furnished: true,
      totalArea: "250 m²",
      landArea: "600 m²",
      interiorFinish: {
        flooring: "Marble",
        wallFinish: "Painted Plaster",
        ceiling: "Gypsum with LED lighting",
        windows: "Double-glazed Aluminum",
        doors: "Carved Solid Wood",
      },
      heating: {
        type: "Central heating",
        energySource: "Gas",
      },
      cooling: {
        type: "Split-system Air Conditioning",
        units: 4,
      },
      water: {
        supply: "Municipal",
        hotWater: "Solar + Gas backup",
      },
      parking: {
        totalSpaces: 3,
        covered: 1,
        uncovered: 2,
        private: true,
        type: "Driveway and Garage",
      },
      security: {
        gatedEntry: true,
        alarmSystem: true,
        surveillance: true,
      },
      exteriorFeatures: {
        facade: "Stone and stucco",
        roofing: "Tiled roof",
        balcony: true,
        terrace: true,
        privateGarden: true,
        privatePool: true,
        outdoorLounge: true,
        barbecueArea: true,
      },
      indoorFeatures: {
        fireplace: true,
        homeOffice: false,
        smartHome: false,
        spaBath: true,
        soundproofing: true,
      },
      accessibility: {
        wheelchairAccessible: false,
        stairsOnly: true,
      },
      internet: {
        type: "Fiber Optic",
        speed: "100 Mbps",
        included: true,
      },
      view: {
        orientation: "South-East",
        type: "Garden and pool view",
      },
      zoning: "Residential",
      petsAllowed: true,
      smokingAllowed: false,
      energyEfficiency: {
        rating: "B",
        insulation: "Roof and walls",
      },
      nearby: {
        airport: "15 min",
        beach: "20 min",
        cityCenter: "10 min",
        shopping: "5 min",
        publicTransport: "3 min walk",
        schools: "Nearby private and public",
      },
    }
  }
}