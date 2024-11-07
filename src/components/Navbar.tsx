// src/components/Navbar.tsx
import Link from 'next/link';
import { Menu } from 'antd';
import { UploadOutlined, HomeOutlined, CalculatorOutlined } from '@ant-design/icons';
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
    <Link href="/upload" className="text-lg p-2">
      Upload
    </Link>,
    'upload',
    <UploadOutlined />
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
    <div className="h-screen w-64 bg-gray-900">
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