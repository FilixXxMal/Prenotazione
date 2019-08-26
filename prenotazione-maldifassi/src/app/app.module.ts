import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrenotazioneViewComponent } from './prenotazione-view/prenotazione-view.component';
import { PrenotazioneComponent } from './prenotazione./prenotazione.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneViewComponent,
    PrenotazioneComponent,
    PrenotazioniComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
