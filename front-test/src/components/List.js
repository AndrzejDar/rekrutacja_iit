import React, { useEffect, useRef, useState } from "react";
import { fetchPhotos } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../reducers/app";
import ListElement from "./ListElement";

const List = () => {
  const [page, setPage] = useState(1);
  const perPage = 30;

  const images = useSelector((state) => state.app.list);

  const dispatch = useDispatch();

  useEffect(() => {
    getImages();
  }, [page]);

  const getImages = () => {
    console.log("getting images", perPage, "page:", page);
    fetchPhotos({ perPage: perPage, page: page }).then((res) => {
      dispatch(appSlice.actions.addToList(res.images));
      // setPage((prev) => prev + 1);
    });
  };

  return (
    <div
      style={{ minHeight: "90vh", width: "100%" }}
      className="flex flex-col gap-5 m-5"
    >
      {images.map((el, index) => (
        <ListElement
          key={index}
          data={el}
          index={index}
          perPage={perPage}
          setPage={setPage}
        />
      ))}
    </div>
  );
};

export default List;
