
import React from "react";

interface ChannelHeaderProps {
  channelTitle: string;
  channelDescription?: string;
  channelThumbnail?: string;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channelTitle,
  channelDescription = "Смотрите видео с YouTube без VPN",
  channelThumbnail = "https://via.placeholder.com/100",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-6 mb-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
      <div className="flex-shrink-0">
        <img 
          src={channelThumbnail} 
          alt={channelTitle} 
          className="w-20 h-20 rounded-full border-2 border-white shadow-md"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">{channelTitle}</h1>
        <p className="text-gray-600 mt-2">{channelDescription}</p>
      </div>
    </div>
  );
};

export default ChannelHeader;
