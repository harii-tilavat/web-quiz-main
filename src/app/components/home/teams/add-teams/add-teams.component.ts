import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TeamsModel } from 'src/app/_model';
import { TeamsService } from 'src/app/_services';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.scss']
})
export class AddTeamsComponent implements OnInit, OnDestroy {
  public teamsForm!: FormGroup;
  public submitted!: boolean;
  public editMode!: boolean;
  public editedItem!: TeamsModel;
  public editedItemId!: number;
  public teamSub!: Subscription;
  constructor(private teamsService: TeamsService, private snakeBar: MatSnackBar) { }
  ngOnInit(): void {
    this.initForm();
    this.teamSub = this.teamsService.startEdit.subscribe({
      next: (id) => {
        if (id) {
          this.editMode = true;
          this.editedItem = this.teamsService.getTeam(id);
          this.editedItemId = id;
          this.initForm();
          return;
        }
        this.editMode = false;
      }
    })
  }
  onSave(): void {
    this.submitted = true;
    if (this.teamsForm.valid) {
      if (this.editMode) {
        this.teamsService.updateTeam(this.editedItemId, this.teamsForm.value);
        this.message('Team Updated Successfully!');
      } else {
        this.teamsService.addTeam(this.teamsForm.value);
        this.message('Team Added Successfully!');
      }
      this.onClose();
    }
    return;
  }
  initForm(): void {
    let title!: string;
    let desc!: string;
    let image!: string;
    if (this.editMode) {
      title = this.editedItem.title;
      desc = this.editedItem.desc;
      image = this.editedItem.image;
    }
    this.teamsForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      desc: new FormControl(desc, [Validators.required]),
      image: new FormControl(image, [Validators.required]),
    })
  }
  public message(message: string) {
    this.snakeBar.open(message, 'Ok', { duration: 3000 });
  }
  onClose(): void {
    this.teamsForm.reset();
    this.submitted=false;
    this.editMode=false;
    this.teamsService.startEdit.next(null);
  }
  ngOnDestroy(): void {
    if(this.teamSub){
      this.teamSub.unsubscribe();
    }
  }
}
