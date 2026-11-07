// Security & DevTools Protection

(function () {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && ['U', 'u', 'S', 's'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    setInterval(function () {
        const start = performance.now();
        debugger;
        const end = performance.now();
        if (end - start > 100) {
            document.body.innerHTML = '<div style="display:flex;height:100vh;align-items:center;justify-content:center;color:#00f0ff;font-family:sans-serif;font-size:1.4rem;text-align:center;">Vui lòng đóng công cụ F12 và tải lại trang để tiếp tục chơi!</div>';
        }
    }, 1500);
})();