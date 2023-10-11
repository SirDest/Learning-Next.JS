import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 flex gap-3 bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white rounded-lg text-blue-500">
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white rounded-lg text-blue-500"
      >
        Todos
      </Link>
    </header>
  );
};

export default Header;
