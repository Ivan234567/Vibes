import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAbbH8woo45GGSqeyVzPQdW8y3sqU1CNe4",
    authDomain: "vibes-4143c.firebaseapp.com",
    projectId: "vibes-4143c",
    storageBucket: "vibes-4143c.appspot.com",
    messagingSenderId: "865018519269",
    appId: "1:865018519269:web:693191d464d3746d5efe0c",
    measurementId: "G-31KQ5J1B2V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export { auth };
export default app;

