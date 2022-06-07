import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemeService } from "../../services/meme.service";

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent {
  @Input() meme: any;
  @Input() open: any;
  @Input() formatDate: any;
  @Output() openChange = new EventEmitter<boolean>()
  public comment = '';

  constructor(public memeService: MemeService) {
  }

  closeModal() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  handleSubmit() {
    return this.memeService.addComment({ memeId: this.meme.id, text: this.comment });
  }
}
