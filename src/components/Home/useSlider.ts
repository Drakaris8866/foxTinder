import React, { useEffect, useRef, useState } from "react";
import { IUser } from "../../shared/types/user.interface";
import { IUserForCard } from "../../store/users/users.types";
import { useActions } from "../../hooks/useActions";
import { CarouselRef } from "antd/es/carousel";

export const useSlider = (
  user: IUser | null,
  users: IUserForCard[] | null,
  items: any
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<ISlider | null>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  let width: number = 0;

  const { updateUserDislikeInfo, updateUserLikeInfo } = useActions();

  interface ISlider extends HTMLDivElement, CarouselRef{
    next(): void
  }

  function next() {
    setCurrentSlide((prevState) => prevState + 1);
    rollSlider();
  }


  function dislike() {
    if (sliderRef.current) {
      sliderRef.current.next();
      setCurrentSlide((prev) => prev + 1);
      if (users) {
        updateUserDislikeInfo({
          usersId: [users[currentSlide]._id],
          userId: user!._id,
        });
      }
    }
  }

  function like() {
    if (sliderRef.current) {
      sliderRef.current.next();
      setCurrentSlide((prev) => prev + 1);
      if (users) {
        updateUserLikeInfo({
          usersId: [users[currentSlide]._id],
          userId: user!._id,
        });
      }
    }
  }

  function rollSlider() {
    console.log(currentSlide);
    console.log(width);

    // console.log(currentSlide * width);

    if (sliderLineRef.current) {
      sliderLineRef.current.style.transform =
        "translate(-" + currentSlide * width + "px)";
    }
  }

  return {
    refs: {
      sliderRef,
      sliderLineRef,
    },
    actions: {
      next,
      like,
      dislike
    },
  };
};
