import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TeamsModel } from 'src/app/_model';
import { BenefitsService } from 'src/app/_services';

@Component({
  selector: 'app-add-benefit',
  templateUrl: './add-benefit.component.html',
  styleUrls: ['./add-benefit.component.scss']
})
export class AddBenefitComponent {
  public form!:FormGroup;
  public submitted!: boolean;
  public editMode!: boolean;
  public editedItem!: TeamsModel;
  public editedItemId!: number;
  public subscription!: Subscription;
  constructor(private benefitsService:BenefitsService, private snakeBar:MatSnackBar) { }
  ngOnInit(): void {
    this.initForm();
    this.subscription = this.benefitsService.startEdit.subscribe({
      next: (id) => {
        if (id) {
          this.editMode = true;
          this.editedItem = this.benefitsService.getItem(id);
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
        this.benefitsService.updateItem(this.editedItemId, this.form.value);
        this.message('Item Updated Successfully!');
      } else {
        this.benefitsService.addItem(this.form.value);
        this.message('Item Added Successfully!');
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
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      desc: new FormControl(desc, [Validators.required]),
      image: new FormControl(image, [Validators.required]),
    })
  }
  public message(message: string) {
    this.snakeBar.open(message, 'Ok', { duration: 3000 });
  }
  onClose(): void {
    this.form.reset();
    this.submitted=false;
    this.editMode=false;
    this.benefitsService.startEdit.next(null);
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
