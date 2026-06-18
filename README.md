# BÀI KIỂM TRA GIỮA KỲ - MÔN WEB NÂNG CAO

## 1. Thông tin thành viên & Phân công công việc
- **Sinh viên thực hiện:** Lê Hải Anh
- **Mã số sinh viên:** 24100110
- **Đối tượng đảm nhiệm:** `Order` (Thực hiện trọn gói cấu trúc: Entity, Controller, Service, Module, Provider và các chức năng CRUD).

## 2. Các chức năng CRUD đã hoàn thành cho Order
- **Create (Tạo):** [POST] `/orders` - Tạo mới đơn hàng vào database.
- **Read (Đọc):** [GET] `/orders` - Lấy toàn bộ danh sách đơn hàng và [GET] `/orders/:id` - Lấy chi tiết một đơn hàng theo ID.
- **Update (Cập nhật):** [PUT] `/orders/:id` - Cập nhật thông tin chi tiết của đơn hàng.
- **Delete (Xóa):** [DELETE] `/orders/:id` - Xóa hoàn toàn đơn hàng khỏi hệ thống.

## 3. Cơ sở dữ liệu (Database)
- Hệ quản trị CSDL: MySQL (Chạy môi trường Localhost).
- Tên database: `ecommerce_db`
- Cơ chế: Sử dụng tính năng `synchronize: true` của TypeORM để tự động khởi tạo và đồng bộ cấu trúc bảng `orders` từ Class Entity mà không cần chạy Script SQL thủ công.
