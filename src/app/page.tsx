import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
};

async function getPosts(): Promise<Post[]> {
  // In a real app, this would fetch from an API or database
  return [
    { id: 1, title: 'First Post', content: 'This is the first post content' },
    { id: 2, title: 'Second Post', content: 'This is the second post content' },
    { id: 3, title: 'Third Post', content: 'This is the third post content' },
  ];
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Next.js Demo with Static Params</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <Link href={`/posts/${post.id}`}>
              <Button>Read More</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
