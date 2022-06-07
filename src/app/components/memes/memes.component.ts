import { Component, OnInit } from '@angular/core';
import { MemeService } from "../../services/meme.service";
import { format, fromUnixTime } from "date-fns";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  public modalOpen = false;
  public currentMeme = '';

  constructor(public memeService: MemeService) {
  }

  ngOnInit(): void {
    this.memeService.loadMemes();
  }

  openModal(meme: any) {
    this.currentMeme = meme;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  formatDate(data: any) {
    let date = data.info ? data.info.created_at : data.created_at;
    return format(new Date(fromUnixTime(parseInt(date.substring(0, 10)))), "MMMM do yyyy")
  }
}
