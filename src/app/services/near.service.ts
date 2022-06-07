import { Injectable } from '@angular/core';
import { Contract, keyStores, Near, utils, WalletConnection } from "near-api-js";
import { environment } from "../../environments/environment";

// @ts-ignore
import BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public near: Near;
  public wallet: WalletConnection;
  public museumContract: any;
  public accountId = '';
  public CONTRACT_ID = environment.CONTRACT_ID;

  constructor() {
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });

    // create wallet connection
    this.wallet = new WalletConnection(this.near, "meme-museum");
    // get contracts
    this.museumContract = this.getMuseumContract();
    this.accountId = this.wallet.getAccountId();
  }

  getMuseumContract() {
    return new Contract(
      this.wallet.account(),
      this.CONTRACT_ID,
      {
        viewMethods: ['get_meme_list'],
        changeMethods: ['add_meme']
      }
    );
  }

  getMemeContract(meme: any) {
    return new Contract(
      this.wallet.account(),
      meme + "." + this.CONTRACT_ID,
      {
        viewMethods: ['get_meme', 'get_recent_comments'],
        changeMethods: ['add_comment', 'donate', 'vote']
      }
    );
  }

  // --------------------------------------------------------------------------
  // functions to call contract Public VIEW methods
  // --------------------------------------------------------------------------

  // function  to get memes
  async getMemes() {
    return await this.museumContract.get_meme_list();
  };

  // --------------------------------------------------------------------------
  // functions to call contract Public CHANGE methods
  // --------------------------------------------------------------------------

  // function  to add  meme
  async addMeme({ meme, title, data, category }: { meme: any, title: any, data: any, category: any }) {
    const attachedDeposit = utils.format.parseNearAmount(environment.ADD_FEE);

    return this.museumContract.add_meme(
      { meme, title, data, category },
      environment.GAS,
      attachedDeposit
    );
  };

  async handleSignIn() {
    await this.wallet.requestSignIn({
      contractId: environment.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    });
  };

  handleSignOut() {
    this.wallet.signOut()
    this.accountId = '';
  };

  setContract(contract: any) {
    this.CONTRACT_ID = contract;
  }

  restoreDefaultContract() {
    this.CONTRACT_ID = environment.CONTRACT_ID;
  }
}
