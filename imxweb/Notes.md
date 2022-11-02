# Notes

<span style="font-size: 25px;">[IdentityManger Repo](https://github.com/OneIdentity/IdentityManager.Imx)</span>

### How to remove menu items

Go to `./imxweb/projects/ccc-itd-lib/menu/menu.service.ts`. For now there is an array with items. These are the IDs of
the menu items. To find out the ID of a menu it to `console.log(menuItems)`.

#### Planned feature

- [ ] Remove menu items through config.

### How to add new menu category

Go to ``./imxweb/projects/ccc-itd-lib/src/lib`` folder. Generate a new module (`ng g module nameOftheModule`) and call
the ``setupMenu()`` method in the constructor.

  ``` javascript
export class MyNewMenu {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ custom item loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP') {
        // The subitems of the main menu
        items.push({
          id: 'CCC_MySubItems',
          route: 'myRouteOfTheSubItems',
          title: '#LDS#MyNewSubItemName',
          sorting: '40-10',
        });
        // If you want to add more subitems add new object with items.push
      }

      if (items.length === 0) {
        return null;
      }
      // The main menu
      return {
        id: 'ROOT_MyNewMenu',
        title: '#LDS#MyNewMenu',
        sorting: '40',
        items,
      };
    });
  }
}
  ```

This is how a routes could look like inside the module file:

``` javascript
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: 'myRouteOfTheSubItems', component: myComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NewMenuComponent],
})
```

Now go to `./imxweb/projects/ccc-itd-lib/src/projects.ts` file and add your module to the exports.

``` javascript
export { MyNewMenu } from './path/to/the/module';
```

Once done, go to `./imxweb/projects/ccc-app-portal/src/app/app.module.ts` file, import your module from `ccc-itd-lib`
and also
add it in the `@NgModule` imports array.

**IMPORTANT**
In order to see the changes you have to rebuild everything again. Since we only changed code in `ccc-itd-lib`, we only
need to
rebuild `ccc-itd-lib`. Like so: `npm run build ccc-itd-lib`. If everything works you should see a new menu item.

---

### How to create ccc-app-portal

Go to the folder `./imxweb/projects`, execute the following command: `ng g application ccc-app-portal`. It will create a
new application and write necessary settings in `angular.json`.

Delete all the files from `ccc-app-portal` folder and copy all files from `qer-app-portal`  into  
`ccc-app-portal`. Now you have to adjust all the settings in `angular.json` for the `ccc-app-portal`.

```json
    "ccc-app-portal": {
"projectType": "application",
"schematics": {
"@schematics/angular:component": {
"style": "scss"
},
"@schematics/angular:application": {
"strict": true
}
},
"root": "projects/ccc-app-portal",
"sourceRoot": "projects/ccc-app-portal/src",
"prefix": "app",
"architect": {
"build": {
"builder": "@angular-devkit/build-angular:browser",
"options": {
"outputPath": "dist/ccc-app-portal",
"index": "projects/ccc-app-portal/src/index.html",
"main": "projects/ccc-app-portal/src/main.ts",
"polyfills": "projects/ccc-app-portal/src/polyfills.ts",
"tsConfig": "projects/ccc-app-portal/tsconfig.app.json",
"inlineStyleLanguage": "scss",
"assets": [
"projects/ccc-app-portal/src/favicon.ico",
"projects/ccc-app-portal/src/assets",
"projects/ccc-app-portal/src/appconfig.json",
{
"glob": "**/*",
"input": "./html",
"output": "./html"
},
{
"glob": "**/*",
"input": "./shared/assets/",
"output": "./assets"
},
{
"glob": "**/*",
"input": "./node_modules/@elemental-ui/core/assets",
"output": "./assets"
},
{
"glob": "**/*",
"input": "./node_modules/systemjs-plugin-babel/",
"output": "./systemjs-plugin-babel"
}
],
"styles": [
"projects/ccc-app-portal/src/styles.scss",
"projects/qer-app-portal/src/styles.scss",
"projects/qbm/src/lib/styles/imx-page-title.scss",
"projects/qbm/src/lib/styles/data-explorer-common.scss",
"projects/qbm/src/lib/styles/data-explorer-details-common.scss",
"shared/assets/styles.scss",
"shared/assets/variables.scss"
],
"stylePreprocessorOptions": {
"includePaths": [
"./shared/assets",
"./node_modules",
"./node_modules/@elemental-ui/cadence-icon",
"./node_modules/@elemental-ui/core"
]
},
"scripts": [
"node_modules/systemjs/dist/system.src.js",
"node_modules/systemjs-plugin-babel/plugin-babel.js",
"node_modules/systemjs-plugin-babel/systemjs-babel-browser.js"
]
},
"configurations": {
"production": {
"budgets": [
{
"type": "initial",
"maximumWarning": "500kb",
"maximumError": "1mb"
},
{
"type": "anyComponentStyle",
"maximumWarning": "2kb",
"maximumError": "4kb"
}
],
"fileReplacements": [
{
"replace": "projects/ccc-app-portal/src/environments/environment.ts",
"with": "projects/ccc-app-portal/src/environments/environment.prod.ts"
}
],
"outputHashing": "all"
},
"development": {
"buildOptimizer": false,
"optimization": false,
"vendorChunk": true,
"extractLicenses": false,
"sourceMap": true,
"namedChunks": true
}
},
"defaultConfiguration": "production"
},
"serve": {
"builder": "@angular-devkit/build-angular:dev-server",
"configurations": {
"production": {
"browserTarget": "ccc-app-portal:build:production"
},
"development": {
"browserTarget": "ccc-app-portal:build:development"
}
},
"defaultConfiguration": "development"
},
"extract-i18n": {
"builder": "@angular-devkit/build-angular:extract-i18n",
"options": {
"browserTarget": "ccc-app-portal:build"
}
},
"test": {
"builder": "@angular-devkit/build-angular:karma",
"options": {
"main": "projects/ccc-app-portal/src/test.ts",
"polyfills": "projects/ccc-app-portal/src/polyfills.ts",
"tsConfig": "projects/ccc-app-portal/tsconfig.spec.json",
"karmaConfig": "projects/ccc-app-portal/karma.conf.js",
"inlineStyleLanguage": "scss",
"assets": ["projects/ccc-app-portal/src/favicon.ico", "projects/ccc-app-portal/src/assets"],
"styles": ["projects/ccc-app-portal/src/styles.scss"],
"scripts": []
}
}
}
}
```

**IMPORTANT** Somehow when changing the app name in `./imxweb/projects/ccc-app-portal/src/environments.ts`
and `./imxweb/projects/ccc-app-portal/src/environments.prod.ts` to `ccc-app-portal` causes an error and the website
won't load. No fix found yet.

---

### Change Angular Material theme

Copy the `./imxweb/shared/assets/variables.scss` file to `./imxweb/projects/ccc-app-portal/src/`. Here you can create
your own theme independently. Example:

``` scss
@use "@angular/material" as mat;
@include mat-core();
// https://material.io/archive/guidelines/style/color.html#color-color-palette
$my-app-primary: mat.define-palette(mat.$indigo-palette);
$my-app-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
$my-app-warn: mat.define-palette(mat.$red-palette);

$my-app-theme: mat.define-light-theme(
    (
        color: (
            primary: $my-app-primary,
            accent: $my-app-accent,
            warn: $my-app-warn,
        ),
    )
);

@include mat.all-component-themes($my-app-theme);
```

Not every color will be changed. No fix found yet.

---

### Misc

Apparently changing the variable `$iris-blue` in `./node_modules/@elemental-ui/core/src/styles/_palette.scss` has
effects on some pages. For example the **login page**. You have to rebuild `qbm` to see the changes.

Show products in from service categories, the products are inside `category-tree.component.ts` inside the `treeDatabase`
property. Inside the `rootnodes` key.

The event to toggle table view or card view is
inside `./projects/qer/src/lib/service-items/serviceitem-list/serviceitem-list.component.html` with
the `<imx-data-table></imx-data-table>` or `<imx-data-tiles></imx-data-tiles>` tag.
