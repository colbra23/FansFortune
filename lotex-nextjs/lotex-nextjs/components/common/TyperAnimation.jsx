"use client";
import React, { useEffect, useRef, useState } from "react";
const defaultStrings = ["Text to Image", "Text to Image", "Text to Image"];
export default function TyperAnimation({ strings = defaultStrings }) {
  const [activeSctingIndex, setActiveSctingIndex] = useState(0);
  const typeitRef = useRef(null);

  useEffect(() => {
    typeitRef.current.style.width = typeitRef.current.scrollWidth + 10 + "px";

    const reapetTyping = setInterval(() => {
      typeitRef.current.style.width = "0px";
      setTimeout(() => {
        setActiveSctingIndex((pre) => {
          if (pre == strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
        if (typeitRef.current) {
          typeitRef.current.style.width =
            typeitRef.current.scrollWidth + 10 + "px";
        }
      }, 600);
    }, 3000);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(reapetTyping);
    };
  }, []);
  return (
    <>
      <span ref={typeitRef} className="cd-words-wrapper typeanimation">
        {strings.map((elm, i) => (
          <span
            key={i}
            className={`item-text ${
              activeSctingIndex == i ? "is-visible" : "is-hidden"
            } `}
          >
            {elm}
          </span>
        ))}
      </span>
    </>
  );
}
