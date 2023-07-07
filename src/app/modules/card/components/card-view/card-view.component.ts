import { Component, Signal, signal } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { CardDataI } from '../../models/card-data-i';

const initCardData: CardDataI = {
  ownerName: 'jane applesseed',
  expirationDate: '00/00',
  number: '0000 0000 0000 0000',
  cvc: '000',
};

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass'],
})
export class CardViewComponent {
  constructor(public _cardData: CardDataService) {}

  cardData: Signal<CardDataI> = signal(initCardData);
}
