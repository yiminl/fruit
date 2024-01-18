import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './nodes/login/login.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { 
    path: 'login',
     component: LoginComponent
  },
  { 
    path: 'products', 
    loadChildren: () => import('./nodes/products/products.module').then(m => m.ProductsModule),
    canActivate:[authGuard] 
  },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
