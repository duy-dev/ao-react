import React, { useEffect, useState } from "react";
import PostRepository, { IPost } from "@/modules/home/home.repository";
import "./style.scss";

const Dashboard: React.FC = () => {
  const [post, setPostList] = useState<IPost[]>();
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const { data } = await PostRepository.all(params);
        console.log(data[1].body);
      } catch (error) {}
    };

    const fetchPost = async (id: string) => {
      try {
        const { data } = await PostRepository.find(id, {});
        console.log(data);
      } catch (error) {}
    };

    const createPost = async () => {
      try {
        const postCreate: IPost = {
          userId: 2,
          id: 18,
          title: "voluptate et itaque vero tempora molestiae",
          body: "Duy test",
        };
        const { data } = await PostRepository.create(postCreate, {});
        console.log(data);
      } catch (error) {}
    };

    const updatePost = async (id: string) => {
      try {
        const postUpdate: IPost = {
          userId: 2,
          id: 18,
          title: "voluptate et itaque vero tempora molestiae",
          body: "Duy test 2",
        };
        const { data } = await PostRepository.update(id, postUpdate, {});
        console.log(data);
      } catch (error) {}
    };

    const deletePost = async (id: string) => {
      try {
        const { data } = await PostRepository.delete(id, {});
        console.log(data);
      } catch (error) {}
    };

    updatePost("18");
  }, []);
  return (
    <section id="ao-dashboard">
      <div className="test">
        <h1>Page DashBoard</h1>
      </div>
    </section>
  );
};

export default Dashboard;
