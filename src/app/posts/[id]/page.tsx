import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
};

// This is a demo of generateStaticParams
export async function generateStaticParams() {
  // In a real app, this would fetch from an API or database
  const posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post content' },
    { id: 2, title: 'Second Post', content: 'This is the second post content' },
    { id: 3, title: 'Third Post', content: 'This is the third post content' },
  ];

  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  // In a real app, this would fetch from an API or database
  const posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post content' },
    { id: 2, title: 'Second Post', content: 'This is the second post content' },
    { id: 3, title: 'Third Post', content: 'This is the third post content' },
  ];

  const post = posts.find(p => p.id.toString() === id);
  if (!post) {
    throw new Error('Post not found');
  }
  return post;
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.content}</p>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
