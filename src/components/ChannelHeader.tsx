
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface ChannelHeaderProps {
  channelTitle: string;
  channelDescription: string;
  channelThumbnail: string;
  subscriberCount?: string;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channelTitle,
  channelDescription,
  channelThumbnail,
  subscriberCount
}) => {
  return (
    <Card className="mb-6 overflow-hidden">
      <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="w-24 h-24 rounded-full border-2 border-primary">
          <img 
            src={channelThumbnail} 
            alt={channelTitle} 
            className="object-cover"
          />
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{channelTitle}</h1>
          {subscriberCount && (
            <p className="text-muted-foreground mb-2">{subscriberCount} подписчиков</p>
          )}
          <p className="text-muted-foreground">{channelDescription}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelHeader;
