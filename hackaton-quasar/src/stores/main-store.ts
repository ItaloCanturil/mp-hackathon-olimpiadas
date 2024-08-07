import { defineStore } from 'pinia';
import {
  CountryData,
  GameData,
  GamesParams,
  Sports,
  Venues,
} from 'src/types/service';
import { api } from 'boot/axios';

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      games: {} as GameData,
      countries: {} as CountryData,
      sports: [{} as Sports],
      venues: [{} as Venues],
    };
  },
  actions: {
    async getGames(params?: GamesParams) {
      try {
        const response = await api.get<GameData>('/events', {
          params: {
            country: params?.country,
            discipline: params?.discipline,
            gender: params?.gender,
            venue: params?.venue,
            date: params?.date,
            competitor: params?.competitor,
            page: params?.page,
          },
        });

        this.games = response.data;
      } catch (error) {
        throw error;
      }
    },
    async getGamesByID(id: number) {
      try {
        this.games = await api.get('/events/' + id);
      } catch (error) {
        throw error;
      }
    },
    async getGameToday() {
      try {
        // const dateNow = new Date();
      } catch (error) {
        throw error;
      }
    },
    async getVenues() {
      try {
        const response = await api.get('/venues');
        this.venues = response.data.data;
      } catch (error) {
        throw error;
      }
    },
    async getSports() {
      try {
        const response = await api.get('/disciplines');

        this.sports = response.data.data;
      } catch (error) {
        throw error;
      }
    },
    async getCountries() {
      try {
        const response = await api.get('/countries');

        this.countries = response.data;
      } catch (error) {
        throw error;
      }
    },
  },
});
