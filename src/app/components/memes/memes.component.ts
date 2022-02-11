import { Component, OnInit } from '@angular/core';
import {MemeService} from "../../services/meme.service";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  public modalOpen = false;
  public currentMeme = '';

  constructor(public memeService: MemeService) { }

  ngOnInit(): void {
    this.loadMemes();
  }

  async loadMemes() {
    await this.memeService.updateMemes();
  }

  openModal(meme:any) {
    this.currentMeme = meme;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
