import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState, useCallback, useEffect } from "react";
import { ICardYoutube } from "../@types/Components/Molecules/CardYoutube/types";
import { YoutubeVideoResponse } from "../@types/Pages/Home/types";
import CardYoutube from "../components/Molecules/CardYoutube";
import SearchBar from "../components/Molecules/SearchBar";
import TemplateHome from "../components/Templates/Home";
import api from "../services/apis";
import { API_YOUTUBE_KEY, exampleVideoIds } from "../utils/constants";

const Home: NextPage = () => {
  const [videos, setVideos] = useState<ICardYoutube[]>([]);
  // const [videoIds, setVideoIds] = useState(exampleVideoIds.toString());
  const [videoIds, setVideoIds] = useState("");

  const router = useRouter();

  const handleDisplay = useCallback(
    (display, index) => {
      const newVideos = [...videos];
      newVideos[index].display = display;
      setVideos(newVideos);
    },
    [videos]
  );

  const getVideos = useCallback(async (idsSearch = "") => {
    try {
      const { items } = (
        await api.get("videos", {
          params: {
            key: API_YOUTUBE_KEY,
            part: "snippet",
            type: "video",
            id: idsSearch,
            maxResults: 10,
          },
        })
      ).data;

      const newVideos = items.map((item: YoutubeVideoResponse) => ({
        video: {
          id: item.id,
          channelId: item.snippet.channelId,
          description: item.snippet.description,
          title: item.snippet.title,
          thumbnails: item.snippet.thumbnails,
        },
        display: false,
      }));

      setVideos(newVideos);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const { ids } = router.query;

    if (!ids) {
      return;
    }

    const idsSearch = ids.toString();

    getVideos(idsSearch);
    setVideoIds(idsSearch);
  }, [router, getVideos]);

  return (
    <TemplateHome>
      <SearchBar
        search={videoIds}
        onChange={setVideoIds}
        doSearch={() => getVideos(videoIds)}
      />

      {videos.map((video, index) => (
        <CardYoutube
          key={index}
          video={video.video}
          display={video.display}
          onClick={(display) => handleDisplay(display, index)}
        />
      ))}
    </TemplateHome>
  );
};

export default Home;
