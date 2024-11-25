import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import drag from '../../../assets/drag.png';

interface Point {
  x: number;
  y: number;
}

const ImageComponent: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 150, y: 150 },
    { x: 50, y: 150 },
  ]);
  const imgRef = useRef<HTMLImageElement>(null);
  const draggingPointRef = useRef<number | null>(null);

  const handleMouseDown = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    draggingPointRef.current = index;
  };

  const handleMouseUp = () => {
    draggingPointRef.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggingPointRef.current === null) return;

    const img = imgRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      let posX = e.clientX - rect.left;
      let posY = e.clientY - rect.top;

      // Ensure the points don't go outside the image
      posX = Math.max(0, Math.min(posX, rect.width));
      posY = Math.max(0, Math.min(posY, rect.height));

      const newPoints = [...points];
      newPoints[draggingPointRef.current] = { x: posX, y: posY };
      setPoints(newPoints);
    }
  };

  const clearPoints = () => {
    setPoints([
      { x: 50, y: 50 },
      { x: 150, y: 50 },
      { x: 150, y: 150 },
      { x: 50, y: 150 },
    ]);
  };

  const getWidthAndHeight = () => {
    const img = imgRef.current;
    if (img) {
      alert(`Height: ${img.clientHeight}px, Width: ${img.clientWidth}px`);
    }
  };

  return (
    <div className="flex gap-10">
      <div className="relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <img
          ref={imgRef}
          id="myImgId"
          src={drag}
          alt="Man"
          className="img-disable-pointer-events max-w-[400px]"
        />
        <svg
          width="100%"
          height="100%"
          className="absolute left-0 top-0"
          style={{ pointerEvents: 'none' }}
        >
          <polygon
            points={points.map((point) => `${point.x},${point.y}`).join(' ')}
            fill="red"
            opacity="0.2"
          />
        </svg>
        {points.map((point, index) => (
          <div
            key={index}
            className="circle absolute h-2 w-2 cursor-pointer rounded-full bg-red-500"
            style={{ left: point.x - 4 + 'px', top: point.y - 4 + 'px' }}
            onMouseDown={(e) => handleMouseDown(index, e)}
          ></div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {['First', 'Second', 'Third', 'Fourth'].map((label, index) => (
          <div key={index}>
            <p>
              <strong>{label} Point:</strong>
            </p>
            <p>
              X: <span>{points[index]?.x || ''}</span>
            </p>
            <p>
              Y: <span>{points[index]?.y || ''}</span>
            </p>
          </div>
        ))}
        <div id="height" className="mt-2"></div>
        <div id="width" className="mt-2"></div>
        <Button type={'primary'} onClick={clearPoints}>
          Clear positions
        </Button>
        <Button onClick={getWidthAndHeight}>Get height and width of the image</Button>
      </div>
    </div>
  );
};

export default ImageComponent;
