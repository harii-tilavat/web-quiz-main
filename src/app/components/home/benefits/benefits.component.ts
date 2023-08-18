import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { BenefitsService } from 'src/app/_services';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  public itemList: TeamsModel[] = [];
  public isLoading!: boolean;
  public errorMessage!: string;
  public faEdit = faEdit;
  public faDelete = faDeleteLeft;
  constructor(private benefitService: BenefitsService) { }
  ngOnInit(): void {
    this.itemList = this.benefitService.getItems();
    this.benefitService.itemChange.subscribe({
      next: (items: TeamsModel[]) => {
        this.itemList = items;
      }
    })
  }
  onAddItem(): void {
  }
  onEditItem(id: number): void {
    this.benefitService.startEdit.next(id);
  }
  onDeleteItem(id: number): void {
    if (confirm('Are you sure to delete this team?')) {
      this.benefitService.deleteItem(id);
      return;
    }
  }
}
