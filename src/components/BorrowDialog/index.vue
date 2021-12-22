<template>
    <el-dialog :title="title" :visible="isVisible">
        <el-form ref="borrowForm" :model="borrowForm" :rules="rules" label-width="100px">
            <el-form-item label="书名：">{{data.title}}</el-form-item>
            <el-form-item label="借书人：" prop="borrower">
                <el-select v-model="borrowForm.borrower" placeholder="请选择">
                    <el-option
                        v-for="user in users"
                        :key="user.userId"
                        :label="user.name"
                        :value="user.userId"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item
                label="借阅数量："
                prop="borrowedNo"
            >
                <el-input type="number" v-model="borrowForm.borrowedNo"></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="borrowSubmit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'BorrowDialog',
    props: ['title', 'isVisible', 'data'],
    data() {
        return {
            users: JSON.parse(localStorage.getItem('users')) || [],
            borrowForm: {
                borrower: '',
                borrowedNo: 1
            },
            rules: {}
        }
    },
    methods: {
        closeDialog() {
            this.$bus.$emit('closeBorrowDialog');
        },
        borrowSubmit() {
            const newData = {...this.data};
            const selecteduser = this.users.filter(user => user.userId == +this.borrowForm.borrower);
            let borrowers = newData.borrower || [];
            if (borrowers.length > 0) {
                const borrowerIds = borrowers.map(item => item.userId);
                if (borrowerIds.indexOf(this.borrowForm.borrower) > -1) {
                    borrowers = borrowers.map(item => {
                        if (+item.userId === +this.borrowForm.borrower) {
                            item.num += this.borrowForm.borrowedNo;
                        }
                        return item;
                    })
                } else {
                    borrowers.push(selecteduser);
                }
                
            }
            newData.borrower = borrowers;
            newData.borrowedNo = newData.borrowedNo + this.borrowForm.borrowedNo;
            this.$bus.$emit('submitBorrow', newData);
        }
    }
}
</script>
