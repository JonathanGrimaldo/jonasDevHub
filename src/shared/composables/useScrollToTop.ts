import { watch } from 'vue'
import { useRoute } from 'vue-router'

export function useScrollToTop() {
  const route = useRoute()

  watch(
    () => route.path,
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  )
}
