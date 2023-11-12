"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ExploreSearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/explore?query=${query}`);
  };
  return (
    <div className="mt-5">
      <form onSubmit={submit}>
        <input
          type="text"
          className="h-14 w-full rounded-2xl outline-none bg-muted p-3"
          placeholder="Search user with their name or user name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ExploreSearchBar;
