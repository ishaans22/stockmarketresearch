import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CustomerloginComponentComponent } from './customerlogin-component/customerlogin-component.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

const routes:Routes=[
  {path:"clogin", component:CustomerloginComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, BodyComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
