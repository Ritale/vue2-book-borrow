<template>
  <main class="main-container">
      <div class='list'>
          <ListItem v-for="book in books" :key="book.id" :book="book" @click="toDetail(book)" />
      </div>
  </main>
</template>

<script>
import ListItem from '../../components/ListItem';

export default {
    name: 'BookList',
    components: {ListItem},
    data() {
        return {
            books: JSON.parse(localStorage.getItem('books')) || []
        }
    },
    // computed: {
    //     books() {
    //         return this.$store.state.books;
    //     }
    // }
}
</script>

<style>
    .list {
        width: 100%;
        max-width: 900px;
    }
</style>