<template>
  <div class="departments-container">
    <el-card>
      <treeTools :tree-node="company" :is-root="false" />
    </el-card>
    <el-tree :data="departs" :default-expand-all="true" :props="defaultProps">
      <treeTools slot-scope="{data}" :tree-node="data" @addDept="handleAddDept" />
    </el-tree>
    <addDept :dialog-visible.sync="dialogVisible" :tree-node="currentNode" />
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import addDept from './components/add-dept.vue'
import { tranListToTreeData } from '@/utils'
import { getDepartments } from '@/api'
export default {
  name: 'HrsaasIndex',
  components: {
    treeTools,
    addDept
  },
  data() {
    return {
      // departs: [],
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }],
      defaultProps: {
        label: 'name'
      },
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' },
      dialogVisible: false,
      currentNode: {}
    }
  },

  mounted() {
    this.getDepartments()
  },

  methods: {
    async getDepartments() {
      const { depts, companyManage, companyName } = await getDepartments()
      this.departs = tranListToTreeData(depts, '')
      console.log(this.departs)
      this.company = { name: companyName, manager: companyManage }
    },
    handleAddDept(node) {
      // console.log('yes')
      this.dialogVisible = true
      this.currentNode = node
    }
  }
}
</script>

<style lang="scss" scoped>
.departments-container {
  width: 900px;
  margin: 20px auto;
    .el-tree-node__content {
      padding-right: 0px;
    }
}
</style>
