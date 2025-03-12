import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleResize = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", handleResize);

    return () => {
      mediaQueryList.removeEventListener("change", handleResize);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
