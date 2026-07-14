import { Routes } from '@angular/router';
import { FullcompProductsComponent } from './fullcomp-products/fullcomp-products';
import { FullcompAboutComponent } from './fullcomp-about/fullcomp-about';
import { Comments } from './comments/comments';

export const routes: Routes = [
  {
    path: '',
    component: FullcompProductsComponent
  },
  {
    path: 'about',
    component: FullcompAboutComponent
  },
  {
    path: 'comments',
    component: Comments
  }
];