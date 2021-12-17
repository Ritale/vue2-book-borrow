<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  html {
    background: #f4f5f5;
  }
  .mtop40 {
    margin-top: 40px;
  }
  .main-container {
    background: #cccccc;
    width: 100%;
    max-width: 900px;
    margin: 40px auto;
  }
</style>
