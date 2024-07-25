import { useState, useEffect } from "react";

const useScrollTopPosition = () => {
  const threshold = 50; // threshold in pixels
  const [scrolled, setScrolled] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const onScroll = () => {
    const bodyOffset = document.body.scrollTop;
    const htmlOffset = document.documentElement.scrollTop;
    if (bodyOffset > threshold || htmlOffset > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    setTopOffset(bodyOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    scrolled,
    topOffset,
  };
};

export default useScrollTopPosition;
