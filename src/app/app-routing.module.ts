import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeComponent } from './page/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'recipe',
    component: AppComponent,
  },
  {
    path: 'recipe/:filename',
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
