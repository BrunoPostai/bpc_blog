import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTitle="PAGE NOT FOUND"
        contentTitle="404"
        content="404 ERROR - THE PAGE YOU'RE TRYING TO FIND DOES NOT EXIST"
      />
    </>
  );
}
