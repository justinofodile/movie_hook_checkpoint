import React, { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import validator from "validator";

import { VideoCameraAddOutlined } from "@ant-design/icons";

const CreateNewMovie = ({ setmyMovies, setRandom, memorizedMovies }) => {
  const [movieInfor, setMovieInfor] = useState({
    id: Math.random(),
    title: "",
    description: "",
    postUrl: "",
    rating: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfor((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
    // console.log(movieInfor);
  };

  const handleRate = (value) => {
    setMovieInfor((preValue) => ({
      ...preValue,
      rating: value,
    }));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // Validate movie url;
    if (!validator.isURL(movieInfor.postUrl)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid image url",
      });
      return;
    }

    // Validate movie title;
    if (validator.isEmpty(movieInfor.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid movie title",
      });
      return;
    }

    // Validate movie rating;
    if (movieInfor.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Please rate a movie",
      });
      return;
    }

    // Validate movie description;
    if (validator.isEmpty(movieInfor.description)) {
      messageApi.open({
        type: "error",
        content: "Please movie description",
      });
      return;
    }

    messageApi.open({
      type: "success",
      content: "Movie Added Successfully",
    });

    setmyMovies((preValue) => [movieInfor, ...memorizedMovies.myMomorizedMovies]);

    setRandom(Math.random)

    //Reassigns or sets movie infor to empty
    setMovieInfor({
    id: Math.random(),
    title: "",
    description: "",
    postUrl: "",
    rating: "",
    })

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        icon={<VideoCameraAddOutlined />}
        type="primary"
        onClick={showModal}
      >
        Add New Movie
      </Button>

      <Modal
        title="Add New Movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        <div className="space-y-3">
          <Input
            placeholder="Movie poster url"
            id="postUrl"
            onChange={handleInput}
            value={movieInfor.postUrl}
          />
          <div>
            <Input
              placeholder="Movie title"
              id="title"
              onChange={handleInput}
              value={movieInfor.title}
            />

            <div className="shadow my-4 rounded-md p-2 w-fit">
              <p>Rate Movie</p>
              <Rate onChange={(value) => handleRate(value)} defaultValue={1} />
            </div>
          </div>
          <Input.TextArea
            rows={4}
            placeholder="Movie decription"
            // maxLength={6}
            id="description"
            onChange={handleInput}
            value={movieInfor.description}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateNewMovie;
