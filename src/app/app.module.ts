import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './page/home/home.component';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { DryConversionComponent } from './components/recipe-table/dry-conversion/dry-conversion.component';
import { FractionComponent } from './components/recipe-table/fraction/fraction.component';
import { HeaderComponent } from './components/recipe-table/header/header.component';
import { LiquidConversionComponent } from './components/recipe-table/liquid-conversion/liquid-conversion.component';
import { RecipeComponent } from './page/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeTableComponent,
    DryConversionComponent,
    FractionComponent,
    HeaderComponent,
    LiquidConversionComponent,
    RecipeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    AppRoutingModule,
    RecipeComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
