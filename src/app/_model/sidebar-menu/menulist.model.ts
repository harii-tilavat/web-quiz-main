export class SidebarMenuList {
  id!: number | null;
  label!: string;
  routing!: string | null | Array<string | number>;
  icon?: any;
  subMenu?: SidebarMenuList[];
}
