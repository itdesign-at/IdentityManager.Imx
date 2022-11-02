import { NgModule } from '@angular/core';
import { CccItdLibComponent } from './ccc-itd-lib.component';
import {MenuService} from "qbm";
import {ItdMenuService} from "./menu/menu.service";


@NgModule({
  declarations: [
    CccItdLibComponent
  ],
  imports: [
  ],
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
export class CccItdLibModule { }
