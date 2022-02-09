import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddMemeFormComponent } from './components/add-meme-form/add-meme-form.component';
import { MemesComponent } from './components/memes/memes.component';
import { MemeCardComponent } from './components/meme-card/meme-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMemeFormComponent,
    MemesComponent,
    MemeCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
