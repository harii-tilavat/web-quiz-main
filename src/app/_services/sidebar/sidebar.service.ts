import { Injectable } from '@angular/core';
import { SidebarMenuList } from 'src/app/_model';
import { faHome, faImage, faRightFromBracket } from 'node_modules/@fortawesome/free-solid-svg-icons';
@Injectable({ providedIn: 'root' })
export class SidebarService {
  public menuList: SidebarMenuList[] = [
    {
      id: 1,
      icon: faHome,
      label: 'Dashboard',
      routing: ['dashboard'],
    },
    {
      id: 2,
      icon: faImage,
      label: 'Product Detail',
      routing: ['product-list'],
    },
    {
      id: 3,
      icon: faRightFromBracket,
      label: 'Logout',
      routing: ['admin','login'],
    },
  ]
  constructor() { }
  getSidebarData(): SidebarMenuList[] {
    return this.menuList.slice();
  }
}
