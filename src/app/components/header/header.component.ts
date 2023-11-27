import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <a
              mat-tab-link
              mat-theme="accent"
              (click)="homeClick()"
              class="nav-bar-link cursor"
              data-home-nav
              >Home
            </a>
          </div>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public service: RecipeService,
    private router: Router
  ) { }

  homeClick(): void {
    this.service.setEmptyRecipe();
    this.router.navigateByUrl('');
  }
}
