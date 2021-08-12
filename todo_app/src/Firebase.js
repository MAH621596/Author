import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './Config'


firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()


export {auth,db}