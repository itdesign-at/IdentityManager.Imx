import { Injectable } from '@angular/core';

import { ProjectConfig } from 'imx-api-qbm';

import {MenuFactory, MenuItem, MenuService} from 'qbm';

@Injectable({
  providedIn: 'root'
})
export class ItdMenuService extends MenuService {

  private DisabledMenuItems = ["ROOT_Responsibilities", "QER_Requests_NewRequest", "QER_Request_RequestTemplates"];

  public getMenuItems(
    preProps: string[],
    groups: string[],
    allowEmpty: boolean = false,
    projectConfig?: ProjectConfig): MenuItem[] {
    const menuItems = super.getMenuItems(preProps, groups, allowEmpty, projectConfig);


    console.log("getMenuItems")
    console.log(menuItems)

    return menuItems;
  }

}
