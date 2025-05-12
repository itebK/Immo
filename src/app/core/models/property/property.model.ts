import { PropertyCategory } from '../enums/property-category.enum';
import { PropertyMode } from '../enums/property-mode.enum';
import { PropertyType } from '../enums/property-type.enum';
import { Host } from '../host/host.model';
import { PropertyDetails } from './details.model';

// 📦 Modèle principal représentant une propriété immobilière
export class Property {
  id: string;                           // Référence unique
  title: string;                        // Titre de l’annonce
  description: string;
  price: number;
  currency: string;

  category: PropertyCategory;          // residentiel, commercial, agricole
  mode: PropertyMode;                  // vente ou location
  propertyType: PropertyType;          // villa, terrain, appartement, etc.

  isNew: boolean;                      // Indique si c’est une nouvelle inscription
  published: string;                   // Date de publication (string ou Date)

  address: string;
  delegation: string;
  region: string;
  location: string;                    // Peut être des coordonnées ou une zone texte

  images: string[];                    // Images de la propriété

  host: Host;                          // Informations sur le propriétaire ou l’agence

  details: PropertyDetails;            // Caractéristiques techniques (surface, chambres, etc.)

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.currency = data.currency;

    this.category = data.category;
    this.mode = data.mode;
    this.propertyType = data.propertyType;

    this.isNew = data.isNew ?? false;
    this.published = data.published;

    this.address = data.address;
    this.delegation = data.delegation;
    this.region = data.region;
    this.location = data.location;

    this.images = data.images || [];

    this.host = data.host;
    this.details = data.details;
  }
}
