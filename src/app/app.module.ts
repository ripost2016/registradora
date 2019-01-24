import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductosComponent } from './main/productos/productos.component';
import { ListaComponent } from './main/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductosComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
