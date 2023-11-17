import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { ProductsComponent } from './products/products.component';
import { FlangeFilterComponent } from './flange-filter/flange-filter.component';
import { SizeFilterComponent } from './size-filter/size-filter.component';
import { LandingProductDescComponent } from './landing-product-desc/landing-product-desc.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckboxDropdownComponent } from './checkbox-dropdown/checkbox-dropdown.component';
import { FormsModule } from '@angular/forms';
import { SortProductsDropdownComponent } from './sort-products-dropdown/sort-products-dropdown.component';

const routes : Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'technical/rp', component: TechnicalComponent},
  {path: 'technical/tsc', component: TechnicalComponent},
  {path: 'technical/tss', component: TechnicalComponent},
  {path: 'technical/cc', component: TechnicalComponent},
  {path: 'technical/tco', component: TechnicalComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},
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
    PageNotFoundComponent,
    ProductCardComponent,
    ProductListComponent,
    PriceFilterComponent,
    ProductsComponent,
    FlangeFilterComponent,
    SizeFilterComponent,
    LandingProductDescComponent,
    FooterComponent,
    ProductDetailComponent,
    CheckboxDropdownComponent,
    SortProductsDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
