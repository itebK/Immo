export class Host {
  id: string;
  name: string;
  image: string;
  location: number;
  about: string[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.location = data.location;
    this.about = data.about;
  }
}
