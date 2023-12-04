import React, { useEffect, useState } from "react";
import movies from "../data";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

const MovieDetails = () => {
  const { movId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const findMovieById = () => {
    let movie = movies.find((item) => item.id === movId);
    setMovie(movie);
    return movie;
  };

  //   movies.map((item) => console.log(item));

  //   console.log(findMovieById());

  useEffect(() => {
    findMovieById();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <h3>Getting Movie Info......</h3>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-2 my-10 flex justify-around items-center gap-1 py-4 shadow-xl">
      <Card
        hoverable
        style={{
          width: 250,
        }}
        cover={
          <img height={200} width={100} alt="Movie Image" src={movie.postUrl} />
        }
      >
        <Meta title={movie.title} description={movie.description} />
      </Card>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={movie.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;

{
  /* <div className="aspect-w-16 aspect-h-9">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/watch?v=hX0Qa88ffSw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>; */
}
