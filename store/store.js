import { reactive } from 'vue'

export const store = reactive({
  user: {
    status: false,
    token: "",
    tokenType: "",
  },

  setTrue() {
    this.user.status = true
  },

  setFalse() {
    this.user.status = false
  },

  setToken(token) {
    this.user.token = token
  },

  setTokenType(type) {
    this.user.tokenType = type
  },

  logout() {
    this.user.token = ""
    this.user.tokenType = ""
  }
})