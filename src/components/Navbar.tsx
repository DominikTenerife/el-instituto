// src/components/Navbar.tsx
import Link from 'next/link';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
  getItem(<Link href="/">Home</Link>, 'home', <MailOutlined />),
  getItem(<Link href="/upload">Upload</Link>, 'upload', <AppstoreOutlined />),
  getItem(<Link href="/counter">Counter</Link>, 'counter', <SettingOutlined />),
];

export default function Navbar() {
  return (
    <Menu
      mode="vertical"
      theme="dark"
      style={{ height: '100vh', width: 256 }}
      items={items}
    />
  );
}