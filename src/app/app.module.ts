import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardModule } from './modules/card/card.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
