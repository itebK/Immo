export class Details {
  name: string;
  value: any;

  constructor(data: any) {
    this.value = data.value;
    this.name = data.name;
  }
}
