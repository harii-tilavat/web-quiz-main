import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TeamsModel } from 'src/app/_model';
import { MeetTheTeamService } from 'src/app/_services';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.scss']
})
export class AddTeamMemberComponent {
  public form!: FormGroup;
  public submitted!: boolean;
  public editMode!: boolean;
  public editedItem!: TeamsModel;
  public editedItemId!: number;
  public subscription!: Subscription;
  constructor(private teamsService: MeetTheTeamService, private snakeBar: MatSnackBar) { }
  ngOnInit(): void {
    this.initForm();
    this.subscription = this.teamsService.startEdit.subscribe({
      next: (id) => {
        if (id) {
          this.editMode = true;
          this.editedItem = this.teamsService.getItem(id);
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
    if (this.form.valid) {
      if (this.editMode) {
        this.teamsService.updateItem(this.editedItemId, this.form.value);
        this.message('Team Member Updated Successfully!');
      } else {
        this.teamsService.addItem(this.form.value);
        this.message('Team Memeber Added Successfully!');
      }
      this.onClose();
    }
    return;
  }
  initForm(): void {
    let title!: string;
    let subTitle!: string;
    let desc!: string;
    let image!: string;
    if (this.editMode) {
      title = this.editedItem.title;
      subTitle = this.editedItem.subTitle;
      desc = this.editedItem.desc;
      image = this.editedItem.image;
    }
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      subTitle: new FormControl(subTitle, [Validators.required]),
      desc: new FormControl(desc, [Validators.required]),
      image: new FormControl(image, [Validators.required]),
    })
  }
  public message(message: string) {
    this.snakeBar.open(message, 'Ok', { duration: 3000 });
  }
  onClose(): void {
    this.form.reset();
    this.submitted = false;
    this.editMode = false;
    this.teamsService.startEdit.next(null);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
