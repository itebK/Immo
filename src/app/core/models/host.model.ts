// 👤 Informations sur l'hôte (propriétaire ou agence)
export type HostType = 'agence' | 'particulier';

export interface Host {
  id: string;
  name: string;
  image?: string;
  location: string;
  about: string;
  type: HostType;
}