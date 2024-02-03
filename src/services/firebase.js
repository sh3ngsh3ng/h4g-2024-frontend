import { initializeApp } from "@firebase/app"
import { getAuth } from "@firebase/auth"

const firebaseConfig = {} // from firebase console

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)


auth.onAuthStateChanged((user) => {
    console.log("current user: ", user)
})