import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { Host } from '../models/host.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties: Property[] = [
    // {
    //   ref: '2938502',
    //   title: 'Appartement S+3',
    //   location: 'Ennaser 2, Ariana',
    //   price: 2100,
    //   currency: 'TND',
    //   type: 'vente',
    //   details: [
    //     { name: 'type', value: 'villa', icon: 'M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z' },
    //     { name: 'yearBuilt', value: '2018', icon: 'M240.8 4.8C250.3 10.6 256 20.9 256 32l0 72 89 0c3.6-13.8 16.1-24 31-24l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-14.9 0-27.4-10.2-31-24l-89 0 0 72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM32 384l96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm192 0l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z' },
    //     { name: 'buildingCondition', value: 'Excellent', icon: 'M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z' },
    //     { name: 'totalFloors', value: '2', icon: 'M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z' },
    //     { name: 'totalUnits', value: '1', icon: 'M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z' },
    //     { name: 'bedrooms', value: '3', icon: 'M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z' },
    //     { name: 'bathrooms', value: '2', icon: 'M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z' },
    //     { name: 'surface', value: '200mc', icon: '' },
    //   ],
    //   host: {
    //     id: 'oeElkdfnc0192',
    //     name: 'ar immobilier',
    //     image: '',
    //     location: 'tebourba, mannouba',
    //     about: 'about kol chay fel about hu wallahi',
    //   },
    //   published: '17 avril 2025',
    //   images: [
    //     'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    //     'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
    //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    //     'https://images.unsplash.com/photo-1600585154205-61d043aa06f8',
    //     'https://images.unsplash.com/photo-1501183638710-841dd1904471',
    //   ],
    // },
    {
      "ref": "2938502",
      "title": "Appartement S+3",
      "location": "Ennaser 2, Ariana",
      "price": 2100,
      "currency": "TND",
      "type": "Maison à vendre",
      "address": "Rue Ibn Khaldoun, app. 12",
      "city": "Ariana",
      "area": "Quartier Ennaser",
      "isNew": true,
      "bedrooms": "3",
      "bathrooms":"2",
      "surface": "200",
      "host": {
        "id": "oeElkdfnc0192",
        "name": "ar immobilier",
        "image": "",
        "location": "Tebourba, Mannouba",
        "about": "about kol chay fel about hu wallahi"
      },
      "published": "17 avril 2025",
      "images": [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600585154205-61d043aa06f8",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471"
      ]
    }  ,
    {
      "ref": "2938502",
      "title": "Appartement S+3",
      "location": "Ennaser 2, Ariana",
      "price": 2100,
      "currency": "TND",
      "type": "Maison à vendre",
      "address": "Rue Ibn Khaldoun, app. 12",
      "city": "Ariana",
      "area": "Quartier Ennaser",
      "isNew": true,
      "bedrooms": "3",
      "bathrooms":"2",
      "surface": "200",
      "host": {
        "id": "oeElkdfnc0192",
        "name": "ar immobilier",
        "image": "",
        "location": "Tebourba, Mannouba",
        "about": "about kol chay fel about hu wallahi"
      },
      "published": "17 avril 2025",
      "images": [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600585154205-61d043aa06f8",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471"
      ]
    }   
  ];

  constructor() {}

  getProperties() {
    return this.properties;
  }
}
