import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardDataI } from '../../models/card-data-i';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass'],
})
export class CardFormComponent {
  constructor(public _cardData: CardDataService, public _fb: FormBuilder) {
    this.userCardForm = this.initForm();
  }
  userCardForm!: FormGroup;

  public updateData(): void {
    const { value } = this.userCardForm;

    const {
      expirationYear: year,
      expirationMonth: month,
      name,
      cardNumber,
      cvc,
    } = value;

    this._cardData.cardData.set({
      ownerName: name,
      number: cardNumber,
      expirationDate: this.formatDate(month, year),
      cvc: cvc,
    } as CardDataI);
  }

  private initForm(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.maxLength(4)]],
      expirationMonth: [
        '',
        [
          Validators.required,
          Validators.maxLength(2),
          Validators.pattern('\bd+\b'),
        ],
      ],

      expirationYear: [
        '',
        [
          Validators.required,
          Validators.maxLength(2),
          Validators.pattern('\bd+\b'),
        ],
      ],
    });
  }

  private formatDate(month: string, year: string): string {
    return `${month}/${year}`;
  }
}
