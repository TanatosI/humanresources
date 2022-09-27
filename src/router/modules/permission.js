import Layout from '@/layout'

export default {
  path: '/permission',
  component: Layout,
  children: [
    {
      path: '',
      name: '/permission',
      component: () => ('@/views/permission/index.vue'),
      meta: {
        title: '审批',
        icon: 'lock'
      }
    }
  ]
}
