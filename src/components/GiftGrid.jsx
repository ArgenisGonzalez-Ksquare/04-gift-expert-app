import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  const listItems = images.map(( img ) => (
    <GiftItem key={img.id} { ...img } />
  ));

  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Is loading... </h2>)}
      <div className="card-grid">{listItems}</div>
    </>
  );
};
