// src/app/upload/page.tsx
"use client";

import { useState } from 'react';
import { InboxOutlined, LeftOutlined, RightOutlined, DesktopOutlined } from '@ant-design/icons';
import { message, Upload, Radio,  Button } from 'antd';
import type { UploadProps } from 'antd';
import CreateSpaceModal from '@/components/modals/CreateSpaceModal';

const { Dragger } = Upload;

const draggerProps: UploadProps = {
  name: 'file',
  multiple: true,
  action: '/api/upload', // Update the action URL to your API endpoint
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function UploadPage() {
  const [utilityBarVisible, setUtilityBarVisible] = useState(true);
  const [widths, setWidths] = useState({ left: 'w-1/3', right: 'w-2/3' });
  const [utilityBarDisplay, setUtilityBarDisplay] = useState('block');
  const [rightArrowDisplay, setRightArrowDisplay] = useState('hidden');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className={`${widths.left} ${utilityBarDisplay} bg-slate-900 flex flex-col items-center justify-center rounded-md relative ${utilityBarVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="absolute top-4 right-4" onClick={handleHideUtilityBar} title="Hide utility bar">
          <LeftOutlined className="text-gray-400 hover:text-white text-3xl cursor-pointer" />
        </div>

        <div className="mt-8 w-full max-w-lg p-2.5 text-white">
          <h2 className="text-2xl font-bold mb-4 text-gray-400">My Spaces</h2>
          
            <form className='text-gray-400 mb-4'>
            <Radio.Group className='text-gray-400'>
              <Radio className='text-gray-400' value="biology">Biology</Radio>
              <Radio className='text-gray-400' value="literature" >Literature</Radio>
              <Radio className='text-gray-400' value="geography">Geography</Radio>
              <Radio className='text-gray-400' value="physics">Physics</Radio>
            </Radio.Group>
            </form>
            <Button type="primary" className="custom-button mb-4" onClick={handleOpenModal}  ghost>
            
            Create Space
            </Button>
        </div>

        <div className="mt-8 w-full max-w-lg p-2.5">
          <Dragger {...draggerProps} className="custom-dragger">
            <p className="ant-upload-drag-icon">
              <InboxOutlined className="text-gray-400 hover:text-white text-3xl cursor-pointer" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. You can upload pdf, docx, xlsx, text files.
            </p>
          </Dragger>
        </div>
       
      </div>
      <div className={`${widths.right} bg-transparent flex flex-col items-center justify-center relative`}>
        <div className={`absolute top-4 left-4 ${rightArrowDisplay}`} onClick={handleShowUtilityBar} title="Show utility bar">
          <RightOutlined className="text-gray-400 hover:text-black text-3xl cursor-pointer" />
        </div>
        <h1 className="text-gray-400 text-6xl font-bold"><DesktopOutlined /></h1>
        <h1 className="text-gray-400 text-4xl font-bold">Your Workspace</h1>
      </div>
      <CreateSpaceModal visible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
}