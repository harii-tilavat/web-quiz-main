import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from 'src/app/_services';
// import { SidebarMenuList } from 'src/app/_model';
// import { SidebarService } from 'src/app/_services';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isMenuOpen: boolean[] = [];
  public isSubMenuOpen: boolean[] = [];
  public selectedItemIndex!: number;
  // public menuList:SidebarMenuList[]=[];
  public menuList:any[]=[];
  constructor(private route:ActivatedRoute, private sidebarService:SidebarService) { }
  ngOnInit(): void {
    this.menuList=this.sidebarService.getSidebarData();
  }
  onMenuToggle(index: number): void {
    this.isMenuOpen[index] = !this.isMenuOpen[index];
    if(this.isMenuOpen[index]){
      this.isMenuOpen.fill(false);
      this.isMenuOpen[index]=true;
    }
  }
  onSubMenuToggle(index: number): void {
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
    if(this.isSubMenuOpen[index]){
      this.isSubMenuOpen.fill(false);
      this.isSubMenuOpen[index]=true;
    }
  }
}
