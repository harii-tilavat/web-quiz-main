import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { BenefitsService, MeetTheTeamService } from 'src/app/_services';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.scss']
})
export class MeetTheTeamComponent implements OnInit {
  public itemList: TeamsModel[] = [];
  public isLoading!: boolean;
  public errorMessage!: string;
  public faEdit = faEdit;
  public faDelete = faDeleteLeft;
  constructor(private teamsService: MeetTheTeamService) { }
  ngOnInit(): void {
    this.itemList = this.teamsService.getItems();
    this.teamsService.itemChange.subscribe({
      next: (items: TeamsModel[]) => {
        this.itemList = items;
      }
    })
  }
  onAddItem(): void {
  }
  onEditItem(id: number): void {
    this.teamsService.startEdit.next(id);
  }
  onDeleteItem(id: number): void {
    if (confirm('Are you sure to delete this team?')) {
      this.teamsService.deleteItem(id);
      return;
    }
  }
}
