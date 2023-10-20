import React, { memo, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { moivesService } from "../../services/movieLists";
import { URL_IMAGE } from "../../constant/urlImgae";
import LoadingIcon from "../../component/loading";
import { MoiveDetail } from "../../types/movieType";

export const ProductDetail = () => {
  const productId: any = useParams();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [detail, setDetail] = useState<MoiveDetail>();

  const getListMovies = async () => {
    try {
      setIsloading(true);
      const resp = await moivesService.getMoviesDetail(productId.id);
      setDetail(resp.data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getListMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <div>
          <h1 className="title"> Movie detail </h1>
          <div className="product">
            <div className="product-image">
              <img
                src={`${URL_IMAGE}${detail?.backdrop_path}`}
                alt="Product Image"
              />
            </div>
            <div className="product-info">
              <h2 className="product-title">{detail?.title}</h2>
              <p className="product-description">{detail?.overview}</p>
              <p className="product-description">
                Release date : {detail?.release_date}
              </p>
              <p className="product-description">
                Run time : {detail?.runtime} minutes
              </p>
              <p className="product-description">
                Tag line : {detail?.tagline}
              </p>
              <div className="product-buy">
                <p className="product-price">{detail?.vote_average} like</p>
                <button className="product-buy-ticket">Buy ticket</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProductDetail);
