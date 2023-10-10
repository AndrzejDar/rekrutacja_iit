import React, { useEffect, useRef, useState } from "react";

const ListElement = ({ data, index, perPage, setPage }) => {
  //create ref to element
  const ref = useRef();
  //state to check if element already was in view
  const [trigered, setTrigered] = useState(false);
  //custom hook to chek inView status
  const inView = useIsInView(ref);
  // if last element in batch is in view change page (which triggers fetching further data)
  if ((index + 1) % perPage === 0) {
    if (inView && !trigered) {
      setPage((prev) => prev + 1);
      setTrigered(true);
      console.log("triger element in view");
    }
  }
  return (
    <div
      ref={ref}
      key={index}
      className="flex flex-row items-center gap-4 max-h-[300px]"
    >
      <img
        src={data?.urls?.small}
        alt=""
        className="max-h-[300px] max-w-[200px]"
      />
      <p className="font-bold text-xl">{data?.user?.name}</p>
    </div>
  );
};

export default ListElement;

//hook using intersectionObserver
function useIsInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
}
