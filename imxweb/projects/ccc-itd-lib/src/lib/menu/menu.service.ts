import {Injectable} from '@angular/core';

import {ProjectConfig} from 'imx-api-qbm';

import {MenuItem, MenuService} from 'qbm';

@Injectable({
  providedIn: 'root'
})
export class ItdMenuService extends MenuService {

  private disabledMenuItems = ['ROOT_Responsibilities', 'QER_Requests_NewRequest', 'QER_Request_RequestTemplates', 'QER_Request_RequestHistory'];

  public getMenuItems(
    preProps: string[],
    groups: string[],
    allowEmpty: boolean = false,
    projectConfig?: ProjectConfig): MenuItem[] {
    let menuItems = super.getMenuItems(preProps, groups, allowEmpty, projectConfig);

    const filterDisabledItems = (item: MenuItem) => {
      const disabled = this.disabledMenuItems.includes(item.id);
      if (disabled) {
        return false;
      }
      if (item.items) {
        item.items = item.items.filter(filterDisabledItems);
      }
      return true;
    };

    menuItems = menuItems.filter(filterDisabledItems);
    console.log(menuItems);
    return menuItems;
  }
}
