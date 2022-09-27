import Layout from '@/layout'

export default {
  path: '/social',
  component: Layout,
  children: [
    {
      path: '',
      name: '/social',
      component: () => ('@/views/social/index.vue'),
      meta: {
        title: '审批',
        icon: 'table'
      }
    }
  ]
}
