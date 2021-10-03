<template>
  <div class="col-span-12 md:col-span-3 ">
              <!-- Add section open -->
                    <div class="mt-6 px-6 py-4 w-full rounded-md bg-indigo-200">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-medium text-gray-900">Add meme</h3>

                            <a href="#" class="flex text-gray-400 hover:text-indigo-500 transform rotate-180 hover:rotate-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Add meme section -->
                    <div class="mt-6 px-6 py-4 w-full rounded-md bg-indigo-200">
                        <h3 class="text-lg font-medium text-gray-900">Add meme</h3>
                        <p class="text-gray-500">Share your favorite MEME</p>
                        <form action="" class="mt-4">
                            <p class="text-gray-800 font-semibold">Meme name</p>
                            <input type="text" class="w-full mt-2 py-2 pl-6 text-gray-900 font-semibold bg-indigo-100 rounded-md outline-none border-2 focus:border-indigo-500" placeholder="Write here">
                            <p class="mt-4 text-gray-800 font-semibold">Title</p>
                            <input type="text" class="w-full mt-2 py-2 pl-6 text-gray-900 font-semibold bg-indigo-100 rounded-md outline-none border-2 focus:border-indigo-500" placeholder="Write here">
                            <p class="mt-4 text-gray-800 font-semibold">9gag link</p>
                            <input type="text" class="w-full mt-2 py-2 pl-6 text-gray-900 font-semibold bg-indigo-100 rounded-md outline-none border-2 focus:border-indigo-500" placeholder="Write here">
                            <select type="text" name="" id="" class="w-full mt-6 py-2 pl-6 rounded-md bg-indigo-100 text-gray-900 font-medium outline-none border-2 focus:border-indigo-500">
                                <option value="">Category</option>
                                <option value="">Cats</option>
                                <option value="">Anime</option>
                                <option value="">Films</option>
                                <option value="">Games</option>
                            </select>
                            <a href="#" class="w-full block mt-6 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white text-center font-medium outline-none">Add</a>
                        </form>
                    </div>
                  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>