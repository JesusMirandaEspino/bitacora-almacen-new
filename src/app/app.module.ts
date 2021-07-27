import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PagesModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
