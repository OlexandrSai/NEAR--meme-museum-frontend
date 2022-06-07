#  🎓 NCD.L2.sample--meme-museum dApp
This repository contains a complete frontend applications (Vue.js, React) to work with
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--meme-museum" target="_blank">NCD.L1.sample--meme-museum smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
2. Angular (angular branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage
![image](https://user-images.githubusercontent.com/38455192/139825787-9089159c-086e-4f28-b3be-cbf95cc8fa84.png)
<a href="https://www.loom.com/share/3b558ef14d4945338d4220964f075220" target="_blank">UI walkthrough</a>

You can use this app with contract ids which were deployed by the creators of this repo or you can use it with your own deployed contract ids.
If you are using not yours contract ids some functions of the museum/meme contracts will not work because they are set to work only if owner called this  functions.

<a href="https://github.com/Learn-NEAR/NCD.L1.sample--meme-museum/blob/8c5d025d363f89fdcc7335d58d61a8e3307cd95a/src/museum/assembly/index.ts#L137" target="_blank">Example of such  function:</a>
```
export function add_contributor(account: AccountId): void {
  assert_contract_is_initialized()
  assert_signed_by_owner()

  Museum.add_contributor(account)
  ....
  
  }

```

To get possibility to work with the full functionality of the smart contract, you need to paste your contractId inside UI of VueJs deployed dapp or React deployed dapp.
Before pasting id make sure that you deployed correct smart contract, in other case this code may  not work as expected.

## Project setup
To deploy sample--meme-museum to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--meme-museum/" target="_blank">this repo (smart contract deployment instructions are inside):</a>

After you successfully deployed museum and meme contracts and you have contract ids, you can input them on a deployed <a href="sample-thanks.onrender.com/" target="_blank">website </a> or you can clone the repo and put contract ids inside ``` src/environments/environment.ts ``` file :

```
CONTRACT_ID = "put your museum contract id here"
...
```

After you fill up environment.ts file, you need to:

1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="" >Code walk-through video | TBA |</a>

### -- Contract's --

To work with museum, and meme contracts we have separate functions inside ``` src/app/services/near.service.ts```.
```
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
      this.getMemeContractId(meme),
      {
        viewMethods: ['get_meme', 'get_recent_comments'],
        changeMethods: ['add_comment', 'donate', 'vote']
      }
    );
  }
```

### -- Near Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

Class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
this.near = new Near({
  networkId: environment.NETWORK_ID,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: environment.NODE_URL,
  walletUrl: environment.WALLET_URL,
  headers: {}
});
``` 
and creating wallet connection
```
// create wallet connection
this.wallet = new WalletConnection(this.near, "meme-museum");
```


### -- Meme Service --

``` src/app/services/meme.service.ts ``` represent the main functional class of dApp

We use that container to encapsulate all data and function's related to Museum and Meme's:
```
  public err: any;
  public memes: any[] = [];
  ...
  
  getMeme(meme: any) {...};
  addMeme() {...};
  vote() {...};
  updateContract() {...};
```

With dependency injection we are able to share everything with components. ``` src/app/components/memes/memes.component.ts ``` as an example :
```
  constructor(public memeService: MemeService) {
  }

  ngOnInit(): void {
    this.memeService.loadMemes();
  }
```

Also, we are using data from  ```src/app/services/meme.service.ts``` in ``` src/app/components/memes/memes.component.html ```
```
<!-- Meme card -->
<div
  *ngFor="let meme of memeService.memes"
  class="my-16">
  
....
```

## Examples
``` src/app/services/meme.service.ts ```
### - Function | No Parameters -
```
// get all memes
async loadMemes() {...}
```

### - Function | With Parameters -
```
// add comment
async addComment({ memeId, text }: { memeId: any, text: any }) {
  const memeContract: any = await this.nearService.getMemeContract(memeId);

  await memeContract.add_comment(
    { text }
  );
};
```
