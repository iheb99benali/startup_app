import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  console.log(JSON.stringify(posts, null, 2));

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
          {posts.map((posts: StartupTypeCard) => (
            <StartupCard key={posts?._id} post={posts} />
          ))}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
