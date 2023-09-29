import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface ProfileState {
  user_id: string | null;
}

export const useProfStore = defineStore('prof', {
  state: (): ProfileState => ({
    user_id: null,
  }),
  getters: {
    getUserID(): string | null{
      return this.user_id;
    }
  },
  actions: {
    setUserID(user:string | null): void {
      this.user_id = user;
    },
  },
});