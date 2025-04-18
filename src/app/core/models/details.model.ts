export class Details {
  name: string;
  value: any;
  icon: any;

  constructor(data: any) {
    this.value = data.value;
    this.name = data.name;
    this.icon = data.icon;
  }
}
