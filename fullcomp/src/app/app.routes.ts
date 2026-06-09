import { Routes } from '@angular/router';
import { FullcompProductsComponent } from './fullcomp-products/fullcomp-products';
import { FullcompAboutComponent } from './fullcomp-about/fullcomp-about';

export const routes: Routes = [
  {
    path: '',
    component: FullcompProductsComponent
  },
  {
    path: 'about',
    component: FullcompAboutComponent
  }
];