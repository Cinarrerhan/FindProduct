import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindProductComponent } from './find-product/find-product.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
  ],
  declarations: [
    FindProductComponent
  ]
})
export class PagesModule { }
