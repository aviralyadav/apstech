import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureComponent } from './feature/feature.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AuthModule } from './auth/auth.module';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@angular/http';
import { LoginAuthGuard } from './auth/login-auth-guard';
import { DataMarketingService } from './shared/data-marketing.service';
import { DataPortfolio } from './shared/data-portfolio.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    SliderComponent,
    FooterComponent,
    FeatureComponent,
    PortfolioComponent,
    MarketingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    Ng2CarouselamosModule
  ],
  providers: [
    AuthService, 
    LoginAuthGuard, 
    DataMarketingService,
    DataPortfolio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
