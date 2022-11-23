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

      {/* // import styled from "styled-components";
      // import FavoriteButton from "../components/FavoriteButton";
      // import FavoriteZone from "../components/FavoriteZone";
      // const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || []);
      // const [open, setOpen] = useState(false);    
      <FavoriteZoneButton onClick={() => setOpen(!open)}>❤️</FavoriteZoneButton>
      {open ? (
        <FavoriteZone
          favorite={favorite}
          setFavorite={(imgSrc) => {
            setFavorite(favorite.filter((item) => item !== imgSrc));
          }}
          handleDelete={handleDelete}
        />
      ) : null} */}

      <Suspense fallback={<SearchLoading keyword={q ?? "cat"} />}>
        <GifList keyword={q ?? "cat"} />
      </Suspense>
    </article>
  );
}

// const FavoriteZoneButton = styled.button`
//   position: fixed;
//   bottom: 30px;
//   right: 30px;
//   z-index: 9999;
//   border-radius: 50%;
//   width: 80px;
//   height: 80px;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   box-shadow: 3px 3px 10px rgb(0 0 0 / 36%);
// `;
