// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyK3Uk-V7heE5RDKM8fjr4rSGs2lcGzCA",
  authDomain: "car-doctor-client-d3180.firebaseapp.com",
  projectId: "car-doctor-client-d3180",
  storageBucket: "car-doctor-client-d3180.appspot.com",
  messagingSenderId: "108979097458",
  appId: "1:108979097458:web:b0ccdf6019edb8b40357eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 