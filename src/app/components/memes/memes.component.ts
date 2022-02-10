import { Component, OnInit } from '@angular/core';
import {MemeService} from "../../services/meme.service";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  public memes: any[] = [];
  public modalOpen = false;
  public currentMeme = '';


  constructor(public memeService: MemeService) { }

  ngOnInit(): void {
    this.loadMemes();
  }

  openModal = (meme:any) => {
    console.log(meme);
    this.currentMeme = meme;
    this.modalOpen = true;
  }

  closeModal = () => {
    this.modalOpen = false;
  }

  loadMemes = async () => {
    try {
      let memesIds = await this.memeService.getMemes();

      this.memes = await (
        await Promise.all(
          memesIds.map(async (id: any) => {
            const info = await this.memeService.getMeme(id);
            const comments = await this.memeService.getMemeComments(id);

            return {
              id,
              info,
              comments,
              image: `https://img-9gag-fun.9cache.com/photo/${
                info.data.split("https://9gag.com/gag/")[1]
              }_460s.jpg`,
            };
          })
        )
      ).reverse();
    }catch (e: any) {
      this.memeService.err = e;
      console.log(e);
    }
  }
}
