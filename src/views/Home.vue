<template>
  <Header :addMeme="addMeme" :memes="memes"/>
  <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 px-6 md:space-x-6">
            <AddMemeForm :addMeme="addMeme" :memes="memes"/>
                <div class="col-span-12 md:col-span-6 ">
                    <meme 
                      :memes="memes"
                      :addComment="addComment"
                      :donate="donate"
                      :vote="vote"
                    />
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
import AddMemeForm from '@/components/AddMemeForm.vue'
import { useMemes } from "@/composables/near"
export default {
    components: {
        Header,
        Category,
        Meme,
        AddMemeForm
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