// 🛠️ Détails techniques selon le type de propriété
export interface PropertyDetails {
  totalRooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  surface: string;
  constructionYear?: number;
  lotArea?: string;
  zoning?: string;
  commercialType?: string;
  soilType?: string;
  irrigationAvailable?: boolean;
  agriculturalUse?: string;
  technicalImages?: string[];
}