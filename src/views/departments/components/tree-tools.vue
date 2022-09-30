<template>
  <el-row type="flex" justify="space-betwenn" align="middle" style="height:40px;width:100%;">
    <el-col>
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex">
        <span style="margin-right:16px;">{{ treeNode.manager }}</span>
        <el-dropdown @command="handlecommand">
          <span style="margin-left:10px;">操作 <i class="el-icon-arrow-down el-icon--right" /></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="and">添加子部门</el-dropdown-item>
            <el-dropdown-item v-if="isRoot" command="edit">编辑</el-dropdown-item>
            <el-dropdown-item v-if="isRoot" command="del">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HrsaasTreeTools',
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean
      // required: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    handlecommand(type) {
      if (type === 'and') {
        console.log(type)
        // 新增
        this.$emit('addDept', this.treeNode)
      } else if (type === 'edit') {
        // 编辑
      } else {
        // 删除
      }
    }
  }
}
</script>
<style lang="">

</style>
