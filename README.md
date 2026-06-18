# nestNode
## Server

```
npm i -g @nestjs/cli

nest new server

npm install --save typeorm mysql2
```
## Client

```
npx create-react-app client

```

---

## Bài tập (Assignments)

**Yêu cầu 1:** Thực hiện API CRUD (Create, Read, Update, Delete).
- Đã cài đặt backend quản lý khách hàng tại folder `server/src/customer` (sử dụng NestJS).
- Các API endpoints chính của Customer:
  - `GET /customers` : Xem danh sách
  - `GET /customers/:id` : Xem chi tiết
  - `POST /customers` : Thêm mới
  - `PUT /customers/:id` : Cập nhật
  - `DELETE /customers/:id` : Xóa

**Yêu cầu 2:** Sinh viên vẽ lưu đồ thuật toán (Activity Diagram) của CRUD (2 điểm).
- Dưới đây là mã nguồn `Mermaid` để sinh ra lưu đồ Activity Diagram tóm gọn cho chức năng CRUD User.
- Bạn có thể copy mã này dán vào trang [Mermaid Live Editor](https://mermaid.live/) để xuất ảnh PNG/SVG. Github cũng hỗ trợ hiển thị trực tiếp.

<details>
<summary>Nhấn để mở xem code Mermaid (Activity Diagram)</summary>

```mermaid
flowchart TD
    Start(["Bắt đầu"]) --> Menu{"Chọn chức năng\nCRUD User"}

    %% =======================
    %% Nhánh CREATE
    %% =======================
    Menu -->|CREATE| C_In[/"Nhập thông tin User mới"/]
    C_In --> C_Val{"Hợp lệ?"}
    C_Val -->|Sai| C_In
    C_Val -->|Đúng| C_Save["Lưu vào DB"] 
    C_Save --> Success

    %% =======================
    %% Nhánh READ
    %% =======================
    Menu -->|READ| R_DB["Truy vấn DB"]
    R_DB --> R_View[/"Hiển thị dữ liệu User"/] 
    R_View --> End(["Kết thúc"])

    %% =======================
    %% Nhánh UPDATE
    %% =======================
    Menu -->|UPDATE| U_In[/"Nhập thông tin User cần sửa"/]
    U_In --> U_Val{"Hợp lệ?"}
    U_Val -->|Sai| U_In
    U_Val -->|Đúng| U_Save["Cập nhật DB"] 
    U_Save --> Success

    %% =======================
    %% Nhánh DELETE
    %% =======================
    Menu -->|DELETE| D_Conf{"Xác nhận xóa User?"}
    D_Conf -->|Hủy| End
    D_Conf -->|Đồng ý| D_Save["Xóa User khỏi DB"] 
    D_Save --> Success

    %% =======================
    %% Kết thúc chung
    %% =======================
    Success[/"Thông báo thành công"/] --> End

    style Start fill:#111,stroke:#333,stroke-width:4px,color:#fff
    style End fill:#111,stroke:#333,stroke-width:4px,color:#fff
```
</details>