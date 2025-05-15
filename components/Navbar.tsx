import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-3 py-5 bg-white text-xl font-bold font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex gap-4 items-center text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                {" "}
                <button type="submit">logout</button>
              </form>
              <Link href={`/user/${session.user.id}`}>
                {" "}
                <span> {session.user.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                const res = await signIn("github", { redirectTo: "/" });
                console.log(res ? res : "no url");
              }}
            >
              <button type="submit" className="text-default">
                {" "}
                LogIn{" "}
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
