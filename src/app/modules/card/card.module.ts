import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardViewComponent, CardFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardFormComponent],
})
export class CardModule {}
