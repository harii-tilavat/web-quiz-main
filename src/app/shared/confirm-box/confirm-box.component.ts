import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {
  @Output() answerEvent = new EventEmitter<boolean>();
  @Input() heading!: string;
  @Input() message!: string;
  constructor() { }
  ngOnInit(): void {
  }
  onSave(): void {
    this.answerEvent.emit(true);
  }
  onClose(): void {
    this.answerEvent.emit(false);
  }
}
