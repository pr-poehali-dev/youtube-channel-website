
import React from "react";
import VideoCard, { VideoInfo } from "./VideoCard";

interface VideoGalleryProps {
  videos: VideoInfo[];
  onVideoSelect: (videoId: string) => void;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, onVideoSelect }) => {
  if (videos.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-xl text-gray-500">Загрузка видео...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onClick={onVideoSelect} />
      ))}
    </div>
  );
};

export default VideoGallery;
