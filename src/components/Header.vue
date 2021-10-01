<template>
  <header class=" bg-indigo-200">
        <div class="hidden md:block container mx-auto">
            <nav class="grid grid-cols-12 space-x-6 py-2 px-6">
                <div class="col-span-3 md:col-span-3 flex items-center">
                    <a href="#" class="font-medium text-lg text-gray-900">Meme Museum</a>
                </div>
                <div class="col-span-6 md:col-span-7 flex items-center">
                    <input type="text" placeholder="Search" class="py-2 pl-6 w-full md:w-1/2 rounded-md outline-none bg-gray-100">
                </div>
                <div v-if="accountId" class="col-span-3 md:col-span-2">
                   <a href="#" class="block flex bg-indigo-500 hover:bg-indigo-600 text-center text-white font-medium rounded-md py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{accountId}}
                </a>
                <button  @click="signOut" class="block flex bg-indigo-500 hover:bg-indigo-600 text-center text-white font-medium rounded-md py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 text-white-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    Logout
                </button>
                </div>
                <div v-else class="col-span-3 md:col-span-2">
                    <button @click="signIn" class="block bg-indigo-500 hover:bg-indigo-600 text-center text-white font-medium rounded-md py-2">Login with NEAR</button>
                </div>
            </nav>
        </div>
        <div class="block md:hidden bg-indigo-200 container mx-auto px-6 py-2">
            <div class="flex items-center justify-between">
                <a href="#" class="text-lg text-gray-900 font-medium">Meme Museum</a>
                <a href="#" class="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import { wallet, CONTRACT_ID } from "@/services/near";


export default {
    setup() {
        const accountId = wallet.getAccountId();

        return {
            accountId,
            signIn: () => wallet.requestSignIn(CONTRACT_ID),
            signOut: () => {
                wallet.signOut();
                window.location.reload();
            }
        }
    }
}
</script>