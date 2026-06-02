import type { Metadata } from 'next';
import './globals.css';

/**
 * Metadata - Thông tin của trang web
 * Được sử dụng cho SEO và hiển thị trong trình duyệt
 */
export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A simple Hello World website built with Next.js and vanilla CSS',
  keywords: 'next.js, hello world, vanilla css',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0f172a',
};

/**
 * RootLayout - Component layout chính của ứng dụng
 * Tất cả các trang khác sẽ được render bên trong component này
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* 
          Preload font system cho performance tốt hơn
          Điều này giúp trang load nhanh hơn bằng cách báo trước cho trình duyệt
        */}
      </head>
      <body>
        {/* 
          {children} sẽ được thay thế bằng nội dung của từng trang
          Ví dụ: app/page.tsx sẽ render bên trong layout này
        */}
        {children}
      </body>
    </html>
  );
}
