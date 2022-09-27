import Layout from '@/layout'

export default {
  path: '/departments',
  component: Layout,
  children: [
    {
      path: '',
      name: '/departments',
      component: () => ('@/views/departments/index.vue'),
      meta: {
        title: '审批',
        icon: 'tree'
      }
    }
  ]
}
