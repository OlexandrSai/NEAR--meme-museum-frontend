import {Component} from '@angular/core';
import {MemeService} from "../../services/meme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public popupShow = false;
  public contractId = '';

  constructor(public memeService: MemeService) {
  }

  async setContract() {
    await this.memeService.updateContract(this.contractId);
  }
}
