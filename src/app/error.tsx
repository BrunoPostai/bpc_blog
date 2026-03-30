"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <ErrorMessage
        pageTitle="Internal Server Error"
        contentTitle="501"
        content="An error has occured and your app cannot recover. Try again later."
      />
    </>
  );
}
