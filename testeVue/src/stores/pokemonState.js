import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemonState", {
  state: () => {
    return {
      infoPokemon: null,
      showInfo: false,
      alertErro: false,
    };
  },
  actions: {
    async saveState(infoPokemon) {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${infoPokemon}`)
          .then((res) => {
            this.infoPokemon = res;
            this.showInfo = true;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
  },
});

