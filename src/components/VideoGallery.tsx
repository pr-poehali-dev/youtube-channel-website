
import React from "react";
import VideoCard, { VideoInfo } from "./VideoCard";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoGalleryProps {
  videos: VideoInfo[];
  onVideoSelect: (videoId: string) => void;
  isLoading?: boolean;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ 
  videos, 
  onVideoSelect,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="aspect-video w-full rounded-md" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-xl text-gray-500">Видео не найдены</p>
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
