import { useState } from "react"
import Card from "./Card"

const Cards = ({data=[]}) => {
    const [cardsList , setCardsList] = useState(data);

    const handleDrag = (e) => {
        const xDrop = e.clientX;
        const yDrop = e.clientY;
        const card = e.target.id;
        let targetIdx;
        if(window.innerWidth < 1024) {
            targetIdx = Math.floor(yDrop/160)
        } else {
            targetIdx = Math.floor(xDrop/160)
        }
        if(targetIdx<0){
            targetIdx = 0;
        } else if(targetIdx>cardsList.length) {
            targetIdx = cardsList.length;
        }

        setCardsList((prev) => {
            let fromIndex = 0;
            const next = [...prev];
            next.filter((item, index) => {
                if(item.id === card) {
                    fromIndex = index;
                    return true;
                }
                return false;
            })

            const [item] = next.splice(fromIndex, 1);
            next.splice(targetIdx, 0, item);
            return [...next]
        })
    }

    return (
        <div onDragEnd={handleDrag} className="bg-slate-600 flex lg:flex-row p-20 flex-col  min-h-dvh lg:min-h-0.5 lg:min-w-full">
            {cardsList.map((card) => <Card key={card.id} {...card} />)}
        </div>
    )
}

export default Cards;