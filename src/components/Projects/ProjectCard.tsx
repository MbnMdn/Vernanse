import React from 'react';
import Progressbar from "./Progressbar";
import { Button } from "antd";

export default function ProjectCard() {
  return (
    <div className="bg-neutral-300 w-1/4 rounded-lg flex flex-col items-center p-10">
      <p >Darman Project</p>
      <Progressbar />
      <Button type="primary" className="bg-tertiary">Open</Button>
    </div>
  );
}
