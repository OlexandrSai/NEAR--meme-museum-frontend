import { Component, OnInit } from '@angular/core';
import {NearService} from "../../services/near.service";
import {MemeService} from "../../services/meme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public popupShow = false;
  public contractId = '';
  constructor(public memeService: MemeService) { }

  ngOnInit(): void {
  }

  async setContract() {
    await this.memeService.updateContract(this.contractId);
  }
}
