import { NgModule } from '@angular/core';
import { EllipsisPipe } from './elipsis';




export const PIPES = [
  EllipsisPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }
