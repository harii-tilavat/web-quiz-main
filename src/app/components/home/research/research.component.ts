import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { ResearchService } from 'src/app/_services';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  public researchList: TeamsModel[] = [];
  public isLoading!: boolean;
  public errorMessage!: string;
  public faEdit = faEdit;
  public faDelete = faDeleteLeft;
  constructor(private researchService: ResearchService) { }
  ngOnInit(): void {
    this.researchList = this.researchService.getItems();
    this.researchService.itemChange.subscribe({
      next: (items: TeamsModel[]) => {
        this.researchList = items;
      }
    })
  }
  onAddItem(): void {
  }
  onEditItem(id: number): void {
    this.researchService.startEdit.next(id);
  }
  onDeleteItem(id: number): void {
    if (confirm('Are you sure to delete this team?')) {
      this.researchService.deleteItem(id);
      return;
    }
  }
}
