import Layout from '@/layout'

export default {
  path: '/salarys',
  component: Layout,
  children: [
    {
      path: '',
      name: '/salarys',
      component: () => ('@/views/salarys/index.vue'),
      meta: {
        title: '审批',
        icon: 'money'
      }
    }
  ]
}
