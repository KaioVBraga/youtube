import type { NextPage } from "next";
import React, { useState, useCallback, useEffect } from "react";
import { YoutubeVideoResponse } from "../../@types/Pages/Home/types";
import CardYoutube from "../../components/Molecules/CardYoutube";
import SearchBar from "../../components/Molecules/SearchBar";
import TemplateHome from "../../components/Templates/Home";
import api from "../../services/apis";
import { API_YOUTUBE_KEY, exampleVideoIds } from "../../utils/constants";

const Home: NextPage = () => {
  const [videos, setVideos] = useState([]);
  const [videoIds, setVideoIds] = useState(exampleVideoIds.toString());

  const initialLoad = useCallback(async () => {
    const { items } = (
      await api.get("videos", {
        params: {
          key: API_YOUTUBE_KEY,
          part: "snippet",
          type: "video",
          id: videoIds,
          maxResults: 10,
        },
      })
    ).data;

    const newVideos = items.map((item: YoutubeVideoResponse) => ({
      id: item.id,
      channelId: item.snippet.channelId,
      description: item.snippet.description,
      title: item.snippet.title,
      thumbnails: item.snippet.thumbnails,
    }));

    setVideos(newVideos);
  }, [videoIds]);

  useEffect(() => {
    initialLoad();
  }, [initialLoad]);

  return (
    <TemplateHome>
      <SearchBar search={videoIds} onChange={setVideoIds} />

      {videos.map((video, index) => (
        <CardYoutube key={index} video={video} />
      ))}
    </TemplateHome>
  );
};

export default Home;
