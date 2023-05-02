import React from "react";
import Link from "next/link";
import Image from "next/image";
type GithubUsers = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  node_id:string,
};
const User = async ( { params } : any) => {
  const {users} = params
  const data = await fetch(`https://api.github.com/users/${users}`);
  const res:GithubUsers = await data.json()
  return (
    <div className="text-center m-auto mt-32">
      <Image
        src={`${res.avatar_url}`}
        width={500}
        height={400}
        alt={`${res.login}`}
        className="m-auto"
      />
      <div className="m-2">
        <h2>
          <span className="font-bold tracking-wider">User Name: </span>{" "}
          {res.login}
        </h2>
        <Link
          href={`${res.html_url}`}
          className="text-blue-500 underline font-semibold"
          target="_blank"
        >
          Github Account
        </Link>
      </div>
      <Link
        href="/"
        className="bg-green-600 rounded py-2 px-4 my-12 text-white hover:bg-green-500"
      >
        Back Home
      </Link>
    </div>
  );
};

export default User;
