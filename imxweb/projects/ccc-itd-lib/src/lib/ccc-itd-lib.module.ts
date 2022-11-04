import {NgModule} from '@angular/core';
import {CccItdLibComponent} from './ccc-itd-lib.component';
import {MenuService} from 'qbm';
import {ItdMenuService} from './menu/menu.service';
import {ButtonComponent} from './button/button.component';


@NgModule({
  declarations: [
    CccItdLibComponent,
    ButtonComponent
  ],
  imports: [],
  exports: [
    CccItdLibComponent
  ],
  providers: [
    {
      provide: MenuService,
      useClass: ItdMenuService
    }
  ]
})
export class CccItdLibModule {
}
