import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { RedDirective } from './red.directive';
import { ViewDirective } from './view.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ItemComponent,
    ViewDirective,
    RedDirective,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
