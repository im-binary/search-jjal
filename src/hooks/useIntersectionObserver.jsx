import { createRef, useEffect, useRef } from "react";

export const useIntersectionObserver = (onIntersecting) => {
  const bottomObserver = useRef(null);
  const bottomRef = createRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(1);
          onIntersecting();
        }
      },
      { threshold: 0.25, rootMargin: "1000px" }
    );
    bottomObserver.current = observer;
  }, [onIntersecting]);

  useEffect(() => {
    const observer = bottomObserver.current;
    const el = bottomRef.current;

    if (bottomRef.current) {
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
