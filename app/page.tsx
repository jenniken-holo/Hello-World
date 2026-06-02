/**
 * Home Page - Trang chủ của ứng dụng
 * 
 * File này là trang chính được render tại đường dẫn "/"
 * Sử dụng App Router của Next.js 14+
 * 
 * TypeScript được sử dụng để type safety và better IDE support
 */

export default function Home() {
  return (
    // Main element - Container chính của trang
    <main>
      {/* 
        Container - Wrapper cho nội dung chính
        Class này được định nghĩa trong globals.css
        Nó sẽ căn giữa nội dung và có hiệu ứng fade-in
      */}
      <div className="container">
        {/* 
          Tiêu đề chính - "Hello, World!"
          - Sử dụng semantic HTML5 tag: <h1> cho tiêu đề cấp 1
          - Class "title" để styling từ globals.css
          - Có hiệu ứng hover: chuyển sang màu xanh (--color-accent)
        */}
        <h1 className="title">Hello, World! 👋</h1>

        {/* 
          Đoạn mô tả - Paragraph ngắn dưới tiêu đề
          - Sử dụng semantic tag: <p> cho paragraph
          - Class "description" để styling từ globals.css
          - Có hiệu ứng hover: chữ sáng hơn
        */}
        <p className="description">
          Chào mừng đến với một trang web đơn giản được xây dựng bằng Next.js 14
          và CSS thuần. Không có framework UI phức tạp, chỉ có HTML sạch sẽ và CSS
          hiệu quả.
        </p>

        {/* 
          Thêm một số thông tin bổ sung
          Để trang trở nên thú vị hơn một chút
        */}
        <p className="description" style={{ fontSize: '0.95rem', marginTop: '2rem' }}>
          ✨ Đặc điểm của dự án này:
        </p>
        <ul
          style={{
            listStyle: 'none',
            textAlign: 'left',
            display: 'inline-block',
            marginTop: '1rem',
            fontSize: '0.95rem',
            lineHeight: '1.8',
          }}
        >
          <li>📱 Responsive design cho cả mobile và desktop</li>
          <li>🎨 CSS variables cho dễ bảo trì</li>
          <li>⚡ Performance tối ưu</li>
          <li>🔄 Hiệu ứng animations mượt mà</li>
          <li>🎯 Code clean và có comment chi tiết</li>
        </ul>
      </div>
    </main>
  );
}
