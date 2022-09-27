import Layout from '@/layout'

export default {
  path: '/approvals',
  component: Layout,
  children: [
    {
      path: '',
      name: '/approvals',
      component: () => ('@/views/approbals/index.vue'),
      meta: {
        title: '审批',
        icon: 'tree-table'
      }
    }
  ]
}
