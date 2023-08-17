import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TeamsModel } from 'src/app/_model';
import { TestimonyService } from 'src/app/_services';

@Component({
  selector: 'app-add-testimony',
  templateUrl: './add-testimony.component.html',
  styleUrls: ['./add-testimony.component.scss']
})
export class AddTestimonyComponent implements OnInit {
  public testimonyForm!:FormGroup;
  public submitted!: boolean;
  public editMode!: boolean;
  public editedItem!: TeamsModel;
  public editedItemId!: number;
  public subscription!: Subscription;
  constructor(private testimonyService:TestimonyService, private snakeBar:MatSnackBar) { }
  ngOnInit(): void {
    this.initForm();
    this.subscription = this.testimonyService.startEdit.subscribe({
      next: (id) => {
        if (id) {
          this.editMode = true;
          this.editedItem = this.testimonyService.getTestimony(id);
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
    if (this.testimonyForm.valid) {
      if (this.editMode) {
        this.testimonyService.updateTestimony(this.editedItemId, this.testimonyForm.value);
        this.message('Testimony Updated Successfully!');
      } else {
        this.testimonyService.addTestimony(this.testimonyForm.value);
        this.message('Testimony Added Successfully!');
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
      subTitle = this.editedItem.subTitle!;
      desc = this.editedItem.desc;
      image = this.editedItem.image;
    }
    this.testimonyForm = new FormGroup({
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
    this.testimonyForm.reset();
    this.submitted=false;
    this.editMode=false;
    this.testimonyService.startEdit.next(null);
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
