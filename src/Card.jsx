const Card = ({ id, w = 150, h = 150, color = "black" }) => {
  return <div id={id} draggable key={id} className="rounded-3xl mb-[10px] lg:mr-[10px] lg:mb-0" style={{height: h, width: w, background: color}}></div>;
};

export default Card;
