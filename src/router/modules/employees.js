import Layout from '@/layout'

export default {
  path: '/employees',
  component: Layout,
  children: [
    {
      path: '',
      name: '/employees',
      component: () => ('@/views/employees/index.vue'),
      meta: {
        title: '审批',
        icon: 'people'
      }
    }
  ]
}
