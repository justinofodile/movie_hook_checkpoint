import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const MovieCard = ({ id, title, postUrl, description, rating }) => (
  //This card displayes our movie cards
  <Link to={`${id}`}>
    <Card
      hoverable
      cover={
        <img
          width={200}
          height={400}
          alt="example"
          className="object-cover space-y-3"
          src={postUrl}
        />
      }
    >
      {/* <Meta title={title} description={description.slice(1, 30)} /> */}
      <Meta title={title} description={description} />
      <Rate disabled defaultValue={rating} />
    </Card>
  </Link>
);
export default MovieCard;
