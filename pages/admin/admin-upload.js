import React from "react";
import Layout from "../../components/layout";
import FileUpload from "../../components/fileupload";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "../../components/access-denied";

export default function AdminUpload() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <div>
        <FileUpload />
      </div>
    </Layout>
  );
}
