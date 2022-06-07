import { Injectable } from '@angular/core';
import { NearService } from "./near.service";
import { utils } from "near-api-js";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  public err: any;
  public memes: any[] = [];

  constructor(public nearService: NearService) {
  }

  // get all memes
  async loadMemes() {
    this.err = null;
    try {
      let memesIds = await this.nearService.getMemes();

      this.memes = (
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
    } catch (e: any) {
      this.err = e;
      console.log(e);
    }
  }

  // get separate meme
  async getMeme(meme: any) {
    const memeContract: any = this.nearService.getMemeContract(meme);

    return memeContract.get_meme();
  };

  // get separate meme comment`s
  async getMemeComments(meme: any) {
    const memeContract: any = this.nearService.getMemeContract(meme);

    return (await memeContract.get_recent_comments()).reverse();
  };

  // --------------------------------------------------------------------------
  // functions to call contract Public CHANGE methods
  // --------------------------------------------------------------------------

  // add meme
  async addMeme(payload: any) {
    await this.nearService.addMeme(payload);
  }

  // add comment
  async addComment({ memeId, text }: { memeId: any, text: any }) {
    const memeContract: any = await this.nearService.getMemeContract(memeId);

    await memeContract.add_comment(
      { text }
    );
  };

  // donate
  async donate(memeId: any) {
    const memeContract: any = await this.nearService.getMemeContract(memeId)

    await memeContract.donate(
      {},
      environment.GAS,
      utils.format.parseNearAmount(environment.DONAT_FEE)
    );
  };

  // vote for the meme
  async vote({ memeId, value }: { memeId: any, value: any }) {
    const memeContract: any = await this.nearService.getMemeContract(memeId);
    await memeContract.vote({ value });
  };

  async updateContract(contractId: any) {
    try {
      this.nearService.setContract(contractId);
      await this.loadMemes();
    } catch (e) {
      this.err = e;
      console.log(e)
    }
  }

  getContract() {
    return this.nearService.CONTRACT_ID;
  }
}
