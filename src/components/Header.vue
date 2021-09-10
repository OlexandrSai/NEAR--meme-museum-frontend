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
                <div class="col-span-3 md:col-span-2 ">
                    <a href="#" class="block bg-indigo-500 hover:bg-indigo-600 text-center text-white font-medium rounded-md py-2">Login with NEAR</a>
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
export default {

}
</script>

<style>

</style>