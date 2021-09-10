<template>
  <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 px-6 md:space-x-6">
                <sign-up/>
                <div class="col-span-12 md:col-span-6 ">
                    <popularity/>
                    <meme/>
                </div>
                <category/>
            </div>
        </div>
    </section>
</template>

<script>
import Category from './Category.vue'
import Meme from './Meme.vue'
import Popularity from './Popularity.vue'
import SignUp from './SignUp.vue'
export default {
    components: {
        Category,
        Meme,
        Popularity,
        SignUp
    }
}
</script>
