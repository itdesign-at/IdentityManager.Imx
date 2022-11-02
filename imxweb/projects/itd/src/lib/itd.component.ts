import { Component, OnInit } from '@angular/core';
import {MenuService} from "qbm";
import {ItdMenuService} from "./menu/menu.service";

@Component({
  selector: 'lib-itd',
  template: `
    <p>
      itd works!
    </p>
  `,
  styles: [
  ],
  providers: [
    {
      provide: MenuService,
      useClass: ItdMenuService
    }
  ]
})
export class ItdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
