'use client';
// src/components/Navbar.tsx
import Link from 'next/link';
import { Menu, Radio } from 'antd';
import { FolderOutlined, HomeOutlined, CalculatorOutlined, ReadOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setDarkMode } from '@/redux/slices/darkModeSlice';
import { ChangeEvent } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link href="/" className="text-lg p-2">
      Home
    </Link>,
    'home',
    <HomeOutlined />
  ),
  getItem(
    <Link href="/spaces" className="text-lg p-2">
      Spaces
    </Link>,
    'spaces',
    <FolderOutlined />
  ),
  getItem(
    <Link href="/exercise" className="text-lg p-2">
      Exercise
    </Link>,
    'exercise',
    <ReadOutlined />
  ),
  getItem(
    <Link href="/chat" className="text-lg p-2">
      Chat
    </Link>,
    'chat',
    <MessageOutlined />
  ),
  getItem(
    <Link href="/counter" className="text-lg p-2">
      Counter
    </Link>,
    'counter',
    <CalculatorOutlined />
  ),
];

export default function Navbar() {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDarkMode(e.target.value === 'dark'));
  };

  return (
    <div className="h-screen w-64 bg-gray-900 relative flex flex-col justify-between">
      <div>
        <Menu mode="vertical" theme="dark" items={items} className="bg-gray-900" />
      </div>
      <div className="p-4">
        <Radio.Group onChange={handleToggleDarkMode} value={isDarkMode ? 'dark' : 'light'} className="flex flex-col space-y-2">
          <Radio value="light" className="text-white">Light Mode</Radio>
          <Radio value="dark" className="text-white">Dark Mode</Radio>
        </Radio.Group>
      </div>
    </div>
  );
}