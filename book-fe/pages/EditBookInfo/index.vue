<template>
  <main class="main-container">
      <div class="content-box">
          <el-form ref="bookForm" :model="bookForm" :rules="rules" label-width="100px">
                <el-form-item label="书名" prop="title">
                    <el-input v-model="bookForm.title"></el-input>
                </el-form-item>
                <el-form-item label="图书简介" prop="desc">
                    <el-input type="textarea" :rows="3" v-model="bookForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="图书数量" prop="total">
                    <el-input type="number" v-model="bookForm.total"></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="classify">
                    <el-select v-model="bookForm.classify" placeholder="请选择分类">
                        <el-option label="HTML" value="1"></el-option>
                        <el-option label="CSS" value="2"></el-option>
                        <el-option label="JavaScript" value="3"></el-option>
                        <el-option label="前端框架" value="4"></el-option>
                        <el-option label="其他" value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="bookForm.author"></el-input>
                </el-form-item>
                <el-form-item label="ISBN" prop="isbn">
                    <el-input v-model="bookForm.isbn"></el-input>
                </el-form-item>
                <el-form-item label="版本" prop="version">
                    <el-input v-model="bookForm.version"></el-input>
                </el-form-item>
                <el-form-item label="出版时间" prop="publishTime">
                    <el-date-picker type="date" placeholder="选择日期" v-model="bookForm.publishTime"></el-date-picker>
                </el-form-item>
                <el-form-item label="出版社" prop="publisher">
                    <el-input v-model="bookForm.publisher"></el-input>
                </el-form-item>
                <el-form-item label="总页数" prop="pages">
                    <el-input type="number" v-model="bookForm.pages"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
          </el-form>
      </div>
  </main>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
    name: 'EditBookInfo',
    data() {
        return {
            bookForm: {
                title: '',
                desc: '',
                total: 0,
                classify: '1',
                author: '',
                isbn: '',
                version: '',
                publishTime: '',
                publisher: '',
                pages: 0
            },
            rules: {
                title: [
                    {required: true, message: '请输入书名'},
                    {max: 60, message: '不能大于60个字符'}
                ],
                desc: [
                    {max: 600, message: '不能大于600个字符'}
                ],
                total: [
                    {required: true, message: '请输入图书数量'}
                ],
                author: [
                    {max: 200, message: '不能大于200个字符'}
                ],
                isbn: [
                    {required: true, message: '请输入ISBN号'}
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            const postData = this.bookForm;
            postData.id = nanoid();
            // this.$store.dispatch('addBook', postData)
            const newBooks = JSON.parse(localStorage.getItem('books'));
            newBooks.push(postData);
            localStorage.setItem('books', JSON.stringify(newBooks));
            this.$router.push({
                name: 'detail',
                params: {
                    id: postData.id
                }
            })
        }
    }
}
</script>
