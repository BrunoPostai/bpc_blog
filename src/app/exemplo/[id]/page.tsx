import { revalidateExampleAction } from "@/actions/revalidate-example";
import { getCachedTime } from "@/lib/post/queries";

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Call the cached function. This value will lock until revalidated!
  const hour = await getCachedTime();

  return (
    <main className="min-h-150 text-4xl font-bold">
      <div>
        Hora: {hour} | (ID: {id})
      </div>

      <form className="py-16" action={revalidateExampleAction}>
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />

        <button
          className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
          type="submit"
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
