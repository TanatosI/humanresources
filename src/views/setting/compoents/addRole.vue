<template>
  <el-dialog
    title="新增角色"
    width="30%"
    :visible="dialogVisivle"
    :before-close="handleClose"
  >
    <el-form
      ref="roleDialogForm"
      label-width="80px"
    >
      <el-form-item
        prop="name"
        label="角色"
        :rules="[{required:true, message:'角色必填', trigger:'blur' }] "
      >
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="formData.description" type="textarea" row="3" />
      </el-form-item>
    </el-form>
    <el-row slot="footer" type="flex" justify="center" align="middle" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </el-row>
  </el-dialog>
</template>
<script>
import { addRole, updateRole } from '@/api'
// import { Loading } from 'element-ui'
export default {
  name: 'HrsaasAddRole',
  props: {
    dialogVisivle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        name: '',
        description: ''
      },
      loading: false
    }
  },
  mounted() {
  },
  methods: {
    handleClose() {
      this.$emit('update:dialogVisivle', false)
      this.$refs.roleDialogForm.resetFields()
      this.formData = {
        name: '',
        description: ''
      }
    },
    async submit() {
      try {
        await this.$refs.roleDialogForm.validate()

        this.loading = true
        this.formData.id ? await updateRole(this.formData) : await addRole(this.formData)
        this.$emit('refreshList')
        this.$message.success(this.formData.id ? '编辑成工' : '新增成功')
        this.handleClose()
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
