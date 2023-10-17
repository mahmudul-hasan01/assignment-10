import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2e4eK7cyNd7KTQDwtyFxm7Q0E4R4OPQ",
  authDomain: "assignment-10-project-2005c.firebaseapp.com",
  projectId: "assignment-10-project-2005c",
  storageBucket: "assignment-10-project-2005c.appspot.com",
  messagingSenderId: "497153750408",
  appId: "1:497153750408:web:a8572088bdbf074618b63d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth