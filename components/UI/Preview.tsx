import React from "react";
import { Media } from "../../types/media";
import Image from "next/image";

type Props = {
  className?: string;
  mediaType?: Media;
  multiple?: boolean;
  src?: string;
};

export const Preview: React.FC<Props> = ({
  className,
  mediaType = Media.IMAGE,
  multiple = false,
  src,
}) => {
  return (
    <div className={className}>
      <Image
        src={src || "https://source.unsplash.com/random"}
        alt={"Image"}
        fill
      />
    </div>
  );
};
