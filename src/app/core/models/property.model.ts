import { Details } from './details.model';
import { Host } from './host.model';

export class Property {
  ref: string;
  title: string;
  location: string;
  address: string;
  city: string;
  area: string;
  price: number;
  currency: string;
  images: string[];
  host: Host;
  type: string;
  published: string;
  // details: Details[];
  isNew: boolean;
  bedrooms:string;
  bathrooms:string;
  surface:string;

  constructor(data: any) {
    this.ref = data.ref;
    this.title = data.title;
    this.location = data.location;
    this.address = data.address;
    this.city = data.city;
    this.area = data.area;
    this.price = data.price;
    this.currency = data.currency;
    this.images = data.images;
    this.host = data.host;
    this.type = data.type;
    this.published = data.published;
    // this.details = data.details;
    this.isNew = data.isNew || false;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.surface = data.surface;
  }
}
