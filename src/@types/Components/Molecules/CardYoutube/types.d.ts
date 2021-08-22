export interface YoutubeVideoThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeVideoThumbnails {
  default: YoutubeVideoThumbnail;
  medium: YoutubeVideoThumbnail;
  high: YoutubeVideoThumbnail;
  standard: YoutubeVideoThumbnail;
  maxres: YoutubeVideoThumbnail;
}

interface YoutubeVideo {
  id: string;
  channelId: string;
  description: string;
  title: string;
  thumbnails: YoutubeVideoThumbnails;
}

interface CardYoutubeProps {
  video: YoutubeVideo;
  display?: boolean;
  onClick: (value: boolean) => any;
}

interface ICardYoutube {
  video: YoutubeVideo;
  display?: boolean;
}
