import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent implements OnInit {
  @Input() meme: any;
  @Input() contractId: any;
  @Input() donate: any;
  @Input() vote: any;
  @Input() addComment: any;
  @Input() open: any;
  @Output() openChange = new EventEmitter<boolean>()
  public comment = '';
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  handleSubmit() {
    console.log('test')
    console.log(this.meme)
    console.log(this.comment)
    this.addComment({
      memeId: this.meme.id,
      text: this.comment
    })
  }
}
