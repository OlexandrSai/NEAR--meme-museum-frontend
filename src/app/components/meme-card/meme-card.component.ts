import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent {
  @Input() meme: any;
  @Input() contractId: any;
  @Input() donate: any;
  @Input() vote: any;
  @Input() addComment: any;
  @Input() formatDate: any;
  @Input() open: any;
  @Output() openChange = new EventEmitter<boolean>()
  public comment = '';
  constructor() { }

  closeModal() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  handleSubmit() {
    this.addComment({
      memeId: this.meme.id,
      text: this.comment
    })
  }
}
