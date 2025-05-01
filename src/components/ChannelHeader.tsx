
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChannelHeaderProps {
  channelTitle: string;
  channelDescription: string;
  channelThumbnail: string;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channelTitle,
  channelDescription,
  channelThumbnail,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 p-4 bg-card rounded-lg shadow">
      <Avatar className="w-16 h-16 md:w-24 md:h-24 border-2 border-primary">
        <AvatarImage src={channelThumbnail} alt={channelTitle} />
        <AvatarFallback>{channelTitle.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{channelTitle}</h1>
        <p className="text-muted-foreground mt-2">{channelDescription}</p>
      </div>
    </div>
  );
};

export default ChannelHeader;
