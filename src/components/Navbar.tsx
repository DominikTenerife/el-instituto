// src/components/Navbar.tsx
import Link from 'next/link';
import { Menu } from 'antd';
import { FolderOutlined, HomeOutlined, CalculatorOutlined, ReadOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

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
  return (
    <div className="h-screen w-100 bg-gray-900 relative z-50">
      <div className="text-white text-2xl font-bold p-4">
        El Instituto
      </div>
      <Menu
        mode="vertical"
        theme="dark"
        items={items}
        className="bg-gray-900"
      />
    </div>
  );
}