<template>
<!-- Header -->
    <header class="relative header-bg">

        <!-- Decorative emoji -->
        <img src="@/assets/img/image272.png" alt="explode" class="hidden md:block absolute top-0 right-0">
        <img src="@/assets/img/image1342.png" alt="trophy" class="hidden md:block absolute -bottom-12 left-0">
        <img src="@/assets/img/image1411.png" alt="trophy" class="hidden md:block absolute -bottom-12 right-0">

        <!-- Decorative lights -->
        <img src="@/assets/img/Ellipse22.png" alt="lights" class="hidden md:block absolute left-0 top-16">
        <img src="@/assets/img/Ellipse24.png" alt="lights" class="hidden md:block absolute left-44 xl:left-96 top-0">
        <img src="@/assets/img/Ellipse21.png" alt="lights" class="hidden md:block absolute right-0 top-44">


        <!-- Decorative line -->
        <div class="w-full h-3 bg-gradient-pink"></div>

        <div class="container mx-auto px-6">
            <!-- Navbar -->
            <nav class="mt-6 flex items-center justify-between py-3">
                <a href="#" class="flex">
                    <img src="@/assets/img/near_logo_stack_1.png" alt="" class="border-r-2 border-white">
                    <div class="ml-2">
                        <p class="text-gradient-blue text-2xl font-bold tracking-tight">Memes</p>
                        <p class="-mt-2 font-josefin text-white text-2xl">museum</p>
                    </div>
                </a>
                <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-14 h-14 rounded-full bg-white">
                            <img src="@/assets/img/near_logo_stack2.png" alt="">
                        </div>
                        
                        <!-- If logined -->
                        <div v-if="accountId">
                            <p class="text-gradient-blue text-sm md:text-base">{{accountId}}</p>
                            <button @click="signOut" class="text-white font-bold">Log out</button>
                        </div>

                        <!-- If don't logined -->
                        <button v-else @click="signIn" class="ml-4 text-white text-sm md:text-xl font-bold">Log in with <span class="text-gradient-blue">NEAR Wallet</span></button>

                </div>
            </nav>

            <!-- Offer -->
            <div class="pb-24 xl:pb-40 2xl:pb-48">
                <div class="lg:mt-3 2xl:mt-14 text-center">
                    <h1 class="flex justify-center items-baseline space-x-2 text-4xl lg:text-6xl 2xl:text-8xl text-white font-bold">
                        <img src="@/assets/img/image1123.png" alt="pig" class="w-9 lg:w-20 h-9 lg:h-20 mr-3 -pb-4">
                        Meme Museum 
                        <span class="inline-block rounded-sm bg-gradient-blue w-2 md:w-5 h-2 md:h-5"></span>
                    </h1>
                    <p class="mt-2 2xl:mt-4 text-white text-base md:text-2xl tracking-wide">
                        Share your favorite MEME. Comment, vote and <br class="hidden lg:block"> engage with all the cool memes
                    </p>
                </div>
                <form action="" class="mt-14 w-full">


                    <div class="flex flex-col lg:flex-row justify-center items-baseline lg:space-x-5">
                        <div class="mt-4 lg:mt-0">
                            <p class="text-gray-400 pl-4">Meme name</p>
                            <input type="text" placeholder="Chack fight" class="w-64 lg:w-44 xl:w-64 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none pl-6">
                        </div>
                        
                        <div class="mt-4 lg:mt-0">
                            <p class="text-gray-400 pl-4">Title</p>
                            <input type="text" placeholder="Chack fighting" class="w-64 lg:w-44 xl:w-64 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none pl-6">
                        </div>
                        <div class="mt-4 lg:mt-0">
                            <p class="text-gray-400 pl-4">9GAG link</p>
                            <input type="text" placeholder="9gag.com/gag/ayMDG8Y" class="w-64 lg:w-44 xl:w-64 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none pl-6">
                        </div>
                        <div class="mt-4 lg:mt-0">
                            <p class="text-gray-400 pl-4 lg:pl-0">Category</p>
                            <select name="" id="" class="w-16 mt-2 py-3 rounded-md border-2 border-gray-900 focus:border-blue-600 outline-none px-3">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div class="mt-4 lg:mt-0">
                            <p class="hidden lg:block text-transparent">buttons</p>
                            <a href="#" class="inline-block mt-2 w-64 lg:w-44 xl:w-64 py-3 bg-gradient-to-r from-blue-500 hover:from-white active:from-gray-200 to-blue-600 hover:to-white active:to-gray-200 text-white hover:text-blue-600 text-center font-semibold rounded-md">Send</a>
                        </div>
                    </div>


                </form>
            </div>
        </div>


    </header>
</template>

<script>
export default {
    props: {
        accountId: {
            typeof:String,
            required:true
        },
        signIn: {
            typeof:Function,
            required:true
        },
        signOut: {
            typeof:Function,
            required:true
        },
    }
}
</script>