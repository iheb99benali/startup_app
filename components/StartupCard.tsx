import { EyeIcon } from "lucide-react";
import React from "react";

type post = {
  _id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  category: string;
  createdAt: string;
  views: number;
};

const StartupCard = ({ post }: { post: post }) => {
  return (
    <li key={post._id} className="startup-card group">
      <div className="flex-between">
        <p className="flex gap-1.5">
          <EyeIcon />
          <span>{post.views}</span>
        </p>
        <p className="startup-card_date">{post.createdAt}</p>
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.author}</p>
        <p>{post.category}</p>
      </div>
    </li>
  );
};

export default StartupCard;
