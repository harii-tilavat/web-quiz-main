import { Injectable } from '@angular/core';
import { SidebarMenuList } from 'src/app/_model';
import { faHome, faImage, faRightFromBracket, faUsers } from 'node_modules/@fortawesome/free-solid-svg-icons';
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
      icon: faUsers,
      label: 'Teams and Shapes',
      routing: ['teams-and-shapes'],
    },
    {
      id: 4,
      icon: faRightFromBracket,
      label: 'Logout',
      routing: null,
    },

  ]
  constructor() { }
  getSidebarData(): SidebarMenuList[] {
    return this.menuList.slice();
  }
}
