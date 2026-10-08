import Image from 'next/image';
import { brandAssets } from '@/lib/brand';

type BrandLogoVariant = keyof typeof brandAssets.logo;

const logoDimensions: Record<BrandLogoVariant, { width: number; height: number }> = {
  primary: { width: 4096, height: 2813 },
  primaryLight: { width: 4096, height: 2813 },
  mark: { width: 2048, height: 1640 },
  markLight: { width: 2048, height: 1640 },
};

export default function BrandLogo({
  variant = 'primary',
  width,
  className,
  sizes,
  priority = false,
}: {
  variant?: BrandLogoVariant;
  width: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const dimensions = logoDimensions[variant];

  return (
    <Image
      className={className}
      src={brandAssets.logo[variant]}
      alt="A.D. Enterprises"
      width={width}
      height={Math.round(width * dimensions.height / dimensions.width)}
      sizes={sizes ?? `${width}px`}
      quality={95}
      priority={priority}
    />
  );
}
