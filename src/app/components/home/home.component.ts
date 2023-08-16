import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isOpen: boolean = true;
  constructor() { }
  ngOnInit(): void {
  }
  title = 'e-commerce-angular';

  onSidebarToggle(isOpen: boolean): void {
    console.log("Emit: ", isOpen);
    this.isOpen = isOpen;
  }
}
