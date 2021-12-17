<template>
  <main class="main-container">
      <div class='list'>
          <ListItem />
          <ListItem />
          <ListItem />
      </div>
  </main>
</template>

<script>
import ListItem from '../../components/ListItem';

export default {
    name: 'BookList',
    components: {ListItem}
}
</script>

<style>
    .list {
        width: 100%;
        max-width: 900px;
    }
</style>