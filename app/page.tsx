import Link from "next/link";
import Users from "./users";
type GithubUsers = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};
export default async function Home() {
  const data = await fetch("https://api.github.com/users");
  const res = await data.json();
  return (
    <div className="m-5">
      <h2 className="text-3xl my-5 mx-3">Home Page: 🔥</h2>
      <Link href="/about" className="text-blue-500 underline font-semibold">
        About
      </Link>
      <div className="grid grid-cols-3 gap-12 bg-gray-100">
        {res.map((user: GithubUsers) => {
          return (
            <Users
              id={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
            />
          );
        })}
      </div>
    </div>
  );
}
