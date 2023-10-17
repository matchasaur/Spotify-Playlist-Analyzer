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
      return localStorage.getItem('token');
    },
     async isAuthenticated(): Promise<boolean> {
      let token = localStorage.getItem('token');
      console.log('From Auth: ', token);
      return (token) ? true : false;
    },
  },
  actions: {
    setAccessToken(token:string): void {
      localStorage.setItem('token', token);
      this.accessToken = token;
    },
    clearAccessToken(): void {
      console.log('clearing token');
      localStorage.removeItem('token');
      let token = localStorage.getItem('token');
      this.accessToken = null;
      console.log(token);
    },
  },
});