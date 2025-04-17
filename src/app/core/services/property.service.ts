import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties = [
    {
      ref: '2938502',
      title: 'Condo moderne à Québec',
      location: 'Québec, QC',
      price: 345000,
      type: 'vente',
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
    {
      ref: '2938d02',
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
    {
      ref: '11098502',
      title: 'Condo moderne à Québec',
      location: 'Québec, QC',
      price: 345000,
      type: 'vente',
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
    {
      ref: '2938e0x',
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
    {
      ref: '29x233x85a',
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
    {
      ref: '29xxc38502',
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300',
      ],
    },
  ];

  constructor() {}

  getProperties() {
    return this.properties;
  }
}
