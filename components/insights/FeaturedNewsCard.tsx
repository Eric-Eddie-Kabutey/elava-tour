import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/data/news";

type FeaturedNewsCardProps = {
  post: Post;
};

export const FeaturedNewsCard = ({ post }: FeaturedNewsCardProps) => {
  return (
    <div className="w-full bg-sky-50 mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
      {/* Image Container */}
      <div className="relative w-full h-64 md:h-80  overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-4">
        <span className="border border-gray-400 text-gray-600 text-sm font-medium px-3 py-1 self-start">
          {post.category}
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-600">{post.description}</p>
        <Link href={post.slug} className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          Read Article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};