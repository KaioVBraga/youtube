import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState, useCallback, useEffect } from "react";
import { ICardYoutube } from "../../@types/Components/Molecules/CardYoutube/types";
import { YoutubeSearchResponse } from "../../@types/Pages/Home/types";
import CardYoutube from "../../components/Molecules/CardYoutube";
import SearchBar from "../../components/Molecules/SearchBar";
import TemplateHome from "../../components/Templates/Home";
import api from "../../services/apis";

const Home: NextPage = () => {
  const [videos, setVideos] = useState<ICardYoutube[]>([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleDisplay = useCallback(
    (display, index) => {
      const newVideos = [...videos];
      newVideos[index].display = display;
      setVideos(newVideos);
    },
    [videos]
  );

  const doSearch = useCallback(async (search) => {
    try {
      if (!search) {
        return;
      }

      const { items } = (
        await api.get("search", {
          params: {
            part: "snippet",
            type: "video",
            q: search,
            maxResults: 10,
          },
        })
      ).data;

      const newVideos = items.map((item: YoutubeSearchResponse) => ({
        video: {
          id: item.id.videoId,
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
    const { q } = router.query;

    if (!q) {
      return;
    }

    const qSearch = q.toString();

    doSearch(qSearch);
    setSearch(qSearch);
  }, [router, doSearch]);

  return (
    <TemplateHome>
      <SearchBar search={search} onChange={setSearch} doSearch={doSearch} />

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
