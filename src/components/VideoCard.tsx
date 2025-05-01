
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface VideoCardProps {
  video: VideoInfo;
  onClick: (videoId: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const formattedDate = new Date(video.publishedAt).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" onClick={() => onClick(video.id)}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
          loading="lazy" 
        />
      </div>
      <CardContent className="p-4">
        <CardTitle className="text-lg line-clamp-2 mb-2">{video.title}</CardTitle>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground p-4 pt-0">
        {formattedDate}
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
