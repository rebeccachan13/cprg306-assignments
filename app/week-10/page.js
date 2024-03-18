"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
            <p>
                {user ? (
                    <>
                    <p>Signed in as {user && user.displayName} ({user?.email})</p>
                    <button onClick={firebaseSignOut}>Sign out</button><br />
                    <Link href="./week-10/shopping-list">Continue to your shopping list</Link>
                    </>
                ) : (
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                )}
            </p>

        </div>
    );
    }