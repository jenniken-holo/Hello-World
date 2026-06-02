# 🌍 Hello World - Next.js + Vanilla CSS

Một trang web "Hello World" đơn giản được xây dựng bằng **Next.js 14** (App Router) và **CSS thuần** (vanilla CSS). Không có framework UI bên thứ ba, chỉ có HTML sạch sẽ và CSS hiệu quả.

## 📋 Yêu cầu Hệ thống

- **Node.js**: 18.17 trở lên
- **npm**: 9+ hoặc **yarn**, **pnpm**

## 🚀 Hướng dẫn Cài đặt

### 1. Clone repository hoặc tải mã nguồn

```bash
git clone https://github.com/jenniken-holo/Hello-World.git
cd Hello-World
```

### 2. Cài đặt dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install

# Hoặc sử dụng pnpm
pnpm install
```

### 3. Chạy development server

```bash
npm run dev
```

Server sẽ khởi động tại: **http://localhost:3000**

Mở trình duyệt và truy cập địa chỉ trên để xem trang web.

## 📦 Scripts có sẵn

```bash
# Chạy development server (hot reload)
npm run dev

# Build ứng dụng cho production
npm run build

# Chạy ứng dụng đã build
npm start

# Lint code (kiểm tra code quality)
npm run lint
```

## 📁 Cấu trúc Dự án

```
Hello-World/
├── app/
│   ├── globals.css          # CSS toàn cục (variables, reset, animations)
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── package.json             # Dependencies và scripts
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config cho Node
├── .gitignore              # Git ignore rules
└── README.md               # File này
```

## 📄 Giải thích từng File

### `package.json`
Chứa:
- **Dependencies**: React, React DOM, Next.js
- **DevDependencies**: TypeScript, type definitions
- **Scripts**: dev, build, start, lint

### `app/layout.tsx`
- Root layout component của ứng dụng
- Thiết lập metadata (title, description, viewport)
- Tất cả các trang khác sẽ render bên trong component này
- **Ngôn ngữ**: Tiếng Việt (`lang="vi"`)

### `app/page.tsx`
- Trang chính được render tại đường dẫn `/`
- Hiển thị tiêu đề "Hello, World!" và mô tả
- Sử dụng CSS classes từ `globals.css`
- Có hiệu ứng hover và fade-in animation

### `app/globals.css`
CSS toàn cục chứa:
- **CSS Variables**: Màu sắc, font, khoảng cách, timing
- **Reset & Base Styles**: Normalize các style mặc định
- **Layout**: Flexbox for centering
- **Components**: Title, description, buttons
- **Animations**: Fade-in effect
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Reduced motion support

Các CSS Variables:
```css
--color-primary: #0f172a        /* Nền chính */
--color-secondary: #1e293b      /* Màu thứ cấp */
--color-text: #f1f5f9           /* Màu chữ */
--color-accent: #3b82f6         /* Màu nhấn (xanh) */
--font-size-title: 3.5rem       /* Kích thước tiêu đề */
--font-size-subtitle: 1.25rem   /* Kích thước phụ đề */
```

### `next.config.js`
- Cấu hình Next.js
- Hiện tại là cấu hình cơ bản
- Có thể mở rộng thêm khi cần

### `tsconfig.json`
- Cấu hình TypeScript
- Strict mode bật
- Path alias: `@/*` cho import dễ dàng

## 🎨 Tính năng Design

### Responsive Design
- **Desktop** (>768px): Font size lớn, spacing rộng
- **Tablet** (≤768px): Font size vừa, spacing vừa
- **Mobile** (≤480px): Font size nhỏ, spacing gọn

### Hiệu ứng Hover
- **Tiêu đề**: Đổi sang màu xanh (color accent)
- **Mô tả**: Chữ sáng hơn
- **Nút**: Highlight, scale up, shadow

### Animations
- **Fade-in**: Nội dung chính fade in khi trang load (0.8s)
- **Smooth transitions**: Tất cả state changes mượt mà (0.3s)

### Accessibility
- Support for `prefers-reduced-motion` (tắt animation nếu user cài đặt)
- Semantic HTML5 tags (`<h1>`, `<p>`, `<main>`)
- Proper color contrast
- Support for light/dark mode (`prefers-color-scheme`)

## 🛠️ Tùy chỉnh

### Thay đổi Màu sắc

Mở `app/globals.css` và chỉnh sửa CSS Variables:

```css
:root {
  --color-primary: #0f172a;      /* Thay đổi màu nền */
  --color-accent: #3b82f6;       /* Thay đổi màu highlight */
  --color-text: #f1f5f9;         /* Thay đổi màu chữ */
}
```

### Thay đổi Font

Thay đổi giá trị `--font-primary` hoặc import font từ Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
  --font-primary: 'Inter', sans-serif;
}
```

### Thay đổi Kích thước Font

Chỉnh sửa các biến:
```css
--font-size-title: 3.5rem;
--font-size-subtitle: 1.25rem;
```

## 📱 Testing Responsive Design

### Cách 1: Dùng DevTools (F12)
- Bấm `F12` để mở DevTools
- Chọn `Toggle Device Toolbar` hoặc `Ctrl+Shift+M`
- Chọn các device khác nhau để test

### Cách 2: Thay đổi kích thước cửa sổ
- Thay đổi kích thước cửa sổ trình duyệt
- Trang sẽ tự động responsive

## 🚀 Build cho Production

```bash
# Build ứng dụng
npm run build

# Chạy ứng dụng production
npm start
```

Ứng dụng sẽ được tối ưu hóa và sẵn sàng deploy.

## 📚 Tài nguyên Học tập

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/)

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân hoặc thương mại

## 👨‍💻 Tác giả

Tạo bởi **jenniken-holo**

---

**Happy Coding! 🎉**
