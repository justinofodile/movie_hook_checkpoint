import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;
const MovieCard = ({ title, postUrl, description, rating }) => (
    //This card displayes our movie cards
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
);
export default MovieCard;
