"use client";
import { isLoggedIn } from "@/app/lib/actions";
import { AuthContext } from "@/app/lib/auth-provider";
import { useContext, useEffect } from "react";

export default function Dashboard() {
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    console.log(`useEffect called`);
    isLoggedIn().then((newAuthState) => {
      console.log(`newAuthState is ${newAuthState}`);
      setAuthState(newAuthState);
    });
  });

  return (
    <div>
      This is Dashbaord component
      <div> {`The user logged in status is ${authState}`}</div>
    </div>
  );
}
