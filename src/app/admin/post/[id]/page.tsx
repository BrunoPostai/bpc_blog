type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  return (
    <div className="bg-roman-purple-dark/80 border border-roman-purple rounded-xl p-8 mb-16">
      <h1 className="text-4xl font-extrabold text-roman-gold tracking-wider">EDIT POST</h1>
      <p className="text-roman-purple-light mt-2 mb-8">Post ID: {id}</p>
      <div className="border-2 border-dashed border-roman-purple rounded-xl p-16 text-center">
        <p className="text-roman-gold/40 text-lg">Post editor coming soon.</p>
      </div>
    </div>
  );
}
