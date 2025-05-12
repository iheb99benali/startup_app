import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      image:
        "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      title: "string",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      author: { _id: 1, name: "name", image: "image" },
      category: "category",
      createdAt: new Date(),
      views: 55,
    },
    {
      _id: 1,
      image:
        "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      title: "string",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      author: { _id: 1, name: "name", image: "image" },
      category: "category",
      createdAt: new Date(),
      views: 55,
    },
    {
      _id: 1,
      image:
        "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      title: "string",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      author: { _id: 1, name: "name", image: "image" },
      category: "category",
      createdAt: new Date(),
      views: 55,
    },
    {
      _id: 1,
      image:
        "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      title: "string",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
      author: { _id: 1, name: "name", image: "image" },
      category: "category",
      createdAt: new Date(),
      views: 55,
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup here
          <br />
          connect with experts{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get noticed
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? "search results for: " + query : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.map((post) => (
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
