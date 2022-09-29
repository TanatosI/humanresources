<template>
  <div class="app-container">
    <!-- @tab-click="handleClick" -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="角色管理" name="first">
        <el-row :gutter="10">
          <el-button
            type="primary"
            style="margin-left:10px;"
            icon="el-icon-plus"
            @click="dialogVisivle = true"
          >新增角色</el-button>
          <el-table v-loading="loading" style="width:100%" :data="roleList">
            <el-table-column label="序号" width="120" tyoe="index" />
            <el-table-column label="角色名称" width="240" prop="name" />
            <el-table-column label="描述" prop="description" />
            <el-table-column label="操作" width="240px">
              <template slot-scope="{row}">
                <el-button size="small" type="success">分配权限</el-button>
                <el-button size="small" type="promary" @click="editRole(row)">编辑</el-button>
                <el-button size="small" type="danger" @click="delRow(row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-row type="flex" justify="end" align="middle" style="height:60px">
          <el-pagination
            v-if="total != 0"
            background
            layout="prev, pager, next, sizes"
            :total="total"
            :current-page.sync="page.page"
            :page-size.sync="page. pagesize"
            :page-sizes="[2,5,10,15]"
            @current-change="getRoleList"
            @size-change="getRoleList"
          />
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="公司信息" name="second">公司信息</el-tab-pane>
      <addRole :dialog-visivle.sync="dialogVisivle" @refreshList="getRoleList" />
    </el-tabs>
    <el-alert title="对公司名称、公司地址、营业执照、公司地区的更新、将使得公司资料被重新审核、谨慎修改" />
    <el-form :model="companyInfo" label-width="120px" style="margin-top:50px">
      <el-form-item label="公司名称">
        <el-input v-model="companyInfo.name" disabled style="400px" />
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="companyInfo.companyAddress" disabled style="400px" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="companyInfo.mailbox" disabled style="400px" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="companyInfo.remarks" label="textarea" :rows="3" disabled style="400px" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getRoleList, deleteRole, getCompanyInfo } from '@/api'
import addRole from './compoents/addRole.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'HrsaasIndex',
  components: {
    addRole
  },
  data() {
    return {
      activeName: 'first',
      page: {
        page: 1,
        pagesize: 10
      },
      total: 0,
      roleList: [],
      loading: false,
      dialogVisivle: false,
      companyInfo: {}
    }
  },
  computed: {
    ...mapGetters(['companyId'])
  },
  mounted() {
    this.getRoleList()
    this.getCompanyInfo()
  },

  methods: {
    async getRoleList() {
      try {
        this.loading = true
        const { rows, total } = await getRoleList(this.page)
        this.total = total
        this.roleList = rows
        console.log(rows)

        if (total > 0 && rows.length === 0) {
          this.page.page = this.page.page - 1
          this.getRoleList()
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    addRolerole() {
      this.dialogVisivle = true
    },
    editRole(row) {
      this.$refs.addRole.formData = { ...row }
      this.dialogVisivle = true
    },
    async delRow(id) {
      try {
        await this.$confirm('确认删除该角色吗？', '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteRole(id)
        this.getRoleList()
        console.log('success')
      } catch (e) {
        console.log('cancel')
      }
    },
    async getCompanyInfo() {
      this.companyInfo = await getCompanyInfo(this.companyId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
