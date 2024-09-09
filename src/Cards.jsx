import { useState } from "react";
import Card from "./Card";

const Cards = ({ data = [] }) => {
  const [cardsList, setCardsList] = useState(data);
  const [cardId, setCardId] = useState("");

  const getToIndex = (list = [], id = "", x = 0, y = 0) => {
    let targetIdx;
    if (window.innerWidth < 1024) {
      targetIdx = Math.floor(y / 160);
    } else {
      targetIdx = Math.floor(x / 160);
    }
    if (targetIdx < 0) {
      targetIdx = 0;
    } else if (targetIdx > list.length) {
      targetIdx = list.length;
    }

    return targetIdx;
  };

  const getFromIndex = (list = [], id = "") => {
    let sourceIdx;
    list.filter((item, index) => {
      if (item.id === id) {
        sourceIdx = index;
        return true;
      }
      return false;
    });
    return sourceIdx;
  };

  const handleDrag = (e) => {
    const xDrop = e.clientX;
    const yDrop = e.clientY;
    const card = e.target.id;

    const toIndex = getToIndex(cardsList, card, xDrop, yDrop);

    setCardsList((prev) => {
      const next = [...prev];
      const fromIndex = getFromIndex(next, card);

      const [item] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, item);
      return [...next];
    });
    setCardId("");
  };

  const handleDragging = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    //e.target can change while onDragOver so use cardId from onDragStart
    e.preventDefault();
    e.stopPropagation();
    const toIndex = getToIndex(cardsList, cardId, x, y);

    setCardsList((prev) => {
      const next = [...prev];
      const fromIndex = getFromIndex(next, cardId);

      const [item] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, item);
      return [...next];
    });
  };

  return (
    <div
      onDragStart={(e) => {
        setCardId(e.target.id);
      }}
      onDragOver={handleDragging}
      onDragEnd={handleDrag}
      className="bg-stone-800 flex lg:flex-row p-20 flex-col  min-h-dvh min-w-full items-center"
    >
      {cardsList.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;