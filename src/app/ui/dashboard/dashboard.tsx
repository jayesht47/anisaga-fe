"use client";
import { isLoggedIn } from "@/app/lib/actions";
import { AuthContext } from "@/app/lib/auth-provider";
import { useContext, useEffect } from "react";

export default function Dashboard() {
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    const updateAuthState = async () => {
      const newAuthState = await isLoggedIn();
      setAuthState(newAuthState);
    };
    updateAuthState();
  });

  return (
    <div>
      This is Dashbaord component
      <div> {`The user logged in status is ${authState}`}</div>
    </div>
  );
}
