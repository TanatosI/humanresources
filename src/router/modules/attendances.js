import Layout from '@/layout'

export default {
  path: '/attendances',
  component: Layout,
  children: [
    {
      path: '',
      name: '/attendances',
      component: () => ('@/views/attendances/index.vue'),
      meta: {
        title: '审批',
        icon: 'skill'
      }
    }
  ]
}
