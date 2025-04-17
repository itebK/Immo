export class Property {
  title: string;
  location: string;
  price: number;
  images: string[];

  constructor(data: any) {
    this.title = data.title;
    this.location = data.location;
    this.price = data.price;
    this.images = data.images;
  }
}
