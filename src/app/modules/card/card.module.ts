import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [CardViewComponent, CardFormComponent],
  imports: [CommonModule],
  exports: [CardFormComponent],
})
export class CardModule {}
