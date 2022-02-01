import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeApp from './Firebase.initi';

const useFirebase = () => {
    firebaseInitializeApp();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
            setUser(user)
        })
        .finally(() =>  setIsLoading(false));
        
    }
   
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() =>  setIsLoading(false));
    }

    useEffect(() => {
       onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        
    }, [auth])

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
};

export default useFirebase;