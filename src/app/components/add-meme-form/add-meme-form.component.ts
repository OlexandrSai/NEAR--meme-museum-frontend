import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meme-form',
  templateUrl: './add-meme-form.component.html',
  styleUrls: ['./add-meme-form.component.css']
})
export class AddMemeFormComponent implements OnInit {
  public formFields = [
    {
      label: "Meme Name",
      id: "meme",
    },
    {
      label: "Title",
      id: "title",
    },
    {
      label: "9gag Link",
      id: "data",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
