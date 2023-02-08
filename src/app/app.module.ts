import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { SuccessBlockComponent } from './components/success-block/success-block.component';
import { FaqCardComponent } from './components/faq-card/faq-card.component';
import { NavMobMenuComponent } from './components/nav-mob-menu/nav-mob-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    SuccessBlockComponent,
    FaqCardComponent,
    NavMobMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslocoRootModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
