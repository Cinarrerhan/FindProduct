import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindProductComponent } from './pages/find-product/find-product.component';

export const routes : Routes = [
  {
    path : 'product/find',
    component : FindProductComponent
  }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}