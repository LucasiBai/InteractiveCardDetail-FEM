import { Injectable, Signal, signal } from '@angular/core';
import { CardDataI } from '../models/card-data-i';

const initCardData: CardDataI = {
  ownerName: '',
  number: '',
  expirationDate: '',
  cvc: '',
};

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  constructor() {}

  cardData: Signal<CardDataI> = signal(initCardData);
}
