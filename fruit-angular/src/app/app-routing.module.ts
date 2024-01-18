import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
