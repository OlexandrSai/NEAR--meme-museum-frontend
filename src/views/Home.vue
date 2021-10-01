<template>
  <Header/>
  <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 px-6 md:space-x-6">
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
import Header from '@/components/Header.vue'
import Category from '@/components/Category.vue'
import Meme from '@/components/Meme.vue'
import Popularity from '@/components/Popularity.vue'
import { useMemes } from "@/composables/near"
export default {
    components: {
        Header,
        Category,
        Meme,
        Popularity
    },
    setup() {
      const { memes, addMeme, addComment, donate, vote } = useMemes();

      return {
        memes,
        addMeme,
        addComment,
        donate,
        vote
      }
    }
}
</script>