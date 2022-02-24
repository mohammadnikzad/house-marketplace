import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9AUGMk2tc6chkGDmIus15fXQWEpqza08',
  authDomain: 'house-marketplace-app-faf2e.firebaseapp.com',
  projectId: 'house-marketplace-app-faf2e',
  storageBucket: 'house-marketplace-app-faf2e.appspot.com',
  messagingSenderId: '996906750676',
  appId: '1:996906750676:web:d15a92e519b9c860b8e141',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
