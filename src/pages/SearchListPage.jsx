import { Suspense } from "react";
import { SearchInput } from "../components/SearchInput";
import qs from "qs";
import { GifList } from "../components/GifList";
import { SearchLoading } from "../components/SearchLoading";

export function SearchListPage() {
  const { q } = qs.parse(window.location.search.slice(1));

  return (
    <article>
      <SearchInput keyword={q ?? "cat"} />

      <Suspense fallback={<SearchLoading keyword={q ?? "cat"} />}>
        <GifList keyword={q ?? "cat"} />
      </Suspense>
    </article>
  );
}
