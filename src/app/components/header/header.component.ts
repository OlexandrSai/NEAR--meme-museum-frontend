import { Component, OnInit } from '@angular/core';
import {NearService} from "../../services/near.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public popupShow = false;
  constructor(public nearService: NearService) { }

  ngOnInit(): void {
  }

}
