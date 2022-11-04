import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CccItdLibService} from './ccc-itd-lib.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CccItdConfigModule {
  constructor(private readonly initializer: CccItdLibService) {
    this.initializer.onInit();
    console.log('INITIALIZED');
  }
}
