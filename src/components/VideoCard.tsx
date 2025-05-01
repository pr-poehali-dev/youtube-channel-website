
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
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
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" 
      onClick={() => onClick(video.id)}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <CardTitle className="text-lg line-clamp-2 mb-2">{video.title}</CardTitle>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground p-4 pt-0 flex justify-between">
        <span>{formattedDate}</span>
        {video.viewCount && <span>{video.viewCount} просмотров</span>}
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
