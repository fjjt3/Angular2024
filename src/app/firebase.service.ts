import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth} from 'firebase/auth';
import { Firestore, getFirestore} from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyBqHNostqAV7opcwy0eqqYCBQ66DS0luhQ",
    authDomain: "tienda-online-4d609.firebaseapp.com",
    databaseURL: "https://tienda-online-4d609-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tienda-online-4d609",
    storageBucket: "tienda-online-4d609.firebasestorage.app",
    messagingSenderId: "428073906707",
    appId: "1:428073906707:web:d9b11375bf9a5acb18c5e6"
  };
  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app = initializeApp  (this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
