import { Component, OnInit } from '@angular/core';
import {MemeService} from "../../services/meme.service";

@Component({
  selector: 'app-add-meme-form',
  templateUrl: './add-meme-form.component.html',
  styleUrls: ['./add-meme-form.component.css']
})
export class AddMemeFormComponent implements OnInit {
  public category = 0;
  public formFields = [
    {
      label: "Meme Name",
      id: "meme",
      value: ''
    },
    {
      label: "Title",
      id: "title",
      value: ''
    },
    {
      label: "9gag Link",
      id: "data",
      value: ''
    },
  ];
  constructor(public memeService: MemeService) { }

  ngOnInit(): void {
  }

  submit() {
    const values = this.formFields.map(e => e.value);
    const payload = {
      meme: values[0],
      title: values[1],
      data: values[2],
      category: this.category
    }

    this.memeService.addMeme(payload);
  }
}
