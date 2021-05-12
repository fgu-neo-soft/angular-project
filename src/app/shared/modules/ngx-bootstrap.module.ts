import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

const modules: any[] = [
  CommonModule,
  NgxNavbarModule

];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class NgxBootstrapModule { }