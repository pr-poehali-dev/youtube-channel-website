
import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className = "",
  fallback = "CircleAlert" 
}) => {
  // Проверяем, существует ли иконка с таким именем
  const IconComponent = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];
  
  if (!IconComponent) {
    console.warn(`Иконка "${name}" не найдена и запасная иконка "${fallback}" также отсутствует`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
