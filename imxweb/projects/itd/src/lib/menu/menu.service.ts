import { Injectable } from '@angular/core';

import { ProjectConfig } from 'imx-api-qbm';

import { MenuFactory, MenuItem } from 'qbm';

@Injectable({
  providedIn: 'root'
})
export class ItdMenuService {
  private factories: MenuFactory[] = [];

  public addMenuFactories(...factories: MenuFactory[]): void {
    this.factories.push(...factories);
  }

  public clearFactories(): void {
    this.factories = [];
  }

  public getMenuItems(
    preProps: string[],
    groups: string[],
    allowEmpty: boolean = false,
    projectConfig?: ProjectConfig): MenuItem[] {
    const menuItems: MenuItem[] = [];

    console.log("getMenuItems")

    this.factories
      .map(factory => factory(preProps, groups, projectConfig))
      .filter(menu => menu && (allowEmpty || (menu.items && menu.items.length > 0)))
      .sort((item1, item2) => this.compareMenuItems(item1, item2))
      .forEach(menu => {
        const existing = menu.id != null && menuItems.find(item => item.id === menu.id);
        if (existing) {
          if (existing.items) {
            // Here only splice it there are items, otherwise this is a flat home button and it already exists
            existing.items.splice(-1, 0, ...menu.items);
            existing.items = this.sortMenuItems(existing.items);
          }
        } else {
          menuItems.push(menu);
          menu.items = this.sortMenuItems(menu.items);
        }
      });

    console.log(menuItems)

    return menuItems;
  }

  private sortMenuItems(items: MenuItem[]): MenuItem[] {
    if (!items) {
      return items;
    }
    return items.sort((item1, item2) => this.compareMenuItems(item1, item2))
      .filter((item, index, array) => !item.id || index === array.findIndex(t => t.id === item.id));
  }

  private compareMenuItems(item1: MenuItem, item2: MenuItem): number {
    return +!item1.sorting - +!item2.sorting || item1.sorting?.toString().localeCompare(item2.sorting?.toString());
  }
}
