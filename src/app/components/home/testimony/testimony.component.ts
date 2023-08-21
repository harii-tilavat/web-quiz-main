import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TeamsModel } from 'src/app/_model';
import { TestimonyService } from 'src/app/_services';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  public teamsList: TeamsModel[] = [];
  public isLoading!: boolean;
  public errorMessage!: string;
  public faEdit = faEdit;
  public faDelete = faDeleteLeft;
  constructor(private testimonyService: TestimonyService) { }
  ngOnInit(): void {
    this.teamsList = this.testimonyService.getTestimonyList();
    this.testimonyService.teamChange.subscribe({
      next: (teams: TeamsModel[]) => {
        this.teamsList = teams;
      }
    })
  }
  onAddItem(): void {
    // this.testimonyService.startEdit.next(null);
  }
  onEditItem(id: number): void {
    this.testimonyService.startEdit.next(id);
  }
  onDeleteItem(id: number): void {
    if (confirm('Are you sure to delete this team?')) {
      this.testimonyService.deleteTestimony(id);
      return;
    }
  }
}
