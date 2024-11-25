import { Button } from 'antd';
import React, { useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

const UploadImg: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 150, y: 150 },
    { x: 50, y: 150 },
  ]);
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const draggingPointRef = useRef<number | null>(null);
  const [file, setFile] = useState<File | null>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile) {
      setFile(newFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(newFile);
    }
  };

  const fileUploadHandler = async () => {
    if (file) {
      console.log('uploading...');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('first_point_x', points[0].x.toString());
      formData.append('first_point_y', points[0].y.toString());
      formData.append('second_point_x', points[1].x.toString());
      formData.append('second_point_y', points[1].y.toString());
      formData.append('third_point_x', points[2].x.toString());
      formData.append('third_point_y', points[2].y.toString());
      formData.append('forth_point_x', points[3].x.toString());
      formData.append('forth_point_y', points[3].y.toString());

      formData.append('image_width', '400');
      formData.append('image_height', imgRef.current!.clientHeight.toString());

      try {
        const result = await fetch('http://192.168.40.55:5000/', {
          method: 'POST',
          body: formData,
        });

        const data = await result.json();

        console.log(data);

        if (data.status === 'ERROR') {
          alert(data.result);
          return;
        }

        alert(
          'Width: ' +
            data.result[2].toFixed(2) +
            'cm' +
            '\n' +
            'Height: ' +
            data.result[3].toFixed(2) +
            'cm',
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex gap-10">
      <div className="relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        {selectedImage ? (
          <img
            ref={imgRef}
            id="myImgId"
            src={selectedImage as string}
            alt="Uploaded"
            className="img-disable-pointer-events max-w-[400px]"
          />
        ) : (
          <div className="flex h-[400px] w-[400px] flex-col items-center justify-center border-2 border-dashed border-gray-400">
            <p className="text-gray-500">No image uploaded</p>
          </div>
        )}
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
        <input type="file" accept="image/*" onChange={handleFileChange} />
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
        {/*<Button type={'primary'} onClick={clearPoints}>*/}
        {/*  Clear positions*/}
        {/*</Button>*/}
        <Button type={'primary'} onClick={fileUploadHandler}>
          send data
        </Button>
        {/*<Button onClick={getWidthAndHeight}>Get height and width of the image</Button>*/}
      </div>
    </div>
  );
};

export default UploadImg;
