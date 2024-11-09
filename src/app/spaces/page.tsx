// src/app/upload/page.tsx
"use client";

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadProps } from 'antd';

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
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/3 bg-slate-900 flex items-center justify-center slide-in">
        <div className="mt-8 w-full max-w-lg p-2.5">
          <Dragger {...draggerProps} style={{backgroundColor:"#0f172a"}} >
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{color:"#fff"}} />
            </p>
            <p style={{  color: '#fff' }} >Click or drag file to this area to upload</p> <br />
            <p  style={{  color: '#fff' }}>
              Support for a single or bulk upload. You can upload pdf, docx, xlsx, text files.
            </p>
          </Dragger>
        </div>
      </div>
      <div className="w-2/3 bg-transparent flex flex-col items-center justify-center">
        <h1 className="text-black text-4xl font-bold">Your files</h1>
      </div>
    </div>
  );
}