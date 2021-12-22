<template>
  <main class="main-container">
    <div class="content-box">
      <div class="content-box-head">
        <span>图书详情</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">书名：</span>
        <span class="field-item-value">{{book.title}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">作者：</span>
        <span class="field-item-value">{{book.author}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">简介：</span>
        <span class="field-item-value">{{book.desc}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">版本：</span>
        <span class="field-item-value">{{book.edition}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">出版时间：</span>
        <span class="field-item-value">{{book.publishTime}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">出版社：</span>
        <span class="field-item-value">{{book.publisher}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">ISBN：</span>
        <span class="field-item-value">{{book.isbn}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">图书总数：</span>
        <span class="field-item-value">{{book.total}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">可借数量：</span>
        <span class="field-item-value">{{surplus}}</span>
      </div>
      <div class="field-item">
        <span class="field-item-title">借阅者：</span>
        <span class="field-item-value">{{borrowers}}</span>
      </div>
      <div class="footer-btn">
        <el-button type="primary" size="small" :disabled="surplus === 0" @click="openBorrowDialog">借书</el-button>
        <el-button type="primary" size="small" :disabled="book.borrowedNo === 0">还书</el-button>
      </div>
    </div>
    <BorrowDialog :isVisible="showBorrowDialog" title="借阅登记" :data="book" />
  </main>
</template>

<script>
import BorrowDialog from '../../components/BorrowDialog';

export default {
    name: 'BookDetail',
    components: {BorrowDialog},
    data() {
      const books = JSON.parse(localStorage.getItem('books'));
      const bookObj = books.filter(item => item.id === this.$route.params.id)
      return {
        book: bookObj[0],
        showBorrowDialog: false
      }
    },
    computed: {
      surplus() {
        if (!this.book.borrowedNo) {
            return this.book.total;
        }
        return this.book.total - this.book.borrowedNo;
      },
      borrowers() {
        return this.book.borrower && this.book.borrower.length > 0 ? this.book.borrower.map(item => item.name).join(',') : '';
      }
    },
    methods: {
      openBorrowDialog() {
        this.showBorrowDialog = true;
      },
      closeBorrowDialog() {
        this.showBorrowDialog = false;
      },
      submitBorrow(value) {
        const books = JSON.parse(localStorage.getItem('books')).map(item => {
            if (item.id === this.book.id) {
                return value;
            }
            return item;
        });
        localStorage.setItem('books', JSON.stringify(books));
        this.closeBorrowDialog();
      }
    },
    mounted() {
      this.$bus.$on('closeBorrowDialog', this.closeBorrowDialog)
      this.$bus.$on('submitBorrow', this.submitBorrow)
    },
    beforeDestroy() {
      this.$bus.$off('closeBorrowDialog')
      this.$bus.$off('submitBorrow')
    }
}
</script>

<style lang="scss" scoped>
  .content-box {
    padding-top: 0;

    &-head {
      padding: 20px;
    }
  }
  .field-item {
    min-height: 30px;
    color: #71777c;
    font-size: 14px;

    &-title {
      display: inline-block;
      text-align: right;
      width: 120px;
      font-weight: 600;
    }
    &-value {
      display: inline-block;
      padding-left: 12px;
      width: 76%;
    }
  }

  .footer-btn {
    text-align: center;
    padding: 20px;
  }
</style>