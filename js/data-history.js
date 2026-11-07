// Historical Figures Database

const HISTORY_DATABASE = [
    {
        id: 'trung_trac',
        name: 'Trưng Trắc',
        role: 'Lãnh tụ',
        event: 'Chống Bắc thuộc',
        region: 'Bắc',
        era: 'Bắc thuộc',
        eraOrder: 1,
        eventClue: 'Năm 40, phất cờ khởi nghĩa tại Mê Linh, đánh đuổi thái thú Tô Định và thu phục 65 thành trì.',
        quoteClue: '“Một xin rửa sạch nước thù, hai xin dựng lại nghiệp xưa họ Hùng...”'
    },
    {
        id: 'trieu_thi_trinh',
        name: 'Triệu Thị Trinh',
        role: 'Lãnh tụ',
        event: 'Chống Bắc thuộc',
        region: 'Trung',
        era: 'Bắc thuộc',
        eraOrder: 1,
        eventClue: 'Năm 248, lãnh đạo cuộc khởi nghĩa ở vùng Cửu Chân, cưỡi voi ra trận khiến quân Đông Ngô khiếp sợ.',
        quoteClue: '“Tôi chỉ muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá trường kình ở biển Đông...”'
    },
    {
        id: 'ngo_quyen',
        name: 'Ngô Quyền',
        role: 'Vua, Tướng',
        event: 'Chống Bắc thuộc',
        region: 'Bắc',
        era: 'Ngô',
        eraOrder: 2,
        eventClue: 'Năm 938, dùng kế đóng cọc gỗ bịt sắt trên sông Bạch Đằng đánh tan quân Nam Hán, chấm dứt hơn 1000 năm Bắc thuộc.',
        quoteClue: '“Hoằng Tháo là đứa trẻ khờ dại, đem quân từ xa đến, quân lính còn mỏi mệt, đã mất vía trước rồi.”'
    },
    {
        id: 'dinh_bo_linh',
        name: 'Đinh Bộ Lĩnh',
        role: 'Vua, Tướng',
        event: 'Dẹp loạn 12 sứ quân',
        region: 'Bắc',
        era: 'Đinh',
        eraOrder: 3,
        eventClue: 'Dẹp loạn 12 sứ quân thống nhất đất nước năm 968, lên ngôi Hoàng đế đặt quốc hiệu là Đại Cồ Việt.',
        quoteClue: '“Thuở nhỏ lấy bông lau làm cờ tập trận, lớn lên dẹp yên mười hai sứ quân mở nền chính thống.”'
    },
    {
        id: 'ly_thai_to',
        name: 'Lý Thái Tổ',
        role: 'Vua',
        event: 'Dời đô',
        region: 'Bắc',
        era: 'Lý',
        eraOrder: 4,
        eventClue: 'Năm 1010, ban Chiếu dời đô chuyển kinh đô từ Hoa Lư về thành Đại La và đổi tên thành Thăng Long.',
        quoteClue: '“Thành Đại La ở vào nơi trung tâm trời đất, được cái thế rồng cuộn hổ ngồi...”'
    },
    {
        id: 'ly_thuong_kiet',
        name: 'Lý Thường Kiệt',
        role: 'Tướng',
        event: 'Chống Tống',
        region: 'Bắc',
        era: 'Lý',
        eraOrder: 4,
        eventClue: 'Thực hiện chiến lược Tiên phát chế nhân và xây dựng phòng tuyến sông Như Nguyệt đánh bại quân xâm lược nhà Tống.',
        quoteClue: '“Sông núi nước Nam vua Nam ở / Rành rành định phận ở sách trời...”'
    },
    {
        id: 'tran_hung_dao',
        name: 'Trần Hưng Đạo',
        role: 'Tướng',
        event: 'Chống Mông–Nguyên',
        region: 'Bắc',
        era: 'Trần',
        eraOrder: 5,
        eventClue: 'Quốc công Tiết chế thống lĩnh quân dân Đại Việt ba lần đánh tan quân xâm lược Mông – Nguyên thế kỷ 13.',
        quoteClue: '“Nếu Bệ hạ muốn hàng, xin hãy chém đầu thần trước đã!”'
    },
    {
        id: 'tran_nhan_tong',
        name: 'Trần Nhân Tông',
        role: 'Vua',
        event: 'Chống Mông–Nguyên',
        region: 'Bắc',
        era: 'Trần',
        eraOrder: 5,
        eventClue: 'Hoàng đế lãnh đạo hai cuộc kháng chiến chống Nguyên – Mông, sau nhường ngôi xuất gia tại Yên Tử lập Thiền phái Trúc Lâm.',
        quoteClue: '“Xã tắc lưỡng hồi lao thạch mã / Sơn hà thiên cổ điện kim âu.”'
    },
    {
        id: 'tran_quoc_toan',
        name: 'Trần Quốc Toản',
        role: 'Tướng',
        event: 'Chống Mông–Nguyên',
        region: 'Bắc',
        era: 'Trần',
        eraOrder: 5,
        eventClue: 'Thiếu niên anh hùng bóp nát quả cam bên bến Bình Than, tự chiêu mộ hơn ngàn gia nô giương cờ đánh giặc Nguyên.',
        quoteClue: '“Phá cường địch, báo hoàng ân!”'
    },
    {
        id: 'chu_van_an',
        name: 'Chu Văn An',
        role: 'Nho sĩ',
        event: 'Không',
        region: 'Bắc',
        era: 'Trần',
        eraOrder: 5,
        eventClue: 'Tư nghiệp Quốc Tử Giám dâng Thất trảm sớ xin chém 7 nịnh thần không thành nên từ quan về núi Phượng Hoàng dạy học.',
        quoteClue: '“Ta chưa từng nghe nước nào coi nhẹ sự học mà có thể hưng thịnh được.”'
    },
    {
        id: 'le_loi',
        name: 'Lê Lợi',
        role: 'Vua, Tướng',
        event: 'Chống Minh',
        region: 'Trung',
        era: 'Hậu Lê',
        eraOrder: 6,
        eventClue: 'Dựng cờ khởi nghĩa Lam Sơn, trải qua 10 năm đánh đuổi quân Minh và lập ra triều đại Hậu Lê.',
        quoteClue: '“Bậc trượng phu sinh ra ở đời phải cứu nạn lớn, lập công to, để tiếng thơm ngàn thuở.”'
    },
    {
        id: 'nguyen_trai',
        name: 'Nguyễn Trãi',
        role: 'Nho sĩ, Nhà thơ',
        event: 'Chống Minh',
        region: 'Bắc',
        era: 'Hậu Lê',
        eraOrder: 6,
        eventClue: 'Mưu sĩ kiệt xuất của khởi nghĩa Lam Sơn, soạn Bình Ngô đại cáo tuyên bố nền độc lập của Đại Việt năm 1428.',
        quoteClue: '“Đem đại nghĩa để thắng hung tàn / Lấy chí nhân để thay cường bạo.”'
    },
    {
        id: 'le_huu_trac',
        name: 'Lê Hữu Trác',
        role: 'Y học',
        event: 'Không',
        region: 'Bắc',
        era: 'Hậu Lê',
        eraOrder: 6,
        eventClue: 'Đại danh y biệt hiệu Hải Thượng Lãn Ông, biên soạn bộ kỳ thư y học Hải Thượng y tông tâm lĩnh.',
        quoteClue: '“Đạo làm thuốc là một nhân thuật chuyên bảo vệ sinh mạng con người...”'
    },
    {
        id: 'nguyen_hue',
        name: 'Nguyễn Huệ',
        role: 'Vua, Tướng',
        event: 'Chống Thanh',
        region: 'Trung',
        era: 'Tây Sơn',
        eraOrder: 7,
        eventClue: 'Anh hùng áo vải Tây Sơn, thần tốc tiến quân ra Bắc đại phá 29 vạn quân Thanh mùa xuân năm Kỷ Dậu 1789.',
        quoteClue: '“Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản...”'
    },
    {
        id: 'nguyen_du',
        name: 'Nguyễn Du',
        role: 'Nhà thơ',
        event: 'Không',
        region: 'Trung',
        era: 'Tây Sơn–Nguyễn',
        eraOrder: 8,
        eventClue: 'Đại thi hào dân tộc, Danh nhân văn hóa thế giới, tác giả kiệt tác thơ Nôm lục bát Truyện Kiều.',
        quoteClue: '“Chữ tâm kia mới bằng ba chữ tài.”'
    },
    {
        id: 'nguyen_dinh_chieu',
        name: 'Nguyễn Đình Chiểu',
        role: 'Nho sĩ, Nhà thơ, Y học',
        event: 'Chống Pháp',
        region: 'Nam',
        era: 'Nguyễn',
        eraOrder: 9,
        eventClue: 'Nhà thơ, thầy giáo, thầy thuốc yêu nước đất Lục tỉnh Nam Kỳ, tác giả Văn tế nghĩa sĩ Cần Giuộc.',
        quoteClue: '“Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà.”'
    }
];