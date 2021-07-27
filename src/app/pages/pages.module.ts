import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PagesComponent],
  bootstrap: []
})
export class PagesModule {}
