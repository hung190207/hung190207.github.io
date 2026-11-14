// Map Mode Vietnam Locations Database

const MAP_DATABASE = [
    {
        id: 'nha_hat_lon_ha_noi',
        title: 'Nhà hát Lớn Hà Nội',
        titleEn: 'Hanoi Opera House - Hanoi',
        lat: 21.024372,
        lng: 105.857644,
        heading: 120,
        regionClue: 'Công trình kiến trúc lịch sử nằm tại Quảng trường Cách mạng Tháng Tám, đầu phố Tràng Tiền, quận Hoàn Kiếm, Hà Nội.',
        regionClueEn: 'Historic architectural landmark located at August Revolution Square, at the head of Trang Tien Street, Hoan Kiem District, Hanoi.'
    },
    {
        id: 'buu_dien_trung_tam_sai_gon',
        title: 'Bưu điện Trung tâm Sài Gòn - TP.HCM',
        titleEn: 'Saigon Central Post Office - Ho Chi Minh City',
        lat: 10.779886,
        lng: 106.699634,
        heading: 45,
        regionClue: 'Tọa lạc tại số 2 Công xã Paris, Quận 1, trung tâm Thành phố Hồ Chí Minh.',
        regionClueEn: 'Located at 2 Cong Xa Paris Square, District 1, in the heart of Ho Chi Minh City.'
    },
    {
        id: 'cau_rong_da_nang',
        title: 'Cầu Rồng - Đà Nẵng',
        titleEn: 'Dragon Bridge - Da Nang',
        lat: 16.061153,
        lng: 108.225967,
        heading: 90,
        regionClue: 'Cây cầu biểu tượng bắc qua sông Hàn nối đường Nguyễn Văn Linh và Võ Văn Kiệt, TP. Đà Nẵng.',
        regionClueEn: 'Iconic bridge spanning the Han River connecting Nguyen Van Linh and Vo Van Kiet streets in Da Nang.'
    },
    {
        id: 'ho_xuan_huong_da_lat',
        title: 'Hồ Xuân Hương - Đà Lạt',
        titleEn: 'Xuan Huong Lake - Da Lat',
        lat: 11.941963,
        lng: 108.441812,
        heading: 210,
        regionClue: 'Tuyến đường Trần Quốc Toản uốn quanh mặt hồ trung tâm thành phố Đà Lạt, tỉnh Lâm Đồng.',
        regionClueEn: 'Tran Quoc Toan road winding around the central lake of Da Lat City, Lam Dong Province.'
    },
    {
        id: 'cau_truong_tien_hue',
        title: 'Cầu Trường Tiền - Huế',
        titleEn: 'Truong Tien Bridge - Hue',
        lat: 16.467812,
        lng: 107.588654,
        heading: 330,
        regionClue: 'Cây cầu lịch sử bắc qua dòng sông Hương thơ mộng tại trung tâm thành phố Huế.',
        regionClueEn: 'Historic bridge spanning the poetic Perfume River in the center of Hue City.'
    },
    {
        id: 'duong_tran_phu_nha_trang',
        title: 'Đường biển Trần Phú - Nha Trang',
        titleEn: 'Tran Phu Coastal Road - Nha Trang',
        lat: 12.239341,
        lng: 109.196845,
        heading: 15,
        regionClue: 'Tuyến đường ven biển đối diện Quảng trường 2/4 thuộc thành phố Nha Trang, tỉnh Khánh Hòa.',
        regionClueEn: 'Coastal boulevard opposite 2/4 Square in Nha Trang City, Khanh Hoa Province.'
    },
    {
        id: 'bai_truoc_vung_tau',
        title: 'Đường Quang Trung - Bãi Trước, Vũng Tàu',
        titleEn: 'Quang Trung Road - Front Beach, Vung Tau',
        lat: 10.346218,
        lng: 107.073582,
        heading: 165,
        regionClue: 'Cung đường công viên ven biển Bãi Trước thuộc thành phố Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu.',
        regionClueEn: 'Coastal park road along Front Beach in Vung Tau City, Ba Ria - Vung Tau Province.'
    },
    {
        id: 'ben_ninh_kieu_can_tho',
        title: 'Đường Hai Bà Trưng - Bến Ninh Kiều, Cần Thơ',
        titleEn: 'Ninh Kieu Wharf - Can Tho',
        lat: 10.032985,
        lng: 105.788312,
        heading: 40,
        regionClue: 'Tuyến đường ven sông Hậu sầm uất ngay bến Ninh Kiều, quận Ninh Kiều, TP. Cần Thơ.',
        regionClueEn: 'Bustling promenade along the Hau River at Ninh Kieu Wharf, Can Tho City.'
    },
    {
        id: 'duong_ha_long_bai_chay',
        title: 'Đường Hạ Long - Bãi Cháy, Quảng Ninh',
        titleEn: 'Bai Chay Coastal Road - Ha Long, Quang Ninh',
        lat: 20.954712,
        lng: 107.046892,
        heading: 130,
        regionClue: 'Trục đường du lịch ven bờ vịnh Hạ Long thuộc phường Bãi Cháy, TP. Hạ Long, tỉnh Quảng Ninh.',
        regionClueEn: 'Tourism boulevard overlooking Ha Long Bay in Bai Chay Ward, Ha Long City, Quang Ninh Province.'
    },
    {
        id: 'chua_cau_hoi_an',
        title: 'Khu phố cổ Hội An - Quảng Nam',
        titleEn: 'Hoi An Ancient Town - Quang Nam',
        lat: 15.877085,
        lng: 108.326105,
        heading: 90,
        regionClue: 'Khu phố cổ nằm bên bờ sông Thu Bồn thuộc thành phố Hội An, tỉnh Quảng Nam.',
        regionClueEn: 'Ancient town along the Thu Bon River in Hoi An City, Quang Nam Province.'
    },
    {
        id: 'quoc_lo_4c_ha_giang',
        title: 'Đèo Mã Pí Lèng - Quốc lộ 4C, Hà Giang',
        titleEn: 'Ma Pi Leng Pass - Ha Giang',
        lat: 23.246452,
        lng: 105.411675,
        heading: 60,
        regionClue: 'Cung đường đèo hùng vĩ trên Quốc lộ 4C nối Đồng Văn và Mèo Vạc, tỉnh Hà Giang.',
        regionClueEn: 'Majestic mountain pass along National Highway 4C connecting Dong Van and Meo Vac, Ha Giang Province.'
    },
    {
        id: 'nha_tho_da_sapa',
        title: 'Trung tâm Thị xã Sa Pa - Lào Cai',
        titleEn: 'Sa Pa Town Center - Lao Cai',
        lat: 22.335092,
        lng: 103.841528,
        heading: 210,
        regionClue: 'Khu vực quảng trường trung tâm thị xã vùng cao Sa Pa, tỉnh Lào Cai.',
        regionClueEn: 'Central square area of the highland town of Sa Pa, Lao Cai Province.'
    },
    // --- MIỀN BẮC (Hà Nội, Đồng bằng sông Hồng, Đông Bắc, Tây Bắc) ---
    {
        id: 'quang_truong_ba_dinh_ha_noi',
        title: 'Quảng trường Ba Đình - Hà Nội',
        titleEn: 'Ba Dinh Square - Hanoi',
        lat: 21.036785,
        lng: 105.834645,
        heading: 270,
        regionClue: 'Tuyến đường Độc Lập phía trước Lăng Chủ tịch Hồ Chí Minh, quận Ba Đình, thủ đô Hà Nội.',
        regionClueEn: 'Doc Lap Street in front of the Ho Chi Minh Mausoleum, Ba Dinh District, Hanoi.'
    },
    {
        id: 'duong_thanh_nien_ho_tay_ha_noi',
        title: 'Đường Thanh Niên - Hồ Tây, Hà Nội',
        titleEn: 'Thanh Nien Road - West Lake, Hanoi',
        lat: 21.048112,
        lng: 105.836924,
        heading: 330,
        regionClue: 'Con đường rợp bóng cây ngăn giữa Hồ Tây và hồ Trúc Bạch, gần chùa Trấn Quốc, Hà Nội.',
        regionClueEn: 'Scenic tree-lined road separating West Lake and Truc Bach Lake near Tran Quoc Pagoda, Hanoi.'
    },
    {
        id: 'cau_long_bien_ha_noi',
        title: 'Cầu Long Biên - Hà Nội',
        titleEn: 'Long Bien Bridge - Hanoi',
        lat: 21.040156,
        lng: 105.859812,
        heading: 60,
        regionClue: 'Cây cầu thép lịch sử hơn 120 năm tuổi bắc qua sông Hồng tại thủ đô Hà Nội.',
        regionClueEn: 'Historic century-old cantilever steel bridge spanning the Red River in Hanoi.'
    },
    {
        id: 'nha_hat_lon_hai_phong',
        title: 'Nhà hát Lớn Hải Phòng',
        titleEn: 'Hai Phong Opera House',
        lat: 20.858864,
        lng: 106.682215,
        heading: 180,
        regionClue: 'Quảng trường Nhà hát thành phố ở trung tâm thành phố cảng Hải Phòng.',
        regionClueEn: 'City Theater Square in the heart of the port city of Hai Phong.'
    },
    {
        id: 'ban_dao_do_son_hai_phong',
        title: 'Bán đảo Đồ Sơn - Hải Phòng',
        titleEn: 'Do Son Peninsula - Hai Phong',
        lat: 20.704215,
        lng: 106.791542,
        heading: 120,
        regionClue: 'Tuyến đường ven biển uốn lượn quanh bán đảo du lịch Đồ Sơn, TP. Hải Phòng.',
        regionClueEn: 'Winding coastal road along the Do Son resort peninsula, Hai Phong City.'
    },
    {
        id: 'dao_cat_ba_hai_phong',
        title: 'Đường 1/4 - Đảo Cát Bà, Hải Phòng',
        titleEn: 'Cat Ba Island - Hai Phong',
        lat: 20.722418,
        lng: 107.049125,
        heading: 200,
        regionClue: 'Tuyến đường ven vịnh trung tâm thị trấn Cát Bà, huyện đảo Cát Hải, TP. Hải Phòng.',
        regionClueEn: 'Bayfront road in Cat Ba town center, Cat Hai island district, Hai Phong.'
    },
    {
        id: 'trang_an_ninh_binh',
        title: 'Quần thể danh thắng Tràng An - Ninh Bình',
        titleEn: 'Trang An Landscape Complex - Ninh Binh',
        lat: 20.254182,
        lng: 105.916845,
        heading: 90,
        regionClue: 'Tuyến đường bao quanh khu di sản văn hóa và thiên nhiên thế giới Tràng An, tỉnh Ninh Bình.',
        regionClueEn: 'Scenic road winding through the UNESCO World Heritage limestone karsts of Trang An, Ninh Binh.'
    },
    {
        id: 'chua_bai_dinh_ninh_binh',
        title: 'Chùa Bái Đính - Gia Viễn, Ninh Bình',
        titleEn: 'Bai Dinh Pagoda - Ninh Binh',
        lat: 20.273612,
        lng: 105.865418,
        heading: 45,
        regionClue: 'Quần thể chùa lớn nổi tiếng tại xã Gia Sinh, huyện Gia Viễn, tỉnh Ninh Bình.',
        regionClueEn: 'Renowned grand Buddhist temple complex in Gia Vien District, Ninh Binh Province.'
    },
    {
        id: 'chua_tam_chuc_ha_nam',
        title: 'Khu du lịch Tam Chúc - Hà Nam',
        titleEn: 'Tam Chuc Pagoda Complex - Ha Nam',
        lat: 20.568412,
        lng: 105.804512,
        heading: 150,
        regionClue: 'Quần thể du lịch tâm linh nằm bên hồ Lục Nhạc và núi đá vôi tại huyện Kim Bảng, tỉnh Hà Nam.',
        regionClueEn: 'Spiritual tourism complex beside Luc Nhac Lake and limestone peaks in Kim Bang, Ha Nam Province.'
    },
    {
        id: 'thi_tran_tam_dao_vinh_phuc',
        title: 'Thị trấn Tam Đảo - Vĩnh Phúc',
        titleEn: 'Tam Dao Town - Vinh Phuc',
        lat: 21.456124,
        lng: 105.643812,
        heading: 30,
        regionClue: 'Khu vực quảng trường và nhà thờ đá cổ trên dãy núi Tam Đảo mờ sương, tỉnh Vĩnh Phúc.',
        regionClueEn: 'Central square and stone church in the misty mountain town of Tam Dao, Vinh Phuc Province.'
    },
    {
        id: 'den_hung_phu_tho',
        title: 'Khu di tích lịch sử Đền Hùng - Phú Thọ',
        titleEn: 'Hung Kings Temple Complex - Phu Tho',
        lat: 21.406812,
        lng: 105.321456,
        heading: 90,
        regionClue: 'Khu di tích quốc gia đặc biệt trên núi Nghĩa Lĩnh, thành phố Việt Trì, tỉnh Phú Thọ.',
        regionClueEn: 'Special national historical site on Nghia Linh Mountain, Viet Tri City, Phu Tho Province.'
    },
    {
        id: 'cao_nguyen_moc_chau_son_la',
        title: 'Cao nguyên Mộc Châu - Sơn La',
        titleEn: 'Moc Chau Plateau - Son La',
        lat: 20.844215,
        lng: 104.639128,
        heading: 110,
        regionClue: 'Vùng đồi chè xanh mướt trên cao nguyên Mộc Châu dọc Quốc lộ 6, tỉnh Sơn La.',
        regionClueEn: 'Lush green tea hills on the Moc Chau Plateau along National Highway 6, Son La Province.'
    },
    {
        id: 'deo_pha_din_dien_bien',
        title: 'Đèo Pha Đin - Điện Biên & Sơn La',
        titleEn: 'Pha Din Pass - Dien Bien & Son La',
        lat: 21.564128,
        lng: 103.516245,
        heading: 240,
        regionClue: 'Một trong tứ đại đỉnh đèo vùng Tây Bắc nằm trên Quốc lộ 6, ranh giới hai tỉnh Sơn La và Điện Biên.',
        regionClueEn: 'One of the Four Great Mountain Passes of Northwest Vietnam on Highway 6 between Son La and Dien Bien.'
    },
    {
        id: 'mu_cang_chai_yen_bai',
        title: 'Mù Cang Chải - Yên Bái',
        titleEn: 'Mu Cang Chai Terraced Fields - Yen Bai',
        lat: 21.851245,
        lng: 104.086412,
        heading: 75,
        regionClue: 'Thung lũng ruộng bậc thang nổi tiếng dưới chân dãy Hoàng Liên Sơn, huyện Mù Cang Chải, tỉnh Yên Bái.',
        regionClueEn: 'Famous terraced rice fields valley in Mu Cang Chai District, Yen Bai Province.'
    },
    {
        id: 'deo_khau_pha_yen_bai',
        title: 'Đèo Khau Phạ - Quốc lộ 32, Yên Bái',
        titleEn: 'Khau Pha Pass - Highway 32, Yen Bai',
        lat: 21.758412,
        lng: 104.241562,
        heading: 140,
        regionClue: 'Cung đèo quanh co nổi tiếng nhìn xuống thung lũng Cao Phạ trên Quốc lộ 32, tỉnh Yên Bái.',
        regionClueEn: 'Winding mountain pass overlooking the Cao Pha Valley along National Highway 32, Yen Bai.'
    },
    {
        id: 'thac_ban_gioc_cao_bang',
        title: 'Thác Bản Giốc - Trùng Khánh, Cao Bằng',
        titleEn: 'Ban Gioc Waterfall - Cao Bang',
        lat: 22.855124,
        lng: 106.723145,
        heading: 300,
        regionClue: 'Thác nước hùng vĩ trên dòng sông Quây Sơn tại vùng biên giới huyện Trùng Khánh, tỉnh Cao Bằng.',
        regionClueEn: 'Majestic waterfall on the Quay Son River in Trung Khanh District, Cao Bang Province.'
    },
    {
        id: 'ho_ba_be_bac_kan',
        title: 'Vườn Quốc gia Ba Bể - Bắc Kạn',
        titleEn: 'Ba Be Lake National Park - Bac Kan',
        lat: 22.416245,
        lng: 105.614825,
        heading: 180,
        regionClue: 'Hồ nước ngọt tự nhiên lớn trên núi thuộc huyện Ba Bể, tỉnh Bắc Kạn.',
        regionClueEn: 'Natural mountain freshwater lake inside Ba Be National Park, Bac Kan Province.'
    },
    {
        id: 'mui_sa_vi_mong_cai_quang_ninh',
        title: 'Mũi Sa Vĩ - Trà Cổ, Móng Cái, Quảng Ninh',
        titleEn: 'Sa Vi Cape - Mong Cai, Quang Ninh',
        lat: 21.491245,
        lng: 108.071248,
        heading: 120,
        regionClue: 'Điểm đặt nét bút đầu tiên vẽ nên hình chữ S Việt Nam tại phường Trà Cổ, TP. Móng Cái, tỉnh Quảng Ninh.',
        regionClueEn: 'Northeasternmost coastal landmark starting Vietnam’s S-shaped coastline in Tra Co, Mong Cai, Quang Ninh.'
    },

    {
        id: 'bien_sam_son_thanh_hoa',
        title: 'Đường Hồ Xuân Hương - Biển Sầm Sơn, Thanh Hóa',
        titleEn: 'Sam Son Beach - Thanh Hoa',
        lat: 19.741256,
        lng: 105.904125,
        heading: 110,
        regionClue: 'Trục đường ven biển sầm uất của thành phố du lịch biển Sầm Sơn, tỉnh Thanh Hóa.',
        regionClueEn: 'Bustling coastal boulevard along Sam Son Beach in Thanh Hoa Province.'
    },
    {
        id: 'quang_truong_ho_chi_minh_vinh',
        title: 'Quảng trường Hồ Chí Minh - TP. Vinh, Nghệ An',
        titleEn: 'Ho Chi Minh Square - Vinh City, Nghe An',
        lat: 18.673412,
        lng: 105.692145,
        heading: 270,
        regionClue: 'Quảng trường trung tâm rộng lớn trên đường Trường Thi, thành phố Vinh, tỉnh Nghệ An.',
        regionClueEn: 'Grand central square on Truong Thi Street, Vinh City, Nghe An Province.'
    },
    {
        id: 'khu_di_tich_kim_lien_nghe_an',
        title: 'Khu di tích Kim Liên - Nam Đàn, Nghệ An',
        titleEn: 'Kim Lien Relic Site - Nam Dan, Nghe An',
        lat: 18.674812,
        lng: 105.551248,
        heading: 0,
        regionClue: 'Quê hương Chủ tịch Hồ Chí Minh tại Làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.',
        regionClueEn: 'Hometown of President Ho Chi Minh at Lotus Village, Nam Dan District, Nghe An Province.'
    },
    {
        id: 'phong_nha_ke_bang_quang_binh',
        title: 'Phong Nha - Kẻ Bàng, Quảng Bình',
        titleEn: 'Phong Nha - Ke Bang National Park, Quang Binh',
        lat: 17.590812,
        lng: 106.283145,
        heading: 160,
        regionClue: 'Khu vực bến thuyền sông Son dẫn vào động Phong Nha, huyện Bố Trạch, tỉnh Quảng Bình.',
        regionClueEn: 'Son River boat station leading to Phong Nha Cave in Bo Trach District, Quang Binh Province.'
    },
    {
        id: 'cau_hien_luong_quang_tri',
        title: 'Đôi bờ Hiền Lương - Bến Hải, Quảng Trị',
        titleEn: 'Hien Luong Bridge - Ben Hai River, Quang Tri',
        lat: 17.003812,
        lng: 107.051245,
        heading: 180,
        regionClue: 'Cây cầu lịch sử sơn hai màu xanh – vàng bắc qua sông Bến Hải tại vĩ tuyến 17, tỉnh Quảng Trị.',
        regionClueEn: 'Historic two-toned bridge spanning the Ben Hai River at the 17th parallel, Quang Tri Province.'
    },
    {
        id: 'thanh_co_quang_tri',
        title: 'Thành cổ Quảng Trị - Thị xã Quảng Trị',
        titleEn: 'Quang Tri Ancient Citadel',
        lat: 16.755412,
        lng: 107.189245,
        heading: 45,
        regionClue: 'Di tích lịch sử gắn liền với mùa hè đỏ lửa 81 ngày đêm năm 1972 bên dòng sông Thạch Hãn, tỉnh Quảng Trị.',
        regionClueEn: 'Historic citadel beside the Thach Han River, site of the famous 81-day battle in 1972, Quang Tri.'
    },
    {
        id: 'lang_khai_dinh_hue',
        title: 'Lăng Khải Định (Ứng Lăng) - Thừa Thiên Huế',
        titleEn: 'Tomb of Khai Dinh - Hue',
        lat: 16.398912,
        lng: 107.590412,
        heading: 60,
        regionClue: 'Công trình lăng tẩm giao thoa kiến trúc Á – Âu trên núi Châu Chữ, ngoại ô thành phố Huế.',
        regionClueEn: 'Imperial tomb blending Asian and European architecture on Chau Chu Mountain outside Hue City.'
    },
    {
        id: 'deo_hai_van_hue_da_nang',
        title: 'Đỉnh Đèo Hải Vân (Hải Vân Quan) - Huế & Đà Nẵng',
        titleEn: 'Hai Van Pass - Hue & Da Nang',
        lat: 16.188124,
        lng: 108.131845,
        heading: 135,
        regionClue: 'Cung đèo ven biển mệnh danh "Thiên hạ đệ nhất hùng quan", ranh giới giữa Thừa Thiên Huế và Đà Nẵng.',
        regionClueEn: 'Coastal mountain pass bridging Thua Thien Hue Province and Da Nang City.'
    },
    {
        id: 'ban_dao_son_tra_da_nang',
        title: 'Chùa Linh Ứng - Bán đảo Sơn Trà, Đà Nẵng',
        titleEn: 'Linh Ung Pagoda - Son Tra Peninsula, Da Nang',
        lat: 16.100412,
        lng: 108.277845,
        heading: 210,
        regionClue: 'Tuyến đường Hoàng Sa trên bán đảo Sơn Trà hướng ra biển Đông và tượng Phật Bà Quan Âm cao 67m, Đà Nẵng.',
        regionClueEn: 'Hoang Sa coastal road on Son Tra Peninsula overlooking Da Nang Bay and the 67m Lady Buddha statue.'
    },
    {
        id: 'thanh_dia_my_son_quang_nam',
        title: 'Thánh địa Mỹ Sơn - Duy Xuyên, Quảng Nam',
        titleEn: 'My Son Sanctuary - Quang Nam',
        lat: 15.764125,
        lng: 108.124185,
        heading: 90,
        regionClue: 'Quần thể đền tháp Chăm Pa cổ nằm trong thung lũng thuộc huyện Duy Xuyên, tỉnh Quảng Nam.',
        regionClueEn: 'UNESCO World Heritage cluster of ancient Cham Hindu temples in Duy Xuyen District, Quang Nam.'
    },
    {
        id: 'dao_ly_son_quang_ngai',
        title: 'Đảo Lý Sơn - Quảng Ngãi',
        titleEn: 'Ly Son Island - Quang Ngai',
        lat: 15.381245,
        lng: 109.142156,
        heading: 120,
        regionClue: 'Huyện đảo tiền tiêu hình thành từ núi lửa cổ và nổi tiếng với nghề trồng tỏi thuộc tỉnh Quảng Ngãi.',
        regionClueEn: 'Volcanic island district famous for its coastal cliffs and garlic fields in Quang Ngai Province.'
    },
    {
        id: 'eo_gio_quy_nhon_binh_dinh',
        title: 'Eo Gió - Nhơn Lý, Quy Nhơn, Bình Định',
        titleEn: 'Eo Gio - Quy Nhon, Binh Dinh',
        lat: 13.881425,
        lng: 109.298145,
        heading: 80,
        regionClue: 'Eo biển xanh được bao bọc bởi dãy núi đá uốn cong tại bán đảo Phương Mai, TP. Quy Nhơn, tỉnh Bình Định.',
        regionClueEn: 'Windy rocky coastal strait on Phuong Mai Peninsula, Quy Nhon City, Binh Dinh Province.'
    },
    {
        id: 'ganh_da_dia_phu_yen',
        title: 'Gành Đá Đĩa - Tuy An, Phú Yên',
        titleEn: 'Ganh Da Dia Basalt Cliffs - Phu Yen',
        lat: 13.353812,
        lng: 109.293412,
        heading: 60,
        regionClue: 'Danh thắng thiên nhiên kỳ thú với những khối đá bazan hình lăng trụ xếp chồng bên bờ biển huyện Tuy An, tỉnh Phú Yên.',
        regionClueEn: 'Natural wonder of interlocking hexagonal basalt rock columns along the coast of Tuy An, Phu Yen.'
    },
    {
        id: 'mui_dien_dai_lanh_phu_yen',
        title: 'Mũi Điện (Hải đăng Đại Lãnh) - Phú Yên',
        titleEn: 'Mui Dien (Dai Lanh Lighthouse) - Phu Yen',
        lat: 12.882412,
        lng: 109.450812,
        heading: 110,
        regionClue: 'Một trong những nơi đón ánh bình minh đầu tiên trên đất liền Việt Nam, nhìn xuống Bãi Môn, tỉnh Phú Yên.',
        regionClueEn: 'Scenic headland lighthouse overlooking Bai Mon Beach on the easternmost coast of Phu Yen Province.'
    },
    {
        id: 'thap_ba_ponagar_nha_trang',
        title: 'Tháp Bà Ponagar - Nha Trang, Khánh Hòa',
        titleEn: 'Po Nagar Cham Towers - Nha Trang',
        lat: 12.265412,
        lng: 109.195245,
        heading: 250,
        regionClue: 'Quần thể đền tháp Chăm Pa cổ nằm trên đồi Cù Lao bên bờ sông Cái, TP. Nha Trang, tỉnh Khánh Hòa.',
        regionClueEn: 'Ancient Cham temple complex perched on Cu Lao Hill beside the Cai River in Nha Trang.'
    },
    {
        id: 'vinh_vinh_hy_ninh_thuan',
        title: 'Cung đường biển Vĩnh Hy - Ninh Thuận',
        titleEn: 'Vinh Hy Bay Coastal Road - Ninh Thuan',
        lat: 11.721456,
        lng: 109.198412,
        heading: 140,
        regionClue: 'Cung đường ven biển tuyệt đẹp ôm sát Vườn Quốc gia Núi Chúa và vịnh Vĩnh Hy, huyện Ninh Hải, tỉnh Ninh Thuận.',
        regionClueEn: 'Dramatic coastal road bordering Nui Chua National Park and Vinh Hy Bay in Ninh Thuan Province.'
    },
    {
        id: 'bau_trang_binh_thuan',
        title: 'Cung đường đôi Bàu Trắng - Bắc Bình, Bình Thuận',
        titleEn: 'Bau Trang White Sand Dunes Road - Binh Thuan',
        lat: 11.066812,
        lng: 108.426512,
        heading: 35,
        regionClue: 'Tuyến đường nhựa thẳng tắp băng qua những triền đồi cát trắng mênh mông tại huyện Bắc Bình, tỉnh Bình Thuận.',
        regionClueEn: 'Iconic desert highway cutting across vast white sand dunes in Bac Binh District, Binh Thuan.'
    },
    {
        id: 'nha_tho_go_kon_tum',
        title: 'Nhà thờ Gỗ Kon Tum - TP. Kon Tum',
        titleEn: 'Kon Tum Wooden Church - Kon Tum',
        lat: 14.346812,
        lng: 108.010245,
        heading: 0,
        regionClue: 'Công trình kiến trúc gỗ kết hợp phong cách Roman và nhà sàn Ba Na tại trung tâm thành phố Kon Tum.',
        regionClueEn: 'Century-old cathedral made entirely of dark wood blending Roman and Bahnar stilt-house styles in Kon Tum.'
    },
    {
        id: 'bien_ho_pleiku_gia_lai',
        title: 'Biển Hồ (Hồ T’Nưng) - Pleiku, Gia Lai',
        titleEn: 'Bien Ho (T’Nung Lake) - Pleiku, Gia Lai',
        lat: 14.046215,
        lng: 108.001425,
        heading: 280,
        regionClue: 'Hồ nước ngọt tự nhiên trên miệng núi lửa cổ, được mệnh danh là "Đôi mắt Pleiku" của tỉnh Gia Lai.',
        regionClueEn: 'Volcanic crater lake surrounded by pine forests, famously known as the "Eyes of Pleiku" in Gia Lai.'
    },
    {
        id: 'nga_sau_buon_ma_thuot_dak_lak',
        title: 'Ngã Sáu Buôn Ma Thuột - Đắk Lắk',
        titleEn: 'Buon Ma Thuot Six-Way Intersection - Dak Lak',
        lat: 12.679812,
        lng: 108.044215,
        heading: 90,
        regionClue: 'Tượng đài Chiến thắng tại trung tâm thủ phủ cà phê Buôn Ma Thuột, tỉnh Đắk Lắk.',
        regionClueEn: 'Victory Monument roundabout at the center of Vietnam’s coffee capital, Buon Ma Thuot, Dak Lak.'
    },

    {
        id: 'dinh_doc_lap_sai_gon',
        title: 'Dinh Độc Lập - Quận 1, TP.HCM',
        titleEn: 'Independence Palace - District 1, HCMC',
        lat: 10.777985,
        lng: 106.696812,
        heading: 220,
        regionClue: 'Di tích lịch sử quốc gia đặc biệt nằm cuối trục đường Lê Duẩn, Quận 1, TP. Hồ Chí Minh.',
        regionClueEn: 'Special national historical landmark at the end of Le Duan Boulevard, District 1, Ho Chi Minh City.'
    },
    {
        id: 'pho_di_bo_nguyen_hue_sai_gon',
        title: 'Phố đi bộ Nguyễn Huệ & Trụ sở UBND TP.HCM',
        titleEn: 'Nguyen Hue Walking Street & HCMC City Hall',
        lat: 10.776112,
        lng: 106.701425,
        heading: 315,
        regionClue: 'Quảng trường đi bộ sầm uất kéo dài từ Trụ sở UBND Thành phố ra bến Bạch Đằng, Quận 1, TP.HCM.',
        regionClueEn: 'Vibrant pedestrian boulevard stretching from the historic City Hall to Bach Dang Wharf in District 1, HCMC.'
    },
    {
        id: 'cho_ben_thanh_sai_gon',
        title: 'Chợ Bến Thành - Quận 1, TP.HCM',
        titleEn: 'Ben Thanh Market - District 1, HCMC',
        lat: 10.772112,
        lng: 106.698312,
        heading: 340,
        regionClue: 'Khu chợ biểu tượng với tháp đồng hồ 4 mặt tại cửa Nam, trung tâm Quận 1, TP. Hồ Chí Minh.',
        regionClueEn: 'Iconic market featuring its signature four-sided clock tower at the South Gate in District 1, HCMC.'
    },
    {
        id: 'toa_thanh_tay_ninh',
        title: 'Tòa Thánh Cao Đài & Núi Bà Đen - Tây Ninh',
        titleEn: 'Cao Dai Holy See - Tay Ninh',
        lat: 11.288412,
        lng: 106.132415,
        heading: 90,
        regionClue: 'Công trình kiến trúc tôn giáo độc đáo tại thị xã Hòa Thành, gần núi Bà Đen, tỉnh Tây Ninh.',
        regionClueEn: 'Distinctive religious architectural complex in Hoa Thanh Town near Black Virgin Mountain, Tay Ninh.'
    },
    {
        id: 'tuong_chua_kito_vung_tau',
        title: 'Mũi Nghinh Phong & Tượng Chúa Kitô Vua - Vũng Tàu',
        titleEn: 'Nghinh Phong Cape & Christ of Vung Tau',
        lat: 10.324812,
        lng: 107.084125,
        heading: 350,
        regionClue: 'Cung đường biển Hạ Long – Thùy Vân dưới chân Núi Nhỏ, nơi có tượng Chúa dang tay nhìn ra biển Vũng Tàu.',
        regionClueEn: 'Coastal road at the foot of Small Mountain beneath the outstretched arms of the Christ of Vung Tau statue.'
    },
    {
        id: 'con_dao_ba_ria_vung_tau',
        title: 'Đường Tôn Đức Thắng - Côn Đảo, Bà Rịa - Vũng Tàu',
        titleEn: 'Ton Duc Thang Coastal Road - Con Dao Island',
        lat: 8.683412,
        lng: 106.609812,
        heading: 140,
        regionClue: 'Con đường ven vịnh Côn Sơn rợp bóng cây bàng cổ thụ tại huyện đảo Côn Đảo, tỉnh Bà Rịa - Vũng Tàu.',
        regionClueEn: 'Seafront road lined with ancient tropical almond trees along Con Son Bay, Con Dao Island.'
    },
    {
        id: 'cau_my_thuan_tien_giang_vinh_long',
        title: 'Cầu Mỹ Thuận - Tiền Giang & Vĩnh Long',
        titleEn: 'My Thuan Bridge - Tien Giang & Vinh Long',
        lat: 10.276812,
        lng: 105.910245,
        heading: 190,
        regionClue: 'Cây cầu dây văng đầu tiên của Việt Nam bắc qua sông Tiền, nối liền hai tỉnh Tiền Giang và Vĩnh Long.',
        regionClueEn: 'Vietnam’s first cable-stayed bridge spanning the Tien River between Tien Giang and Vinh Long provinces.'
    },
    {
        id: 'nui_sam_chau_doc_an_giang',
        title: 'Khu du lịch Núi Sam - Châu Đốc, An Giang',
        titleEn: 'Sam Mountain - Chau Doc, An Giang',
        lat: 10.671245,
        lng: 105.079124,
        heading: 200,
        regionClue: 'Quần thể tâm linh Miếu Bà Chúa Xứ và Lăng Thoại Ngọc Hầu dưới chân núi Sam, TP. Châu Đốc, tỉnh An Giang.',
        regionClueEn: 'Pilgrimage complex of Lady Chua Xu Temple at the foot of Sam Mountain, Chau Doc City, An Giang.'
    },
    {
        id: 'quang_truong_hung_vuong_bac_lieu',
        title: 'Quảng trường Hùng Vương - TP. Bạc Liêu',
        titleEn: 'Hung Vuong Square - Bac Lieu City',
        lat: 9.288124,
        lng: 105.724812,
        heading: 120,
        regionClue: 'Quảng trường nổi bật với biểu tượng cây đàn kìm cách điệu khổng lồ tại trung tâm thành phố Bạc Liêu.',
        regionClueEn: 'Central plaza famous for its giant stylized moon-lute monument in Bac Lieu City.'
    },
    {
        id: 'chua_doi_soc_trang',
        title: 'Chùa Dơi (Mahatup) - TP. Sóc Trăng',
        titleEn: 'Bat Pagoda (Mahatup) - Soc Trang City',
        lat: 9.586215,
        lng: 105.974125,
        heading: 60,
        regionClue: 'Ngôi chùa Khmer cổ hơn 400 năm tuổi với kiến trúc màu vàng rực rỡ tại thành phố Sóc Trăng.',
        regionClueEn: 'Historic 400-year-old Khmer Buddhist temple with ornate golden architecture in Soc Trang City.'
    },
    {
        id: 'dinh_cau_phu_quoc_kien_giang',
        title: 'Dinh Cậu - Dương Đông, Phú Quốc, Kiên Giang',
        titleEn: 'Dinh Cau Rock Temple - Phu Quoc Island',
        lat: 10.217812,
        lng: 103.956812,
        heading: 270,
        regionClue: 'Ghềnh đá và ngọn hải đăng bên cửa sông Dương Đông tại thành phố đảo Phú Quốc, tỉnh Kiên Giang.',
        regionClueEn: 'Rocky headland temple and lighthouse at the mouth of the Duong Dong River on Phu Quoc Island.'
    },
    {
        id: 'mui_ca_mau_dat_mui',
        title: 'Khu du lịch Mũi Cà Mau - Đất Mũi, Ngọc Hiển',
        titleEn: 'Ca Mau Cape - Dat Mui, Ca Mau',
        lat: 8.606215,
        lng: 104.728124,
        heading: 240,
        regionClue: 'Điểm cuối đường Hồ Chí Minh tại vùng đất cực Nam Tổ quốc thuộc xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau.',
        regionClueEn: 'Southernmost cape of Vietnam marking the end of the Ho Chi Minh Highway in Dat Mui, Ca Mau Province.'
    }
];