<template>
  <div class="item">
      <div class="poster">
          <!-- <img /> -->
          暂无图片
      </div>
      <div class="info">
          <div class='book-title'>ES6标准入门（第3版）</div>
          <div class="book-desc">剖析ES理解应用难题，横跨ES2015/2016/2017新标，抢占JavaScript制高点</div>
          <div class='book-desc'>
              <span>作者：阮一峰</span>
              <span class="other">出版时间：2017-09-01</span>
          </div>
          <div class='book-desc'>
                <span>图书数量：2</span>
                <span class="other">可借数量：1</span>
          </div>
      </div>
      <div class="operation">
          <el-button type="primary" @click="openBorrowDialog">借书</el-button>
          <el-button type="primary">还书</el-button>
      </div>
      <BorrowDialog isVisible="showBorrowDialog" title="借阅登记" />
  </div>
</template>

<script>
import BorrowDialog from '../BorrowDialog';

export default {
    name: 'ListItem',
    components: {BorrowDialog},
    data() {
        return {
            dialogTitle: '借书',
            showBorrowDialog: false
        }
    },
    methods: {
        openBorrowDialog() {
            this.showBorrowDialog = true;
        }
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
            margin: 10px 24px;
            font-size: 14px;

            .book-title {
                font-size: 20px;
                font-weight: 400;
            }
            .book-desc {
                margin-top: 5px;
                height: 20px;
                line-height: 20px;
                text-overflow: ellipsis;
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
            margin-left: 60px;
        }
    }
</style>