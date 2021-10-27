import { FC } from "react";
import Image from 'next/image';
interface CryptoIconProps {
  name: string;
  style?: 'black' | 'color' | 'icon' | 'white';
  size?: {
    height: number;
    width: number;
  };
}

export const CryptoIcon: FC<CryptoIconProps> = ({
  name,
  style = 'black',
  size = {
    height: 32,
    width: 32,
  },
}) => {
  return (
    <Image
      src={`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/${style}/${name}.svg`}
      {...size}
    />
  );
}