import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type post = {
  _id: number;
  image: string;
  title: string;
  description: string;
  author: {
    _id: number;
    name: string;
    image: string;
  };
  category: string;
  createdAt: Date;
  views: number;
};

const StartupCard = ({ post }: { post: post }) => {
  const { _id, image, title, author, description, category, createdAt, views } =
    post;
  return (
    <li key={_id} className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{createdAt.toDateString()}</p>
        <p className="flex gap-1.5">
          <EyeIcon />
          <span>{views}</span>
        </p>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author._id}`}>
            <p className="text-16-medium">{author.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-26-semibold">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${author._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="user"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          width={200}
          height={100}
          alt="place"
          className="startup-card_img"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/categoru/${category.toLocaleLowerCase()}`}>
          <p className="text-14-semibold">{category}</p>
        </Link>
        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
