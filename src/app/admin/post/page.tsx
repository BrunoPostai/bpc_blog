export default async function AdminPostPage() {
  return (
    <div className="bg-roman-purple-dark/80 border border-roman-purple rounded-xl p-8 mb-16">
      <h1 className="text-4xl font-extrabold text-roman-gold tracking-wider">ADMINISTRATIO</h1>
      <p className="text-roman-purple-light mt-2 mb-8">Post management panel</p>
      <div className="border-2 border-dashed border-roman-purple rounded-xl p-16 text-center">
        <p className="text-roman-gold/40 text-lg">No posts yet. Create your first post.</p>
      </div>
    </div>
  );
}
