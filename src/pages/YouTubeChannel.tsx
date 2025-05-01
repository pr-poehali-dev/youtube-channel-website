
import React, { useState, useEffect } from "react";
import ChannelHeader from "@/components/ChannelHeader";
import VideoGallery from "@/components/VideoGallery";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { VideoInfo } from "@/components/VideoCard";

// В реальном проекте нужно будет заменить моками на настоящий API для получения данных
const CHANNEL_ID = "UCIY1zZL_qLcDtjl2XDS-LtQ";

// Временные моки для демонстрации
const mockVideos: VideoInfo[] = [
  {
    id: "eIrMbAQSU34",
    title: "Пример видео 1 - React и TypeScript (Демо)",
    thumbnail: "https://images.unsplash.com/photo-1626398308752-1140a954de4d?q=80&w=400&auto=format",
    publishedAt: "2025-04-20T14:30:00Z",
  },
  {
    id: "0riHps91aE0",
    title: "Пример видео 2 - Разработка веб-приложений в 2025 году",
    thumbnail: "https://images.unsplash.com/photo-1606103920295-9a091b4af98b?q=80&w=400&auto=format",
    publishedAt: "2025-04-15T10:00:00Z",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Пример видео 3 - Интересный контент",
    thumbnail: "https://images.unsplash.com/photo-1598550473160-9c672c09a393?q=80&w=400&auto=format",
    publishedAt: "2025-04-10T08:45:00Z",
  },
  {
    id: "uXWijRcuDGI",
    title: "Пример видео 4 - Узнайте больше о программировании",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format",
    publishedAt: "2025-04-05T16:20:00Z",
  }
];

const YouTubeChannel: React.FC = () => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [channelInfo, setChannelInfo] = useState({
    title: "Название канала",
    description: "Смотрите видео без VPN",
    thumbnail: "https://images.unsplash.com/photo-1534131954808-ca6cb9a9af96?q=80&w=100&auto=format"
  });

  useEffect(() => {
    // Здесь в будущем будет запрос к реальному API для получения видео
    // Пока используем мок-данные для демонстрации
    const fetchVideos = async () => {
      try {
        // Имитация загрузки
        setTimeout(() => {
          setVideos(mockVideos);
          if (mockVideos.length > 0) {
            setSelectedVideo(mockVideos[0].id);
          }
        }, 1000);
        
        // Имитация получения информации о канале
        setChannelInfo({
          title: "Мой YouTube Канал",
          description: "Смотрите видео без использования VPN",
          thumbnail: "https://images.unsplash.com/photo-1534131954808-ca6cb9a9af96?q=80&w=100&auto=format"
        });
      } catch (error) {
        console.error("Ошибка при загрузке видео:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideo(videoId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ChannelHeader 
        channelTitle={channelInfo.title}
        channelDescription={channelInfo.description}
        channelThumbnail={channelInfo.thumbnail}
      />

      {selectedVideo && (
        <div className="mb-8">
          <YouTubeEmbed videoId={selectedVideo} />
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">Все видео</h2>
      <VideoGallery videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default YouTubeChannel;
