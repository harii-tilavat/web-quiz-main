import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean = true;
  public isNavbarOpen: boolean = true;
  public faCart=faCartArrowDown;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  onToggle(): void {
    this.isOpen = !this.isOpen;
    this.sidebarToggle.emit(this.isOpen);
  }
  onNavToggle(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
