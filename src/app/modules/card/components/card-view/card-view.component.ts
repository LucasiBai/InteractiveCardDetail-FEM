import { Component, Signal } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { CardDataI } from '../../models/card-data-i';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass'],
})
export class CardViewComponent {
  constructor(public _cardData: CardDataService) {
    this.cardData = _cardData.cardData;
  }

  cardData!: Signal<CardDataI>;
}
