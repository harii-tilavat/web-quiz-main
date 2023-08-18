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
      id: 2,
      icon: faImage,
      label: 'Product Detail',
      routing: ['product-list'],
    },
    {
      id: 3,
      icon: faUser,
      label: 'Teams of Shapes',
      routing: ['teams-of-shapes'],
    },
    {
      id: 4,
      icon: faNoteSticky,
      label: 'Testimonial',
      routing: ['testimonial'],
    },
    {
      id: 4,
      icon: faRefresh,
      label: 'UX Researchers',
      routing: ['ux-research'],
    },
    {
      id: 5,
      icon: faThumbsUp,
      label: 'Benefits',
      routing: ['benefits'],
    },
    {
      id: 6,
      icon: faUsers,
      label: 'Meet the Team',
      routing: ['meet-the-team'],
    },
    {
      id: 7,
      icon: faMoneyBill,
      label: 'Pricing',
      routing: ['pricing'],
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
