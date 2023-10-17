import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SupportComponent } from './support/support.component';
import { LandingImageComponent } from './landing-image/landing-image.component';
import { LandingDescriptionComponent } from './landing-description/landing-description.component';
import { LandingStatementComponent } from './landing-statement/landing-statement.component';
import { HomeComponent } from './home/home.component';
import { TechnicalComponent } from './technical/technical.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'technical/rp', component: TechnicalComponent},
  {path: 'technical/tsc', component: TechnicalComponent},
  {path: 'technical/tss', component: TechnicalComponent},
  {path: 'technical/cc', component: TechnicalComponent},
  {path: 'technical/tco', component: TechnicalComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ImageCarouselComponent,
    LandingPageComponent,
    SupportComponent,
    LandingImageComponent,
    LandingDescriptionComponent,
    LandingStatementComponent,
    HomeComponent,
    TechnicalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
