import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenuList } from 'src/app/_model';
import { AuthService, SidebarService } from 'src/app/_services';
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
  public menuList:SidebarMenuList[]=[];
  constructor(private router:Router, private sidebarService:SidebarService, private authService:AuthService) { }
  ngOnInit(): void {
    this.menuList=this.sidebarService.getSidebarData();
  }
  onRoute(label:string):void{
    if(label==='Logout'){
      if(confirm('Are you sure to Logout?')){
        this.authService.user.next(null);
        this.router.navigate(['/admin','login']);
        localStorage.removeItem('admin');
      }
    }
  }
}
