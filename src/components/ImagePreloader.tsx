import { useEffect } from "react";
import { products } from "@/data/products";

const ImagePreloader = () => {
    useEffect(() => {
        // Only start preloading after the main page has fully loaded and is idle
        const preloadImages = async () => {
            // Get all unique image URLs from the products data
            const imageUrls = Array.from(
                new Set(products.flatMap((p) => p.images))
            );

            console.log(`Starting background cache for ${imageUrls.length} assets...`);

            // Function to fetch an image and store it in browser cache
            const cacheImage = (url: string) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = url;
                });
            };

            // Batch the preloading to avoid overwhelming the network
            const batchSize = 5;
            for (let i = 0; i < imageUrls.length; i += batchSize) {
                const batch = imageUrls.slice(i, i + batchSize);
                await Promise.allSettled(batch.map(cacheImage));
                // Small delay between batches to keep main thread smooth
                await new Promise((r) => setTimeout(r, 100));
            }

            console.log("Background asset caching complete.");
        };

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(() => preloadImages());
        } else {
            setTimeout(preloadImages, 3000);
        }
    }, []);

    return null; // This component doesn't render anything
};

export default ImagePreloader;
