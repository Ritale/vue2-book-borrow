<template>
  <div class="item" @click="toDetail(book)">
      <div class="poster">
          <!-- <img /> -->
          暂无图片
      </div>
      <div class="info">
          <div class='book-title'>{{book.title}}</div>
          <div class="book-desc">{{book.desc}}</div>
          <div class='book-desc'>
              <span>作者：{{book.author}}</span>
              <span class="other">出版时间：{{book.publishTime}}</span>
          </div>
          <div class='book-desc'>
                <span>图书数量：{{book.total}}</span>
                <span class="other">可借数量：{{surplus}}</span>
          </div>
      </div>
      <!-- <div class="operation">
          <el-button type="primary" @click="openBorrowDialog(book)" :disabled="surplus === 0">借书</el-button>
          <el-button type="primary">还书</el-button>
      </div> -->
      <!-- <BorrowDialog :isVisible="showBorrowDialog" title="借阅登记" :data="book" /> -->
  </div>
</template>

<script>
// import BorrowDialog from '../BorrowDialog';

export default {
    name: 'ListItem',
    props: ['book'],
    data() {
        return {
            dialogTitle: '借书',
            showBorrowDialog: false
        }
    },
    computed: {
        surplus() {
            if (!this.book.borrowedNo) {
                return this.book.total;
            }
            return this.book.total - this.book.borrowedNo;
        }
    },
    methods: {
        // openBorrowDialog() {
        //     this.showBorrowDialog = true;
        // },
        // closeBorrowDialog() {
        //     this.showBorrowDialog = false;
        // },
        // submitBorrow(value) {
        //     const books = JSON.parse(localStorage.getItem('books')).map(item => {
        //         if (item.id === this.book.id) {
        //             return value;
        //         }
        //         return item;
        //     });
        //     localStorage.setItem('books', JSON.stringify(books));
        //     this.closeBorrowDialog();
        // },
        toDetail(book) {
            this.$router.push({
                name: 'detail',
                params: {
                    id: book.id
                }
            })
        }
    },
    mounted() {
        this.$bus.$on('closeBorrowDialog', this.closeBorrowDialog);
        this.$bus.$on('submitBorrow', this.submitBorrow)
    },
    beforeDestroy() {
        this.$bus.$off('closeBorrowDialog');
        this.$bus.$off('submitBorrow');
    }
}
</script>

<style scoped lang='scss'>
    .item {
        display: flex;
        padding: 25px;
        box-sizing: border-box;
        background: #ffffff;
        cursor: pointer;

        &:hover {
            background: #f8f9fa;
        }

        .poster {
            width: 100px;
            height: 120px;
            line-height: 120px;
            text-align: center;
            font-size: 14px;
            box-shadow: 3px 4px 12px 0 rgb(0 0 0 /20%);
        }

        .info {
            display: flex;
            flex-direction: column;
            max-width: 528px;
            margin: 10px 24px;
            font-size: 14px;
            flex: 2;

            .book-title {
                font-size: 20px;
                font-weight: 400;
            }
            .book-desc {
                margin-top: 5px;
                height: 20px;
                line-height: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #71777c;

                .other {
                    margin-left: 28px;
                }
            }
            .book-auth {
                margin-top: 6px;
                white-space: nowrap;
            }
        }

        .operation {
            align-self: center;
            margin-left: 10px;
        }
    }
</style>