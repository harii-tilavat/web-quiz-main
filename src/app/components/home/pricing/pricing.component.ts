import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { BenefitsService } from 'src/app/_services';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
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
