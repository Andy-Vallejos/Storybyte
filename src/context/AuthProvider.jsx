import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/assets/firebaseConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                const basicUser = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                    photo: firebaseUser.photoURL
                };
                setUser(basicUser);

                getDoc(doc(db, "usuarios", firebaseUser.uid))
                    .then((userDoc) => {
                        const customData = userDoc.exists() ? userDoc.data() : {};
                        setUser((prev) => ({
                            ...prev,
                            name: customData.name || prev.name,
                            photo: customData.photo || prev.photo,
                            books: customData.books || []
                        }));
                    })
                    .catch((error) => {
                        console.error("Error fetching Firestore data:", error);
                    });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
