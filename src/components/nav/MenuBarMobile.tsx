import React from 'react';
import { FiMenu as Icon } from 'react-icons/fi';

import Logo from '../../assets/Logo';

// @ts-ignore
export default function MenuBarMobile({ setter }) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex h-[60px] bg-black px-2 md:hidden [&>*]:my-auto">
      <button
        className="flex text-4xl text-white"
        onClick={() => {
          setter((oldVal: any) => !oldVal);
        }}
      >
        <Icon />
      </button>

      <Logo />
    </nav>
  );
}
