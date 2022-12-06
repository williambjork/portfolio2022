import React, { useState, useRef } from "react";

export default function ImageUploader() {
  const [dominantColors, setDominantColors] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    // Create a canvas element to draw the image on
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Get the image data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Calculate the dominant colors using a histogram approach
      const colorBuckets = {};
      for (let i = 0; i < data.length; i += 4) {
        // Get the RGB values for this pixel
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Convert the RGB values to a hex string
        const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

        // Increment the count for this color in the bucket
        if (colorBuckets[hex]) {
          colorBuckets[hex] += 1;
        } else {
          colorBuckets[hex] = 1;
        }
      }

      console.log("Color buckets: ", colorBuckets);

      // Sort the colors by their count in the bucket
      const sortedColors = Object.keys(colorBuckets).sort((a, b) => colorBuckets[b] - colorBuckets[a]);

      console.log("Sorted colors: ", sortedColors);

      // Take the first 3 colors from the sorted list
      const dominantColors = sortedColors.slice(0, 3);

      console.log("Dominant colors: ", dominantColors);

      // Update the state with the dominant colors
      setDominantColors(dominantColors);
    };
  }

  function handleUploadClick() {
    // Trigger a click event on the file input
    fileInput.current?.click();
  }
  
  return (
      <div style={{ backgroundColor: dominantColors[1] }}>
    <button onClick={handleUploadClick}>Upload Image</button>
      <input type="file" ref={fileInput} onChange={handleFileChange} />
      
    </div>
  );
}