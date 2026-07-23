import ErrorMessage from "@/components/ErrorMessage";
import { romanize } from "romans";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTitle="PAGINA NON INVENTA"
        contentTitle={romanize(404)}
        content="PAGINA NON INVENTA — THE PAGE YOU SEEK DOES NOT EXIST"
      />
    </>
  );
}
