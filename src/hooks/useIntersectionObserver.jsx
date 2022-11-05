import { createRef, useEffect, useRef } from "react";

export const useIntersectionObserver = (onIntersecting) => {
  const bottomObserver = useRef(null);
  const bottomRef = createRef(null);

  useEffect(() => {
    bottomObserver.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersecting();
        }
      },
      { threshold: 0, rootMargin: "1000px" }
    );
  }, [onIntersecting]);

  useEffect(() => {
    const observer = bottomObserver.current;
    const el = bottomRef.current;

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el != null) {
        observer.unobserve(el);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottomRef.current]);

  return { bottomRef };
};
