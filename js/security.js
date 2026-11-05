/* ==========================================================================
   FILE: js/security.js - Chặn F12, Chuột phải, Phím tắt DevTools
   ========================================================================== */
(function () {
    // 1. Chặn menu chuột phải
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // 2. Chặn các phím tắt mở F12 / Xem nguồn trang
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl + Shift + I / J / C (Mở Inspector / Console)
        if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
        // Ctrl + U (Xem mã nguồn HTML) hoặc Ctrl + S (Lưu trang)
        if (e.ctrlKey && ['U', 'u', 'S', 's'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Chặn kéo thả hình ảnh để tránh người chơi kéo ảnh ra tab mới xem tên file
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // 4. Bẫy Debugger & phát hiện mở DevTools từ menu trình duyệt
    setInterval(function () {
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            document.body.innerHTML = '<div style="display:flex;height:100vh;align-items:center;justify-content:center;color:#00f0ff;font-family:sans-serif;font-size:1.4rem;text-align:center;">Vui lòng đóng công cụ F12 (DevTools) và tải lại trang để tiếp tục chơi!</div>';
        }
    }, 1500);
})();