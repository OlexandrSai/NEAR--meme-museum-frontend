import { Injectable } from '@angular/core';
import { keyStores, Near, WalletConnection } from "near-api-js";
import {environment} from "../../environments/environment";

// @ts-ignore
import BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.NG_APP_CONTRACT_ID;
  public gas = new BN(environment.NG_APP_gas);
  public near = new Near({
    networkId: environment.NG_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NG_APP_nodeUrl,
    walletUrl: environment.NG_APP_walletUrl,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "meme-museum");
  constructor() {
    this.accountId = this.wallet.getAccountId();
  }

  handleSignIn = async () => {
    await this.wallet.requestSignIn({
      contractId: environment.NG_APP_CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut = () => {
    this.wallet.signOut()
    this.accountId = ''
  };
}
