import {Injectable} from '@angular/core';
import {NearService} from "./near.service";
import {utils} from "near-api-js";

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(public nearService: NearService) {
  }

  // --------------------------------------------------------------------------
  // functions to call contract Public VIEW methods
  // --------------------------------------------------------------------------

  // function  to get memes
  getMemes = () => {
    return this.nearService.wallet.account().viewFunction(this.nearService.CONTRACT_ID, "get_meme_list", {});
  };

  // function  to get  info about meme
  getMeme = (meme: any) => {
    const memeContractId = meme + "." + this.nearService.CONTRACT_ID;
    return this.nearService.wallet.account().viewFunction(memeContractId, "get_meme", {});
  };

  // function to get  meme`s  comment
  getMemeComments = (meme: any) => {
    const memeContractId = meme + "." + this.nearService.CONTRACT_ID;
    return this.nearService.wallet.account().viewFunction(memeContractId, "get_recent_comments", {});
  };

  // --------------------------------------------------------------------------
  // functions to call contract Public CHANGE methods
  // --------------------------------------------------------------------------

  // function  to add  meme
  addMeme = ({meme, title, data, category}: {meme: any, title: any, data: any, category: any}) => {
    category = parseInt(category)
    return this.nearService.wallet.account().functionCall({
      contractId: this.nearService.CONTRACT_ID,
      methodName: "add_meme",
      gas: this.nearService.gas,
      args: {meme, title, data, category},
      attachedDeposit: utils.format.parseNearAmount("3"),
    });
  };

  // function  to  add comment
  addComment = ({memeId, text}: {memeId: any, text: any}) => {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;
    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "add_comment",
      args: {text},
    });
  };

  //function to donate
  donate = ({memeId, amount}: { memeId: any, amount: any }) => {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;
    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "donate",
      attachedDeposit: utils.format.parseNearAmount(amount),
      args: {}
    });
  };

  //function to vote for the meme
  vote = ({memeId, value}: {memeId: any, value: any}) => {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;

    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "vote",
      args: {value},
    });
  };
}
