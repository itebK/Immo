import { Details } from "./details.model";
import { Host } from "./host.model";

export class Property {
  ref: string;  
  title: string;
  location: string;
  price: number;
  currency: string;
  images: string[];
  host: Host;
  type: string;
  published: string;
  details: Details[];

  constructor(data: any) {
    this.ref = data.ref;
    this.title = data.title;
    this.location = data.location;
    this.price = data.price;
    this.currency = data.currency;
    this.images = data.images;
    this.host = data.host;
    this.type = data.type;
    this.published = data.published;
    this.details =  data.details;
  }
}