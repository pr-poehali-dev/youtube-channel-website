
import React, { useState, useEffect } from "react";
import ChannelHeader from "@/components/ChannelHeader";
import VideoGallery from "@/components/VideoGallery";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { VideoInfo } from "@/components/VideoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// В реальном проекте нужно будет заменить моками на настоящий API для получения данных
const CHANNEL_ID = "UCIY1zZL_qLcDtjl2XDS-LtQ";

// Временные моки для демонстрации
const mockVideos: VideoInfo[] = [
  {
    id: "video1",
    title: "Пример видео 1 - React и TypeScript (Демо)",
    thumbnail: "https://images.unsplash.com/photo-1626398308752-1140a954de4d?q=80&w=400&auto=format",
    publishedAt: "2025-04-20T14:30:00Z",
    viewCount: "1.2K",
  },
  {
    id: "video2",
    title: "Пример видео 2 - Разработка веб-приложений в 2025 году",
    thumbnail: "https://images.unsplash.com/photo-1606103920295-9a091b4af98b?q=80&w=400&auto=format",
    publishedAt: "2025-04-15T10:00:00Z",
    viewCount: "845",
  },
  {
    id: "video3",
    title: "Пример видео 3 - Интересный контент",
    thumbnail: "https://images.unsplash.com/photo-1598550473160-9c672c09a393?q=80&w=400&auto=format",
    publishedAt: "2025-04-10T08:45:00Z",
    viewCount: "3.5K",
  },
  {
    id: "video4",
    title: "Пример видео 4 - Узнайте больше о программировании",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format",
    publishedAt: "2025-04-05T16:20:00Z",
    viewCount: "965",
  },
  {
    id: "video5",
    title: "Пример видео 5 - Новые технологии",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format",
    publishedAt: "2025-03-28T12:15:00Z",
    viewCount: "1.8K",
  },
  {
    id: "video6",
    title: "Пример видео 6 - Удивительные факты о программировании",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&auto=format",
    publishedAt: "2025-03-20T09:10:00Z",
    viewCount: "2.3K",
  },
];

// URL-ссылки для видео (заглушки)
const videoUrls: Record<string, string> = {
  video1: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  video2: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  video3: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  video4: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  video5: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  video6: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
};

const YouTubeChannel: React.FC = () => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [popularVideos, setPopularVideos] = useState<VideoInfo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [channelInfo, setChannelInfo] = useState({
    title: "Загрузка...",
    description: "Загрузка информации о канале...",
    thumbnail: "https://images.unsplash.com/photo-1534131954808-ca6cb9a9af96?q=80&w=100&auto=format",
    subscriberCount: "",
  });

  useEffect(() => {
    // Здесь в будущем будет запрос к реальному API для получения видео
    // Пока используем мок-данные для демонстрации
    const fetchChannelData = async () => {
      try {
        setIsLoading(true);
        
        // Имитация задержки загрузки данных
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Имитация загрузки видео
        setVideos(mockVideos);
        
        // Имитация загрузки популярных видео
        // Сортируем по количеству просмотров (в реальности будут данные из API)
        const popular = [...mockVideos].sort((a, b) => {
          const viewsA = parseInt(a.viewCount?.replace(/[^\d]/g, '') || '0');
          const viewsB = parseInt(b.viewCount?.replace(/[^\d]/g, '') || '0');
          return viewsB - viewsA;
        }).slice(0, 4);
        
        setPopularVideos(popular);
        
        // Устанавливаем первое видео как выбранное
        if (mockVideos.length > 0) {
          setSelectedVideo(mockVideos[0]);
        }
        
        // Имитация получения информации о канале
        setChannelInfo({
          title: "Мой YouTube Канал",
          description: "Официальный сайт для просмотра видео с YouTube-канала без VPN. Здесь вы найдёте все видео с канала UCIY1zZL_qLcDtjl2XDS-LtQ.",
          thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=100&auto=format",
          subscriberCount: "10,5K",
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке данных канала:", error);
        setIsLoading(false);
      }
    };

    fetchChannelData();
  }, []);

  const handleVideoSelect = (videoId: string) => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <ChannelHeader 
          channelTitle={channelInfo.title}
          channelDescription={channelInfo.description}
          channelThumbnail={channelInfo.thumbnail}
          subscriberCount={channelInfo.subscriberCount}
        />

        {selectedVideo && (
          <div className="mb-8">
            <CustomVideoPlayer 
              videoUrl={videoUrls[selectedVideo.id] || ""}
              title={selectedVideo.title}
            />
            <h2 className="text-2xl font-bold mt-4 mb-2">{selectedVideo.title}</h2>
            <p className="text-muted-foreground">
              Опубликовано: {new Date(selectedVideo.publishedAt).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {selectedVideo.viewCount && ` • ${selectedVideo.viewCount} просмотров`}
            </p>
          </div>
        )}

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все видео</TabsTrigger>
            <TabsTrigger value="popular">Популярные</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <h2 className="text-2xl font-bold mb-4">Все видео</h2>
            <VideoGallery 
              videos={videos} 
              onVideoSelect={handleVideoSelect} 
              isLoading={isLoading}
            />
          </TabsContent>
          
          <TabsContent value="popular">
            <h2 className="text-2xl font-bold mb-4">Популярные видео</h2>
            <VideoGallery 
              videos={popularVideos} 
              onVideoSelect={handleVideoSelect} 
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default YouTubeChannel;
