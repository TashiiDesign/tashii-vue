import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes:{
        primary: '#D9B8B8',
        secondary: '#BF999C',
        accent: '#A9CBD9',
        white: '#FFFFFF',
        black: '#282828', 

        }
    },

    iconfont: 'mdi', //Enables ability to use material icons 
});
