import React, { memo } from "react";
import "./index.scss";
import { URL_IMAGE } from "../../constant/urlImgae";
import { Movie } from "../../types/movieType";

interface MyComponentProps {
  data: Movie;
}
export const Card: React.FC<MyComponentProps> = (props) => {
  const img = props.data.backdrop_path;
  const id = props.data.id;
  const title = props.data.title;
  const vote = props.data.vote_count;
  const overView = props.data.overview;
  return (
    <section className="blog-card">
      <img src={`${URL_IMAGE}${img}`} alt="err" />
      <div className="blog-content">
        <p className="blog-label">{vote} Like</p>
        <h1 className="blog-title">
          {title.length > 15 ? `${title.slice(0, 16)} ...` : title}
        </h1>
        <p className="blog-view">{overView.slice(0, 120)} ...</p>
        <div className="author">
          <a href={`/products/${id}`}>
            <button className="btn">See details</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default memo(Card);
