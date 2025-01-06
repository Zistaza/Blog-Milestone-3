import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';


interface BlogCardProps {
  post: { id: string; title: string; description: string; author?: string; date: string; imageUrl: string; secondaryDescription?: string; authorimg?: string;};
  isDarkBackground: boolean;
}


export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${isDarkBackground ? 'bg-gray-400 text-white' : 'bg-blue-100 text-slate-800'} mt-8 border border-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl font-bold mt-4 text-black hover:text-blue-600 underline text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center font-bold text-slate-900">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
      <p
  className={`text-xl font-bold mb-2 ${
    isDarkBackground ? 'text-purple-700' : 'text-blue-900'
  }`}
>
  <span className="flex items-center">
    Blog by: {post.author}
    {post.authorimg ? (
    <Image
      className="w-10 h-10 rounded-full ml-2 object-cover border-2 border-slate-500"
      src={post.authorimg}
        alt={post.title}
        width={400}
        height={300}
    />
  ) : null}
  </span>
</p>

        <p
          className={`text-sm font-bold mb-2 ${
            isDarkBackground ? 'text-black' : 'text-slate-900'
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 text-white rounded hover:bg-green-700 ${
            isDarkBackground ? 'bg-blue-900' : 'bg-yellow-900'
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
