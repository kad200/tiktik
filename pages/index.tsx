import type { NextPage } from "next";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import { Video } from "../types";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  const router = useRouter();
  const { topic }: any = router.query;

  return (
    <>
      <Head>
        <title>
          {topic ? `${topic[0].toUpperCase() + topic.slice(1)}` : "TikTik"}
        </title>
      </Head>
      <div className="flex flex-col gap-10 videos h-full">
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResults
            text={topic ? `No videos for the ${topic} topic` : "No videos"}
          />
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;

  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;
