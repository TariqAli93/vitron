import { useRouter } from 'vue-router'

const uniqueRoutes = () => {
  const router = useRouter()
  const routes = router.getRoutes()

  const uniqueRoutesSet = new Set()

  const collator = new Intl.Collator('ar-EG', {
    sensitivity: 'base',
    numeric: true
  })

  const notDupicatedRoutes = routes
    .filter((route) => {
      const path = route.path
      const isDuplicate = uniqueRoutesSet.has(path)
      uniqueRoutesSet.add(path)
      return !isDuplicate
    })
    .sort((a, b) => {
      const nameA = a.meta.name || '' // Handle cases where meta.name might be undefined
      const nameB = b.meta.name || ''

      return collator.compare(nameA.normalize('NFC'), nameB.normalize('NFC'))
    })

  return notDupicatedRoutes
}

export default uniqueRoutes
