<template>
  <header class="main-header">
      <div class="header-container">
            <router-link to="/books">图书借阅登记</router-link>
            <ul class="nav-list">
                <li class="nav-item"><input /></li>
                <li class="nav-item">
                    <button @click='toEditPage'>新增图书</button>
                </li>
            </ul>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toEditPage() {
            this.$router.push({
                path: '/edit' 
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #f1f1f1;
        height: 40px;
        color: #909090;
        background: #fff;

        .header-container {
            display: flex;
            align-items: center;
            max-width: 1200px;
            margin: auto;
            height: 100%;

            a {
                font-size: 20px;
            }
            a:hover {
                text-decoration: none;
            }
            .nav-list {
                display: flex;
                align-items: center;
                margin-left: 800px;

                .nav-item {
                    flex: 1 0 auto;
                    color: #86909c;
                    padding: 0 6px;
                }
            }
        }
    }
</style>