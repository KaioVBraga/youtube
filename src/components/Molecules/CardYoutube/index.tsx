import React, { useEffect, useState } from "react";
import Image from "next/image";
import YoutubeWave from "@u-wave/react-youtube";
import { Container } from "./styles";
import { CardYoutubeProps } from "../../../@types/Components/Molecules/CardYoutube/types";

const CardYoutube: React.FC<CardYoutubeProps> = (props) => {
  return (
    <Container
      width={props.video.thumbnails.high.width}
      height={props.video.thumbnails.high.height}
    >
      {!props.display ? (
        <Image
          src={props.video.thumbnails.high.url}
          width={props.video.thumbnails.high.width}
          height={props.video.thumbnails.high.height}
          onClick={() => props.onClick(true)}
          alt={props.video.title || ""}
        />
      ) : (
        <YoutubeWave
          id="youtube-player"
          onError={() =>
            alert("An error ocurred while trying to reproduce the video")
          }
          autoplay={true}
          video={props.video.id}
          width={props.video.thumbnails.high.width}
          height={props.video.thumbnails.high.height}
        />
      )}
    </Container>
  );
};

export default CardYoutube;
