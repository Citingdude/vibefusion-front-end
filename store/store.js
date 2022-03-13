import { reactive } from 'vue'

export const store = reactive({
  user: false,
  setTrue() {
    this.user = true
  },
  setFalse() {
    this.user = false
  }
})