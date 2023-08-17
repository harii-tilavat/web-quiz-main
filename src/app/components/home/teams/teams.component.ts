import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { TeamsService } from 'src/app/_services';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teamsList: TeamsModel[] = [];
  public isLoading!: boolean;
  public errorMessage!: string;
  public faEdit = faEdit;
  public faDelete = faDeleteLeft;
  constructor(private teamsService: TeamsService) { }
  ngOnInit(): void {
    this.teamsList = this.teamsService.getTeams();
    this.teamsService.teamChange.subscribe({
      next: (teams: TeamsModel[]) => {
        this.teamsList = teams;
      }
    })
  }
  onAddItem(): void {
    // this.teamsService.startEdit.next(null);
  }
  onEditItem(id: number): void {
    this.teamsService.startEdit.next(id);
  }
  onDeleteItem(id: number): void {
    if (confirm('Are you sure to delete this team?')) {
      this.teamsService.deleteTeam(id);
      return;
    }
  }
}
