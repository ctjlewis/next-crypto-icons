import { FC } from 'react';
import ImageModule from 'next/image';

/**
 * Shipping CJS is terrible and you shouldn't do it.
 */
// @ts-ignore
const { default: Image } = ImageModule;

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
