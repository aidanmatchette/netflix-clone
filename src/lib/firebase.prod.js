import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyDflvx3sr2qGjkDqtkgWoEKxe4uhoVdqIk',
  authDomain: 'netflix-clone-156cc.firebaseapp.com',
  projectId: 'netflix-clone-156cc',
  storageBucket: 'netflix-clone-156cc.appspot.com',
  messagingSenderId: '140917122245',
  appId: '1:140917122245:web:91eff999629ec86a6d3cac',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
