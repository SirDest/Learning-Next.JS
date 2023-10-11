"use client";
import React, { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search Term"
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none px-4 py-1 border-[1px] bp"
      />
      <button
        type="submit"
        className="btn text-white bg-blue-500 font-bold py-1 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};
export default Search;
