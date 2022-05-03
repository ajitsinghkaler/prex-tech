import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FirstRouteComponent } from './components/first-route/first-route.component';
import { SecondRouteComponent } from './components/second-route/second-route.component';
import { ThirdRouteComponent } from './components/third-route/third-route.component';
import { ContainerRouteComponent } from './components/container-route/container-route.component';
import { BaseRouteComponent } from './components/base-route/base-route.component';
import {MatTableModule} from '@angular/material/table';
import { TextChangerDirective } from './directives/text-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    ThirdRouteComponent,
    ContainerRouteComponent,
    BaseRouteComponent,
    TextChangerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
