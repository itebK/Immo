import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { Host } from '../models/host.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties: Property[] = [
    {
      ref: '2938502',
      title: 'Appartement S+3',
      location: 'Ennaser 2, Ariana',
      price: 2100,
      currency: 'TND',
      type: 'vente',
      details: [
        { name: 'type', value: 'villa' },
        { name: 'yearBuilt', value: '2018' },
        { name: 'buildingCondition', value: 'Excellent' },
        { name: 'totalFloors', value: '2' },
        { name: 'totalUnits', value: '1' },
        { name: 'bedrooms', value: '3' },
        { name: 'bathrooms', value: '2' },
        { name: 'surface', value: '200mc' },
      ],
      host: {
        id: 'oeElkdfnc0192',
        name: 'ar immobilier',
        image: '',
        location: 'tebourba, mannouba',
        about: 'about kol chay fel about hu wallahi',
      },
      published: '17 avril 2025',
      images: [
        'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/476650443_581667088358268_8401025535968828975_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sGAzrD0on5AQ7kNvwHTEMXt&_nc_oc=AdnFWSfqZBSoGvAE3DiPQcqC9Z8wrjf6k2gFnXBofMx8H4bTaddDSGUYiR7liDF1b9gQSEKyzdqcnwH7v6C13cEN&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=SYYZuoQ372RS2iABYoRG6g&oh=00_AfEwkqpCtanr8WHbApjoXw0l2UDhG5CX_dnXKhb_O57HnQ&oe=68073FDE',
        'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/476671590_581667121691598_5196226225807650674_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0BQdp3ZLJKwQ7kNvwGMvno-&_nc_oc=AdlNcsGezHIKMCiTzZLVG7MwzqR6cPj9B8vs4ezUWynxcRA01TkeQtTkN176s5cx7cHn1Ku10Qg9SXOwpAzAkcaA&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=DM06LJ1U4n-tXUs7Ul3N7w&oh=00_AfEurOkJCktwsfbFwdpvMB9EHA76W2FSiJJfH3ZuxvHYzQ&oe=6807409F',
        'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/476931393_581667098358267_1953190396133045669_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4wgHB35W8d8Q7kNvwGdqriO&_nc_oc=AdllhL-22pbVKuULs7GTVOOzstQC_yKJwol94xCzwtKiODWzXpcoldM2r7tas3S3GWMcrEDAWLS8zvZ6qYRs_-S1&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=YvbojSMqH3_JPnWUOK2ZHQ&oh=00_AfGZO7U0OSDvFB2NNW89OzZFg0WLdw27KJ0tatripAu3jg&oe=68072FF7',
        'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/476397794_581667301691580_817373401946991132_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vwQ02fkB1sYQ7kNvwHRtkeQ&_nc_oc=AdmQ0pKi0slSxZ-yhUGEMT6ZQatAa8oM7dtrUgE-_-qLTZFy5e73up1gACRRm6LaBYsBOS2Ecs64GcuHxgNsZoAK&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=90iVplomDWZcMPAczxxrUQ&oh=00_AfHAuNk4w6pAK5Owa5zt_5Z-24QNFyP7_epzpKbkLYYROg&oe=680739AE',
        'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/476465422_581667341691576_7539846841100207423_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GddQBLUxLBEQ7kNvwEWYV4_&_nc_oc=AdlhkE6hpOozI3zQLuF4EqXinluwOmBv4Mj1Q8VAOLMsRkDDLX9329vlbAdOt6UoFMMu0wlKsFTYnPKR5T_2_8Zc&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=yLkkO8-eYC7CIZiKU2HjDg&oh=00_AfFogoMkgWDDVoZO6fYG6rV_Z_dtsWqm0xfeAAItC8XETg&oe=68073A02',
        'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/477121085_581667101691600_3895802015051636198_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vjov7eAj4UIQ7kNvwGoipud&_nc_oc=AdlDTXQgmFc1aGc-hV22V9KBNayYSwhyTR38cqDTe0_lqqxmA5LaA1OqOoeFveoF9S-cl1GqoZb3ll49nlQ0JGCI&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=AFKPrvYptHwCFHuHKGdU9A&oh=00_AfHq9N9pqWw5x1imqBcqqeFQnFrP5M_kR8VyIPimsuEP8w&oe=680740FD'
      ],
    },
  ];

  constructor() {}

  getProperties() {
    return this.properties;
  }
}
