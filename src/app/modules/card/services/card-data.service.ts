import { Injectable, WritableSignal, signal } from '@angular/core';
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

  cardData: WritableSignal<CardDataI> = signal(initCardData);
}
