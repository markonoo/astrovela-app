"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/"); // Redirect to home or login page
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!user) {
    // Optionally render nothing or a spinner while redirecting
    return null;
  }

  return <>{children}</>;
} 