import { Injectable } from '@angular/core';
import { SidebarMenuList } from 'src/app/_model';
import { faHome, faImage, faRightFromBracket, faUsers, faNoteSticky, faRefresh, faThumbsUp, faUser, faMoneyBill } from 'node_modules/@fortawesome/free-solid-svg-icons';
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
      id: 8,
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
