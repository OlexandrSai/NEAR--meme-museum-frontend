import {Injectable} from '@angular/core';
import {NearService} from "./near.service";
import {utils} from "near-api-js";
import * as BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  public err: any;
  public memes: any[] = [];

  constructor(public nearService: NearService) {
  }

  // --------------------------------------------------------------------------
  // functions to call contract Public VIEW methods
  // --------------------------------------------------------------------------

  // function  to get memes
  getMemes() {
    return this.nearService.wallet.account().viewFunction(this.nearService.CONTRACT_ID, "get_meme_list", {});
  };

  async updateMemes() {
    this.err = null;
    try {
      let memesIds = await this.getMemes();

      this.memes = await (
        await Promise.all(
          memesIds.map(async (id: any) => {
            const info = await this.getMeme(id);
            const comments = await this.getMemeComments(id);

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
      this.err = e;
      console.log(e);
    }
  }

  // function  to get  info about meme
  getMeme(meme: any) {
    const memeContractId = meme + "." + this.nearService.CONTRACT_ID;
    return this.nearService.wallet.account().viewFunction(memeContractId, "get_meme", {});
  };

  // function to get  meme`s  comment
  getMemeComments(meme: any) {
    const memeContractId = meme + "." + this.nearService.CONTRACT_ID;
    return this.nearService.wallet.account().viewFunction(memeContractId, "get_recent_comments", {});
  };

  // --------------------------------------------------------------------------
  // functions to call contract Public CHANGE methods
  // --------------------------------------------------------------------------

  // function  to add  meme
  addMeme({meme, title, data, category}: {meme: any, title: any, data: any, category: any}) {
    category = parseInt(category)
    const attachedDeposit: any = utils.format.parseNearAmount("3") ?? undefined;
    const attachedDepositBN = new BN(attachedDeposit) ;
    return this.nearService.wallet.account().functionCall({
      contractId: this.nearService.CONTRACT_ID,
      methodName: "add_meme",
      gas: this.nearService.gas,
      args: {meme, title, data, category},
      attachedDeposit: attachedDepositBN,
    });
  };

  // function  to  add comment
  addComment ({memeId, text}: {memeId: any, text: any}) {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;
    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "add_comment",
      args: {text},
    });
  };

  //function to donate
  donate({memeId, amount}: { memeId: any, amount: any }) {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;
    const attachedDeposit: any = utils.format.parseNearAmount(amount) ?? undefined;
    const attachedDepositBN = new BN(attachedDeposit) ;
    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "donate",
      attachedDeposit: attachedDepositBN,
      args: {}
    });
  };

  //function to vote for the meme
  vote ({memeId, value}: {memeId: any, value: any}) {
    const memeContractId = `${memeId}.${this.nearService.CONTRACT_ID}`;

    return this.nearService.wallet.account().functionCall({
      contractId: memeContractId,
      methodName: "vote",
      args: {value},
    });
  };

  async updateContract(contractId: any) {
    this.nearService.setContract(contractId);
    await this.updateMemes();
  }
}
