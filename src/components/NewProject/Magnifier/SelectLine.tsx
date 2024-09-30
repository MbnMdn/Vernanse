import { Button } from 'antd';
import React, { useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

const SelectLine: React.FC = () => {
  const [points, setPoints] = useState<Point[][]>([
    [
      { x: 50, y: 50 },
      { x: 150, y: 150 },
    ],
  ]);
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const draggingPointRef = useRef<{ lineIndex: number; pointIndex: number } | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleMouseDown = (
    lineIndex: number,
    pointIndex: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    draggingPointRef.current = { lineIndex, pointIndex };
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
      newPoints[draggingPointRef.current.lineIndex][draggingPointRef.current.pointIndex] =
        { x: posX, y: posY };
      setPoints(newPoints);
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

  const addNewLine = () => {
    const newLine: Point[] = [
      { x: 50, y: 50 },
      { x: 150, y: 150 },
    ];
    setPoints([...points, newLine]);
  };

  const fileUploadHandler = async () => {
    if (file) {
      console.log('uploading...');

      const formData = new FormData();
      formData.append('file', file);

      points.forEach((line, lineIndex) => {
        formData.append(`line_${lineIndex}_first_point_x`, line[0].x.toString());
        formData.append(`line_${lineIndex}_first_point_y`, line[0].y.toString());
        formData.append(`line_${lineIndex}_second_point_x`, line[1].x.toString());
        formData.append(`line_${lineIndex}_second_point_y`, line[1].y.toString());
      });

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
          {/* Draw lines connecting each pair of points */}
          {points.map((line, lineIndex) => (
            <line
              key={lineIndex}
              x1={line[0].x}
              y1={line[0].y}
              x2={line[1].x}
              y2={line[1].y}
              stroke="red"
              strokeWidth="2"
            />
          ))}
        </svg>
        {points.map((line, lineIndex) =>
          line.map((point, pointIndex) => (
            <div
              key={`${lineIndex}-${pointIndex}`}
              className="circle absolute h-2 w-2 cursor-pointer rounded-full bg-red-500"
              style={{ left: point.x - 4 + 'px', top: point.y - 4 + 'px' }}
              onMouseDown={(e) => handleMouseDown(lineIndex, pointIndex, e)}
            ></div>
          )),
        )}
      </div>

      <div className="flex flex-col gap-2">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {points.map((line, lineIndex) => (
          <div key={lineIndex}>
            <p>
              <strong>Line {lineIndex + 1}:</strong>
            </p>
            {line.map((point, pointIndex) => (
              <p key={pointIndex}>
                {pointIndex === 0 ? 'First' : 'Second'} Point - X: {point.x}, Y: {point.y}
              </p>
            ))}
          </div>
        ))}
        <Button type="primary" onClick={addNewLine}>
          Add New Line
        </Button>
        <Button type={'primary'} onClick={fileUploadHandler}>
          Send Data
        </Button>
      </div>
    </div>
  );
};

export default SelectLine;
