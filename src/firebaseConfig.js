import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyADJjLtFoIZ4lEPQ1YH63ShKfDbct1QpuQ",
    authDomain: "realtime-8f10e.firebaseapp.com",
    databaseURL: "https://realtime-8f10e-default-rtdb.firebaseio.com",
    projectId: "realtime-8f10e",
    storageBucket: "realtime-8f10e.appspot.com",
    messagingSenderId: "75186429991",
    appId: "1:75186429991:web:1efdbf9340ca94f74f6e02",
    measurementId: "G-6C87K449FM"
};

export const app = initializeApp(firebaseConfig);