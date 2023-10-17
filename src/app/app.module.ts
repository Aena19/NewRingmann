import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SupportComponent } from './support/support.component';
import { LandingImageComponent } from './landing-image/landing-image.component';
import { LandingDescriptionComponent } from './landing-description/landing-description.component';
import { LandingStatementComponent } from './landing-statement/landing-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ImageCarouselComponent,
    LandingPageComponent,
    SupportComponent,
    LandingImageComponent,
    LandingDescriptionComponent,
    LandingStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
