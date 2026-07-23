"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { romanize } from "romans";
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
        pageTitle="Error Internus"
        contentTitle={romanize(500)}
        content="Error internus evenit. Resurgere conare postea."
      />
    </>
  );
}
