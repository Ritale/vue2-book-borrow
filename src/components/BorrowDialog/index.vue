<template>
    <el-dialog :title="title" :visible="showDialog">
        <el-form>
            <el-form-item label="借书人">

            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="showDialog = false">取 消</el-button>
            <el-button type="primary" @click="showDialog = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'BorrowDialog',
    props: ['title', 'isVisible'],
    data() {
        return {
            showDialog: this.isVisible
        }
    }
}
</script>

<style>

</style>