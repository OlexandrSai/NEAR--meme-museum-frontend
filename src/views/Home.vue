<template>
  <Header/>
  <main-section/>
</template>

<script>
import Header from '@/components/Header.vue'
import MainSection from '@/components/MainSection.vue'
import { useMemes } from "@/composables/near"
export default {
    components: {
        Header,
        MainSection
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