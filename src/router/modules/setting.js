import Layout from '@/layout'

export default {
  path: '/setting',
  component: Layout,
  children: [
    {
      path: '',
      name: '/setting',
      component: () => ('@/views/setting/index.vue'),
      meta: {
        title: '审批',
        icon: 'setting'
      }
    }
  ]
}
