import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PhotoSwipe from "photoswipe";
import "photoswipe/dist/photoswipe.css";
import type { BaseProps } from "src/types/utilities";
import clsx from "clsx";

type ScreenshotGalleryProps = BaseProps & {
  screenshots: string[];
  projectName: string;
};

type ImageSize = { w: number; h: number };

export default function ScreenshotGallery({
  className,
  screenshots,
  projectName,
  ...props
}: ScreenshotGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageSizes, setImageSizes] = useState<Record<string, ImageSize>>({});
  const sizesRef = useRef(imageSizes);
  sizesRef.current = imageSizes;

  // Preload images to measure their natural dimensions
  useEffect(() => {
    screenshots.forEach((src) => {
      if (imageSizes[src]) return;
      const img = new Image();
      img.onload = () => {
        setImageSizes((prev) => ({
          ...prev,
          [src]: { w: img.naturalWidth, h: img.naturalHeight },
        }));
      };
      img.src = src;
    });
  }, [screenshots]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const openPhotoSwipe = useCallback(
    (index: number) => {
      const sizes = sizesRef.current;
      const pswp = new PhotoSwipe({
        dataSource: screenshots.map((src) => {
          const size = sizes[src];
          return {
            src,
            w: size?.w ?? 1920,
            h: size?.h ?? 1080,
          };
        }),
        index,
        bgOpacity: 0.92,
        closeOnVerticalDrag: true,
        showHideAnimationType: "fade",
      });
      pswp.init();
    },
    [screenshots],
  );

  return (
    <div className={clsx(["relative w-full h-full", className])} {...props}>
      {/* Embla carousel */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {screenshots.map((src, i) => (
            <div
              key={src}
              className="flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={src}
                alt={`${projectName} screenshot ${i + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openPhotoSwipe(i)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation — overlaid at bottom */}
      {screenshots.length > 1 && (
        <div
          className="absolute bottom-3 left-0 right-0 flex justify-center"
          style={{ gap: 8 }}
        >
          {screenshots.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background:
                  i === selectedIndex
                    ? "var(--accent)"
                    : "var(--border)",
                transition: "background .25s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
