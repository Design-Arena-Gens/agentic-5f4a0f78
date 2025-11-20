"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session, status } = useSession();

  return (
    <div className="card">
      <h1>Connect your email</h1>
      {status === "loading" && <p>Loading?</p>}

      {status !== "loading" && !session && (
        <>
          <p>Choose your provider to connect your inbox:</p>
          <div className="buttons">
            <button className="btn google" onClick={() => signIn("google")}>Connect Google</button>
            <button className="btn outlook" onClick={() => signIn("azure-ad")}>Connect Microsoft</button>
          </div>
          <p className="hint">We request minimal scopes and never store your password.</p>
        </>
      )}

      {session && (
        <>
          <div className="profile">
            {session.user?.image && (
              <Image src={session.user.image} alt="avatar" width={48} height={48} />
            )}
            <div>
              <div className="subtle">Connected as</div>
              <div className="email">{session.user?.email}</div>
            </div>
          </div>
          <div className="tokenBox">
            <div className="subtle">Provider</div>
            <code>{session.provider ?? "unknown"}</code>
          </div>
          <button className="btn" onClick={() => signOut()}>Disconnect</button>
        </>
      )}
    </div>
  );
}
