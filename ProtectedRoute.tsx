"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase.init";
import Loading from "../UI/Loading";

const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    // Redirect to the signin page
    router.push("/");
    return null; // Return null temporarily or Loading component while redirecting
  }

  return children;
};

export default ProtectedRoute;
