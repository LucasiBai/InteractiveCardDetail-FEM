import { Component } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  initForm(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required]],
    });
  }
}
