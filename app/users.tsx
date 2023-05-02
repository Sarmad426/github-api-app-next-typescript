import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
type GithubUsersProps = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};
const Users = ({id,login,avatar_url,html_url}:GithubUsersProps) => {
  return (
    <Link href={`${login}`}>
    <div key={id} className="bg-white px-3 py-2 text-center rounded-xl">
      <Image width={400} height={400} src={avatar_url} alt={login} />
      <div className="flex justify-evenly my-4">
        <span>{login}</span>
        <Link
          href={html_url}
          target="_blank"
          className="text-blue-500 underline"
        >
          Github Account
        </Link>
      </div>
    </div>
    </Link>
  );
}

export default Users
