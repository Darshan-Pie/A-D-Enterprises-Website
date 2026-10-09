import Image from 'next/image';
import { brandAssets } from '@/lib/brand';

type BrandLogoVariant = keyof typeof brandAssets.logo;

const logoDimensions: Record<BrandLogoVariant, { width: number; height: number }> = {
  primary: { width: 1774, height: 887 },
  primaryLight: { width: 1774, height: 887 },
  mark: { width: 1135, height: 565 },
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
      alt={variant === 'mark' ? 'A.D. Enterprises monogram' : 'A.D. Enterprises logo'}
      width={width}
      height={Math.round(width * dimensions.height / dimensions.width)}
      sizes={sizes ?? `${width}px`}
      quality={95}
      priority={priority}
    />
  );
}
