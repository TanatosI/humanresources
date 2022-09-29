import require from '@/utils/request'

export const getRoleList = (params) => {
  return require({
    url: '/sys/role',
    params
  })
}

export function addRole(data) {
  return require({
    url: '/sys/role',
    methods: 'POST',
    data
  })
}

export function undateRole(data) {
  return require({
    url: `/sys/role/${data.id}`,
    methods: 'put',
    data
  })
}

export function deleteRole(data) {
  return require({
    url: `/sys/role/${data.id}`,
    methods: 'delete',
    data
  })
}

export function getCompanyInfo(companyId) {
  return require({
    url: `/company/${companyId}`
  })
}
