// src/components/UtilityBar.tsx
"use client";

import { useState } from 'react';
import {  LeftOutlined, RightOutlined, DesktopOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';




export default function UtilityBarLayout() {
  const [utilityBarVisible, setUtilityBarVisible] = useState(true);
  const [widths, setWidths] = useState({ left: 'w-1/3', right: 'w-2/3' });
  const [utilityBarDisplay, setUtilityBarDisplay] = useState('block');
  const [rightArrowDisplay, setRightArrowDisplay] = useState('hidden');
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  const handleHideUtilityBar = () => {
    setUtilityBarVisible(false);
    setTimeout(() => {
      setUtilityBarDisplay('hidden');
      setWidths({ left: 'w-0', right: 'w-full' });
      setRightArrowDisplay('block');
    }, 1500); // 1.5 seconds to match the animation duration
  };

  const handleShowUtilityBar = () => {
    setWidths({ left: 'w-1/3', right: 'w-2/3' });
    setUtilityBarVisible(true);
    setUtilityBarDisplay('block');
    setRightArrowDisplay('hidden');
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className={`${widths.left} ${utilityBarDisplay} bg-slate-900 flex items-center justify-center rounded-md relative ${utilityBarVisible ? 'slide-in' : 'slide-out'}`}>
        <div className= 'absolute top-4 right-4'  onClick={handleHideUtilityBar} title='Hide utility bar'>
          <LeftOutlined className="text-gray-400 hover:text-white text-3xl cursor-pointer" />
        </div>
        <div className="mt-8 text-white w-full max-w-lg p-2.5">
          <h1 className='text-4xl'>Utility bar</h1>
          <h3>Add some content here</h3>
        </div>
      </div>
      <div className={`${widths.right} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-transparent text-black'} flex flex-col items-center justify-center relative`}>
        <div className={`absolute top-4 left-4 ${rightArrowDisplay}`} onClick={handleShowUtilityBar } title='Show utility bar'>
          <RightOutlined className="text-gray-400 hover:text-black text-3xl cursor-pointer" />
        </div>
        <h1 className="text-gray-400 text-6xl font-bold"><DesktopOutlined/></h1>
        <h1 className="text-gray-400 text-4xl font-bold">Your Workspace</h1>
      </div>
    </div>
  );
}