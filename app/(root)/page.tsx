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
      description: "description",
      author: "author",
      category: "category",
      createdAt: "date",
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

      <section className="-white">
        <p>{query ? "search results for: " + query : "All startups"}</p>
        <ul>
          {posts.map((post) => (
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
