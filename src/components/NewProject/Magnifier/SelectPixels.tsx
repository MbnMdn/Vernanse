import React, { useEffect, useRef, useState } from 'react';

import manImage from '../../../assets/man.jpeg'; // Make sure to import your image

interface Point {
  x: number;
  y: number;
}

const ImageComponent: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [magnifierVisible, setMagnifierVisible] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ left: 0, top: 0 });
  const [magnifierBgPosition, setMagnifierBgPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const zoom = 2;

  useEffect(() => {
    magnify();
  }, []);

  const magnify = () => {
    const img = imgRef.current;
    const glass = glassRef.current;

    if (!img || !glass) return;

    const moveMagnifier = (e: MouseEvent) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      const x = pos.x;
      const y = pos.y;

      // Set the position of the magnifier glass and center it on the cursor
      glass.style.left = `${x - glass.offsetWidth / 2}px`;
      glass.style.top = `${y - glass.offsetHeight / 2}px`;

      // Display what the magnifier glass "sees"
      setMagnifierBgPosition({
        x: -(x * zoom - glass.offsetWidth / 2),
        y: -(y * zoom - glass.offsetHeight / 2),
      });

      setMagnifierVisible(true);
    };

    const getCursorPos = (e: MouseEvent) => {
      const a = img.getBoundingClientRect();
      const x = e.clientX - a.left;
      const y = e.clientY - a.top;
      return { x: x - window.scrollX, y: y - window.scrollY };
    };

    img.addEventListener('mousemove', moveMagnifier);
    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mouseout', () => setMagnifierVisible(false));
    glass.addEventListener('mouseout', () => setMagnifierVisible(false));
  };

  // const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
  //   const posX = e.nativeEvent.offsetX;
  //   const posY = e.nativeEvent.offsetY;
  //
  //   if (points.length < 4) {
  //     setPoints([...points, { x: posX, y: posY }]);
  //   }
  // };

  const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;

      if (points.length < 4) {
        setPoints([...points, { x: posX, y: posY }]);
      }
    }
  };

  const clearPoints = () => {
    setPoints([]);
  };

  const getWidthAndHeight = () => {
    const img = imgRef.current;
    if (img) {
      alert(`Height: ${img.clientHeight}px, Width: ${img.clientWidth}px`);
    }
  };

  return (
    <div className="relative">
      <img
        ref={imgRef}
        id="myImgId"
        src={manImage}
        alt="Man"
        onMouseDown={getCoordinates}
        // className="cursor-pointer"
      />
      {/*{points.map((point, index) => (*/}
      {/*  <div*/}
      {/*    key={index}*/}
      {/*    className="circle absolute w-2 h-2 bg-red-500 rounded-full pointer-events-none"*/}
      {/*    style={{ left: point.x + 'px', top: point.y + 'px' }}*/}
      {/*  ></div>*/}
      {/*))}*/}
      {points.map((point, index) => (
        <div
          key={index}
          className="circle pointer-events-none absolute h-2 w-2 rounded-full bg-red-500"
          style={{ left: point.x - 4 + 'px', top: point.y - 4 + 'px' }}
        ></div>
      ))}

      <div
        ref={glassRef}
        id="magnifier"
        className={`pointer-events-none absolute cursor-none rounded-full border border-gray-300 ${
          magnifierVisible ? 'block' : 'hidden'
        }`}
        style={{
          width: '100px',
          height: '100px',
          backgroundImage: `url(${manImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgRef.current?.width! * zoom}px ${
            imgRef.current?.height! * zoom
          }px`,
          backgroundPosition: `${magnifierBgPosition.x}px ${magnifierBgPosition.y}px`,
        }}
      ></div>
      <p>Click on the image to set the coordinates.</p>
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
      <button
        type="button"
        onClick={clearPoints}
        className="mt-2 rounded bg-blue-500 p-2 text-white"
      >
        Clear
      </button>
      <div id="height" className="mt-2"></div>
      <div id="width" className="mt-2"></div>
      <button
        type="button"
        onClick={getWidthAndHeight}
        className="mt-2 rounded bg-green-500 p-2 text-white"
      >
        Get height and width
      </button>
    </div>
  );
};

export default ImageComponent;
