import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface AuthState {
  accessToken: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
  }),
  getters: {
    getAccessToken(): string | null{
      return this.accessToken;
    },
    isAuthenticated: (state) => state.accessToken !== null,
  },
  actions: {
    setAccessToken(token:string | null): void {
      this.accessToken = token;
    },
  },
});