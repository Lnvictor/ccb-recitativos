import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule, MatSidenavModule
  ],
  bootstrap: [MainComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class RootModule { }
