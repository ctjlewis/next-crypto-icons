import { FC } from 'react';
import Image from 'next/image';

interface CryptoIconProps {
  name: string;
  style?: 'black' | 'color' | 'icon' | 'white';
  width?: number;
  height?: number;
}

export const CryptoIcon: FC<CryptoIconProps> = ({
  name,
  style = 'black',
  height = 32,
  width = 32,
}) => {
  return (
    <Image
      src={`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/${style}/${name}.svg`}
      height={height}
      width={width}
    />
  );
};
