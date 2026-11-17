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
    },
    {
        id: 'cot_co_lung_cu_ha_giang',
        title: 'Cột cờ Lũng Cú - Hà Giang',
        titleEn: 'Lung Cu Flag Tower - Ha Giang',
        lat: 23.364812,
        lng: 105.318412,
        heading: 45,
        regionClue: 'Điểm cực Bắc thiêng liêng của Tổ quốc trên đỉnh núi Rồng, huyện Đồng Văn, tỉnh Hà Giang.',
        regionClueEn: 'Sacred northernmost point of Vietnam atop Dragon Mountain, Dong Van District, Ha Giang Province.'
    },
    {
        id: 'dinh_thu_vua_meo_ha_giang',
        title: 'Dinh thự Vua Mèo - Sủng Là, Hà Giang',
        titleEn: 'Vuong Family Mansion - Sung La, Ha Giang',
        lat: 23.281245,
        lng: 105.354182,
        heading: 135,
        regionClue: 'Công trình kiến trúc cổ của dòng họ Vương nằm tại thung lũng Sủng Là, huyện Đồng Văn, tỉnh Hà Giang.',
        regionClueEn: 'Unique historic mansion of the Hmong chieftains nestled in Sung La Valley, Dong Van, Ha Giang.'
    },
    {
        id: 'khu_di_tich_tan_trao_tuyen_quang',
        title: 'Khu di tích Quốc gia đặc biệt Tân Trào - Tuyên Quang',
        titleEn: 'Tan Trao Historical Relic Site - Tuyen Quang',
        lat: 21.824125,
        lng: 105.479182,
        heading: 180,
        regionClue: 'Thủ đô khu giải phóng gắn liền với cây đa Tân Trào và lịch sử cách mạng tại huyện Sơn Dương, tỉnh Tuyên Quang.',
        regionClueEn: 'Revolutionary historical capital associated with the historic banyan tree in Son Duong District, Tuyen Quang.'
    },
    {
        id: 'dong_nguom_ngao_cao_bang',
        title: 'Động Ngườm Ngao - Trùng Khánh, Cao Bằng',
        titleEn: 'Nguom Ngao Cave - Trung Khanh, Cao Bang',
        lat: 22.846512,
        lng: 106.741256,
        heading: 90,
        regionClue: 'Hang động kỳ vĩ với hệ thống nhũ đá tự nhiên tuyệt đẹp gần thác Bản Giốc, tỉnh Cao Bằng.',
        regionClueEn: 'Stunning natural limestone cavern with magnificent stalactites near Ban Gioc Waterfall, Cao Bang.'
    },
    {
        id: 'dao_ba_goa_ho_ba_be_bac_kan',
        title: 'Đảo Bà Góa - Hồ Ba Bể, Bắc Kạn',
        titleEn: 'Ba Goa Islet - Ba Be Lake, Bac Kan',
        lat: 22.424156,
        lng: 105.623412,
        heading: 210,
        regionClue: 'Hòn đảo nhỏ xinh xắn giữa lòng hồ nước ngọt tự nhiên lớn nhất Việt Nam, tỉnh Bắc Kạn.',
        regionClueEn: 'Picturesque islet in the middle of Vietnam’s largest natural mountain lake in Bac Kan Province.'
    },
    {
        id: 'chua_yen_tu_quang_ninh',
        title: 'Khu di tích danh thắng Yên Tử - Uông Bí, Quảng Ninh',
        titleEn: 'Yen Tu Scenic and Relic Site - Quang Ninh',
        lat: 21.151812,
        lng: 106.713412,
        heading: 60,
        regionClue: 'Trung tâm Phật giáo lớn của Thiền phái Trúc Lâm trên đỉnh núi thiêng Yên Tử, TP. Uông Bí, Quảng Ninh.',
        regionClueEn: 'Major Buddhist center of the Truc Lam Zen sect on the sacred Yen Tu Mountain, Uong Bi, Quang Ninh.'
    },
    {
        id: 'hon_trong_mai_vinh_ha_long',
        title: 'Hòn Trống Mái - Vịnh Hạ Long, Quảng Ninh',
        titleEn: 'Fighting Cocks Islet - Ha Long Bay, Quang Ninh',
        lat: 20.915412,
        lng: 107.078124,
        heading: 150,
        regionClue: 'Biểu tượng thiên nhiên nổi tiếng của kỳ quan thế giới vịnh Hạ Long, tỉnh Quảng Ninh.',
        regionClueEn: 'World-famous natural limestone icon of Ha Long Bay in Quang Ninh Province.'
    },
    {
        id: 'chua_dau_bac_ninh',
        title: 'Chùa Dâu - Thuận Thành, Bắc Ninh',
        titleEn: 'Dau Pagoda - Thuan Thanh, Bac Ninh',
        lat: 21.031245,
        lng: 106.061245,
        heading: 300,
        regionClue: 'Ngôi chùa cổ nhất Việt Nam có lịch sử gần hai thiên niên kỷ tại thị xã Thuận Thành, tỉnh Bắc Ninh.',
        regionClueEn: 'Vietnam’s oldest Buddhist pagoda with a history spanning nearly two millennia in Thuan Thanh, Bac Ninh.'
    },
    {
        id: 'lang_gom_bat_trang_ha_noi',
        title: 'Làng gốm Bát Tràng - Gia Lâm, Hà Nội',
        titleEn: 'Bat Trang Ceramic Village - Hanoi',
        lat: 20.978124,
        lng: 105.931245,
        heading: 120,
        regionClue: 'Làng nghề truyền thống lâu đời bên bờ sông Hồng nổi tiếng với các sản phẩm gốm sứ tinh xảo, Hà Nội.',
        regionClueEn: 'Century-old traditional ceramic artisan village along the Red River on the outskirts of Hanoi.'
    },
    {
        id: 'thanh_co_son_tay_ha_noi',
        title: 'Thành cổ Sơn Tây - Thị xã Sơn Tây, Hà Nội',
        titleEn: 'Son Tay Ancient Citadel - Hanoi',
        lat: 21.144125,
        lng: 105.508124,
        heading: 190,
        regionClue: 'Công trình kiến trúc quân sự bằng đá ong độc đáo thời nhà Nguyễn tại thị xã Sơn Tây, Hà Nội.',
        regionClueEn: 'Unique Nguyen Dynasty laterite military fortress architecture in Son Tay Town, Hanoi.'
    },
    {
        id: 'lang_co_duong_lam_ha_noi',
        title: 'Làng cổ Đường Lâm - Sơn Tây, Hà Nội',
        titleEn: 'Duong Lam Ancient Village - Hanoi',
        lat: 21.129412,
        lng: 105.474125,
        heading: 75,
        regionClue: 'Ngôi làng cổ kính mang đậm dấu ấn kiến trúc nhà ở truyền thống vùng đồng bằng Bắc Bộ, Hà Nội.',
        regionClueEn: 'Ancient heritage village preserving traditional Northern Vietnamese rural architecture near Hanoi.'
    },
    {
        id: 'con_son_kiep_bac_hai_duong',
        title: 'Khu di tích Côn Sơn - Kiếp Bạc, Hải Dương',
        titleEn: 'Con Son - Kiep Bac Relic Site, Hai Duong',
        lat: 21.121812,
        lng: 106.354125,
        heading: 140,
        regionClue: 'Quần thể di tích lịch sử gắn liền với danh nhân Nguyễn Trãi và Hưng Đạo Đại Vương Trần Quốc Tuấn, tỉnh Hải Dương.',
        regionClueEn: 'Historical site complex dedicated to national heroes Nguyen Trai and Tran Hung Dao in Hai Duong Province.'
    },
    {
        id: 'pho_hien_hung_yen',
        title: 'Khu di tích Phố Hiến - TP. Hưng Yên',
        titleEn: 'Pho Hien Historical Site - Hung Yen City',
        lat: 20.648124,
        lng: 106.051245,
        heading: 220,
        regionClue: 'Thương cảng sầm uất nổi tiếng thời xưa bên bờ sông Hồng thuộc thành phố Hưng Yên.',
        regionClueEn: 'Historic bustling riverside port city famous in Vietnamese folklore in Hung Yen City.'
    },
    {
        id: 'den_tran_nam_dinh',
        title: 'Khu di tích Đền Trần - TP. Nam Định',
        titleEn: 'Tran Temple Relic Site - Nam Dinh City',
        lat: 20.428124,
        lng: 106.181245,
        heading: 330,
        regionClue: 'Quần thể đền thờ các vua nhà Trần và Hưng Đạo Đại Vương tại phường Lộc Vượng, thành phố Nam Định.',
        regionClueEn: 'Temple complex dedicated to the emperors of the Tran Dynasty in Nam Dinh City.'
    },
    {
        id: 'nha_tho_phat_diem_ninh_binh',
        title: 'Nhà thờ đá Phát Diệm - Kim Sơn, Ninh Bình',
        titleEn: 'Phat Diem Stone Cathedral - Kim Son, Ninh Binh',
        lat: 20.075412,
        lng: 106.091245,
        heading: 45,
        regionClue: 'Công trình kiến trúc nhà thờ Công giáo độc đáo được xây dựng hoàn toàn bằng đá và gỗ lim tại huyện Kim Sơn, Ninh Bình.',
        regionClueEn: 'Unique Catholic cathedral complex built entirely of stone and ironwood in Kim Son, Ninh Binh.'
    },
    {
        id: 'vuon_quoc_gia_cuc_phuong_ninh_binh',
        title: 'Vườn Quốc gia Cúc Phương - Nho Quan, Ninh Bình',
        titleEn: 'Cuc Phuong National Park - Ninh Binh',
        lat: 20.311245,
        lng: 105.714124,
        heading: 100,
        regionClue: 'Khu bảo tồn thiên nhiên rừng nguyên sinh đầu tiên của Việt Nam tại huyện Nho Quan, tỉnh Ninh Bình.',
        regionClueEn: 'Vietnam’s first and oldest primeval tropical rainforest nature reserve in Ninh Binh Province.'
    },
    {
        id: 'thanh_nha_ho_thanh_hoa',
        title: 'Thành Nhà Hồ - Vĩnh Lộc, Thanh Hóa',
        titleEn: 'Ho Dynasty Citadel - Vinh Loc, Thanh Hoa',
        lat: 20.081245,
        lng: 105.608124,
        heading: 110,
        regionClue: 'Di sản văn hóa thế giới với những phiến đá khổng lồ xếp liền mạch không cần chất kết dính tại huyện Vĩnh Lộc, Thanh Hóa.',
        regionClueEn: 'UNESCO World Heritage massive stone block fortress built in the 14th century in Thanh Hoa Province.'
    },
    {
        id: 'bai_bien_cua_lo_nghe_an',
        title: 'Bãi biển Cửa Lò - Nghệ An',
        titleEn: 'Cua Lo Beach - Nghe An',
        lat: 18.803412,
        lng: 105.714125,
        heading: 90,
        regionClue: 'Bãi biển du lịch nổi tiếng với bờ cát phẳng mịn và nước trong xanh tại tỉnh Nghệ An.',
        regionClueEn: 'Popular coastal resort beach with smooth white sand and clear waters in Cua Lo, Nghe An.'
    },
    {
        id: 'nga_ba_dong_loc_ha_tinh',
        title: 'Khu di tích Ngã ba Đồng Lộc - Can Lộc, Hà Tĩnh',
        titleEn: 'Dong Loc Junction Relic Site - Ha Tinh',
        lat: 18.351245,
        lng: 105.671245,
        heading: 160,
        regionClue: 'Di tích lịch sử anh hùng gắn liền với sự hy sinh của 10 nữ thanh niên xung phong tại huyện Can Lộc, Hà Tĩnh.',
        regionClueEn: 'Heroic historic junction honoring ten young female volunteer martyrs in Can Loc District, Ha Tinh.'
    },
    {
        id: 'hoanh_son_quan_deo_ngang',
        title: 'Hoành Sơn Quan - Đèo Ngang, Hà Tĩnh & Quảng Bình',
        titleEn: 'Hoanh Son Quan Gate - Deo Ngang Pass',
        lat: 17.931245,
        lng: 106.438124,
        heading: 270,
        regionClue: 'Cổng thành cổ trên đỉnh Đèo Ngang nằm ngay ranh giới giữa hai tỉnh Hà Tĩnh và Quảng Bình.',
        regionClueEn: 'Ancient mountain gateway perched atop Deo Ngang Pass between Ha Tinh and Quang Binh provinces.'
    },
    {
        id: 'thanh_dia_la_vang_quang_tri',
        title: 'Thánh địa La Vang - Hải Lăng, Quảng Trị',
        titleEn: 'Our Lady of La Vang Shrine - Quang Tri',
        lat: 16.681245,
        lng: 107.134125,
        heading: 20,
        regionClue: 'Trung tâm hành hương Công giáo lớn nằm tại huyện Hải Lăng, tỉnh Quảng Trị.',
        regionClueEn: 'Prominent national Catholic pilgrimage sanctuary in Hai Lang District, Quang Tri Province.'
    },
    {
        id: 'ngo_mon_dai_noi_hue',
        title: 'Ngọ Môn - Đại Nội Huế, Thừa Thiên Huế',
        titleEn: 'Ngo Mon Gate - Imperial City of Hue',
        lat: 16.471245,
        lng: 107.579124,
        heading: 130,
        regionClue: 'Cổng chính phía nam hướng vào Hoàng thành và Tử Cấm Thành Huế.',
        regionClueEn: 'Principal southern gateway leading into the historic Imperial Citadel of Hue.'
    },
    {
        id: 'chua_thien_mu_hue',
        title: 'Chùa Thiên Mụ - Huế',
        titleEn: 'Thien Mu Pagoda - Hue',
        lat: 16.452145,
        lng: 107.544124,
        heading: 85,
        regionClue: 'Ngôi cổ tự uy nghiêm gắn liền với biểu tượng tháp Phước Duyên bên bờ sông Hương, thành phố Huế.',
        regionClueEn: 'Historic seven-story octagonal pagoda overlooking the Perfume River in Hue.'
    },
    {
        id: 'lang_tu_duc_hue',
        title: 'Lăng Tự Đức - Huế',
        titleEn: 'Tomb of Tu Duc - Hue',
        lat: 16.435124,
        lng: 107.581245,
        heading: 310,
        regionClue: 'Quần thể lăng tẩm mang nét thơ mộng, trữ tình bậc nhất của các vua triều Nguyễn tại Huế.',
        regionClueEn: 'Poetic and expansive imperial mausoleum complex of Emperor Tu Duc in Hue.'
    },
    {
        id: 'cau_ngoi_thanh_toan_hue',
        title: 'Cầu ngói Thanh Toàn - Hương Thủy, Thừa Thiên Huế',
        titleEn: 'Thanh Toan Tile-Roofed Bridge - Hue',
        lat: 16.512456,
        lng: 107.501245,
        heading: 45,
        regionClue: 'Cây cầu gỗ lợp ngói cổ kính mang kiến trúc thượng gia hạ kiều ở ngoại ô thành phố Huế.',
        regionClueEn: 'Historic arched tile-roofed footbridge featuring traditional rural Vietnamese architecture near Hue.'
    },
    {
        id: 'ngu_hanh_son_da_nang',
        title: 'Danh thắng Ngũ Hành Sơn - Đà Nẵng',
        titleEn: 'Marble Mountains - Da Nang',
        lat: 16.001812,
        lng: 108.263124,
        heading: 170,
        regionClue: 'Cụm 5 ngọn núi đá vôi với các hang động huyền ảo và chùa cổ tại quận Ngũ Hành Sơn, TP. Đà Nẵng.',
        regionClueEn: 'Cluster of five limestone and marble hills featuring sacred grottoes and pagodas in Da Nang.'
    },
    {
        id: 'cau_vang_ba_na_hills_da_nang',
        title: 'Cầu Vàng - Bà Nà Hills, Đà Nẵng',
        titleEn: 'Golden Bridge - Ba Na Hills, Da Nang',
        lat: 15.998124,
        lng: 107.994124,
        heading: 220,
        regionClue: 'Cây cầu đi bộ nổi tiếng thế giới được nâng đỡ bởi đôi bàn tay khổng lồ trên đỉnh núi Bà Nà, Đà Nẵng.',
        regionClueEn: 'World-famous pedestrian bridge supported by giant stone hands on Ba Na Mountain, Da Nang.'
    },
    {
        id: 'bien_my_khe_da_nang',
        title: 'Bãi biển Mỹ Khê - Đà Nẵng',
        titleEn: 'My Khe Beach - Da Nang',
        lat: 16.058124,
        lng: 108.246124,
        heading: 90,
        regionClue: 'Bãi biển du lịch nổi tiếng dọc theo tuyến đường Võ Nguyên Giáp, TP. Đà Nẵng.',
        regionClueEn: 'Renowned pristine coastal beach along Vo Nguyen Giap Boulevard in Da Nang City.'
    },
    {
        id: 'thap_banh_it_binh_dinh',
        title: 'Tháp Bánh Ít - Tuy Phước, Bình Định',
        titleEn: 'Banh It Cham Towers - Binh Dinh',
        lat: 13.882124,
        lng: 109.181245,
        heading: 160,
        regionClue: 'Quần thể tháp Chăm Pa cổ kính nằm trên ngọn đồi tại huyện Tuy Phước, tỉnh Bình Định.',
        regionClueEn: 'Well-preserved cluster of ancient Cham Hindu temple towers on a hill in Binh Dinh Province.'
    },
    {
        id: 'nha_tho_chinh_toa_nha_trang',
        title: 'Nhà thờ Chánh tòa Nha Trang - Khánh Hòa',
        titleEn: 'Nha Trang Cathedral - Khanh Hoa',
        lat: 12.245124,
        lng: 109.189124,
        heading: 200,
        regionClue: 'Ngôi nhà thờ đá mang phong cách Gothic cổ kính trên đỉnh đồi Hoàng Lân giữa trung tâm TP. Nha Trang.',
        regionClueEn: 'Historic Gothic-style stone cathedral perched on Hoang Lan Hill in downtown Nha Trang.'
    },
    {
        id: 'vien_hai_duong_hoc_nha_trang',
        title: 'Viện Hải dương học Nha Trang - Khánh Hòa',
        titleEn: 'Institute of Oceanography - Nha Trang',
        lat: 12.211245,
        lng: 109.214124,
        heading: 80,
        regionClue: 'Trung tâm nghiên cứu và bảo tàng sinh vật biển lớn nằm tại khu vực Cầu Đá, TP. Nha Trang.',
        regionClueEn: 'Leading marine life research facility and aquarium museum located at Cau Da, Nha Trang.'
    },
    {
        id: 'nha_tho_domaine_de_marie_da_lat',
        title: 'Nhà thờ Domaine de Marie - Đà Lạt, Lâm Đồng',
        titleEn: 'Domaine de Marie Church - Da Lat',
        lat: 11.944125,
        lng: 108.431245,
        heading: 50,
        regionClue: 'Ngôi nhà thờ mang kiến trúc Pháp kết hợp mái nhà rông Tây Nguyên với tông màu hồng trên đồi Mai Anh, TP. Đà Lạt.',
        regionClueEn: 'Pink-walled Catholic convent blending French and indigenous architectural styles in Da Lat.'
    },
    {
        id: 'thien_vien_truc_lam_da_lat',
        title: 'Thiền viện Trúc Lâm - Đà Lạt, Lâm Đồng',
        titleEn: 'Truc Lam Zen Monastery - Da Lat',
        lat: 11.905124,
        lng: 108.441245,
        heading: 180,
        regionClue: 'Thiền viện lớn nằm trên núi Phượng Hoàng phía trên hồ Tuyền Lâm thơ mộng tại thành phố Đà Lạt.',
        regionClueEn: 'Serene mountain Zen monastery overlooking Tuyen Lam Lake in Da Lat, Lam Dong.'
    },
    {
        id: 'thac_datanla_da_lat',
        title: 'Thác Datanla - Đà Lạt, Lâm Đồng',
        titleEn: 'Datanla Waterfall - Da Lat',
        lat: 11.916124,
        lng: 108.448124,
        heading: 240,
        regionClue: 'Khu du lịch thác nước hùng vĩ nổi tiếng với hệ thống máng trượt xuyên rừng thông trên đèo Prenn, Đà Lạt.',
        regionClueEn: 'Scenic multi-tiered waterfall famous for its alpine coaster ride through pine forests near Da Lat.'
    },
    {
        id: 'doi_che_cau_dat_da_lat',
        title: 'Đồi chè Cầu Đất - Xuân Trường, Đà Lạt',
        titleEn: 'Cau Dat Tea Hill - Da Lat',
        lat: 11.854124,
        lng: 108.561245,
        heading: 50,
        regionClue: 'Đồi chè xanh mướt lịch sử hơn một thế kỷ ẩn mình trong sương sớm tại xã Xuân Trường, ngoại ô Đà Lạt.',
        regionClueEn: 'Century-old misty green tea plantation hills located in Xuan Truong commune, rural Da Lat.'
    },
    {
        id: 'thac_pongour_lam_dong',
        title: 'Thác Pongour - Đức Trọng, Lâm Đồng',
        titleEn: 'Pongour Waterfall - Duc Trong, Lam Dong',
        lat: 11.681245,
        lng: 108.261245,
        heading: 140,
        regionClue: 'Ngọn thác 7 tầng hùng vĩ bậc nhất khu vực Nam Tây Nguyên tại huyện Đức Trọng, tỉnh Lâm Đồng.',
        regionClueEn: 'Majestic 7-tiered terraced waterfall in Vietnam’s Central Highlands, Lam Dong Province.'
    },
    {
        id: 'nha_tho_tan_dinh_sai_gon',
        title: 'Nhà thờ Tân Định - Quận 3, TP.HCM',
        titleEn: 'Tan Dinh Church - District 3, HCMC',
        lat: 10.787124,
        lng: 106.691245,
        heading: 35,
        regionClue: 'Ngôi nhà thờ Công giáo mang sắc hồng đặc trưng trên đường Hai Bà Trưng, Quận 3, TP. Hồ Chí Minh.',
        regionClueEn: 'Striking rose-colored Roman Catholic church on Hai Ba Trung Street, District 3, HCMC.'
    },
    {
        id: 'ben_nha_rong_sai_gon',
        title: 'Bến Nhà Rồng - Quận 4, TP.HCM',
        titleEn: 'Nha Rong Wharf - District 4, HCMC',
        lat: 10.768124,
        lng: 106.706812,
        heading: 300,
        regionClue: 'Di tích lịch sử bên sông Sài Gòn, nơi Chủ tịch Hồ Chí Minh ra đi tìm đường cứu nước năm 1911.',
        regionClueEn: 'Historic wharf along the Saigon River where President Ho Chi Minh embarked on his journey in 1911.'
    },
    {
        id: 'dia_dao_cu_chi_tphcm',
        title: 'Khu di tích Địa đạo Củ Chi - TP.HCM',
        titleEn: 'Cu Chi Tunnels Historical Site - HCMC',
        lat: 11.141245,
        lng: 106.461245,
        heading: 90,
        regionClue: 'Hệ thống đường hầm phòng thủ ngầm kiên cố trong lòng đất tại huyện Củ Chi, TP. Hồ Chí Minh.',
        regionClueEn: 'Famous underground defense tunnel network located in Cu Chi District, Ho Chi Minh City.'
    },
    {
        id: 'lang_hoa_sa_dec_dong_thap',
        title: 'Làng hoa kiểng Sa Đéc - TP. Sa Đéc, Đồng Tháp',
        titleEn: 'Sa Dec Flower Village - Dong Thap',
        lat: 10.291245,
        lng: 105.751245,
        heading: 190,
        regionClue: 'Làng nghề trồng hoa kiểng trăm năm tuổi rực rỡ bên dòng sông Tiền thuộc thành phố Sa Đéc, tỉnh Đồng Tháp.',
        regionClueEn: 'Century-old traditional ornamental flower and plant village in Sa Dec City, Dong Thap.'
    },
    {
        id: 'nha_co_huynh_thuy_le_dong_thap',
        title: 'Nhà cổ Huỳnh Thủy Lê - Sa Đéc, Đồng Tháp',
        titleEn: 'Huynh Thuy Le Ancient House - Sa Dec, Dong Thap',
        lat: 10.298124,
        lng: 105.761245,
        heading: 260,
        regionClue: 'Ngôi nhà cổ giao thoa kiến trúc Đông – Tây nổi tiếng bên bờ sông Sa Đéc, tỉnh Đồng Tháp.',
        regionClueEn: 'Historic mansion blending French and traditional Vietnamese architecture in Sa Dec, Dong Thap.'
    },
    {
        id: 'vuon_quoc_gia_tram_chim_dong_thap',
        title: 'Vườn Quốc gia Tràm Chim - Tam Nông, Đồng Tháp',
        titleEn: 'Tram Chim National Park - Dong Thap',
        lat: 10.724124,
        lng: 105.541245,
        heading: 70,
        regionClue: 'Khu bảo tồn đất ngập nước vùng Đồng Tháp Mười nổi tiếng với loài sếu đầu đỏ quý hiếm tại huyện Tam Nông.',
        regionClueEn: 'Wetland nature reserve in the Dong Thap Muoi region famous for rare Sarus cranes.'
    },
    {
        id: 'cho_noi_cai_rang_can_tho',
        title: 'Chợ nổi Cái Răng - Cần Thơ',
        titleEn: 'Cai Rang Floating Market - Can Tho',
        lat: 10.012456,
        lng: 105.741245,
        heading: 110,
        regionClue: 'Chợ nổi sầm uất đặc trưng văn hóa giao thương trên sông nước miền Tây Nam Bộ tại TP. Cần Thơ.',
        regionClueEn: 'Iconic bustling river trade market representing the vibrant waterway culture of the Mekong Delta.'
    },
    {
        id: 'nha_co_binh_thuy_can_tho',
        title: 'Nhà cổ Bình Thủy - Cần Thơ',
        titleEn: 'Binh Thuy Ancient House - Can Tho',
        lat: 10.068124,
        lng: 105.748124,
        heading: 180,
        regionClue: 'Ngôi nhà cổ năm gian hai chái hơn 150 năm tuổi mang kiến trúc Pháp tại quận Bình Thủy, TP. Cần Thơ.',
        regionClueEn: 'Over 150-year-old heritage residence in Binh Thuy District, Can Tho City.'
    },
    {
        id: 'lang_mac_cuu_ha_tien_kien_giang',
        title: 'Khu di tích Lăng Mạc Cửu - Hà Tiên, Kiên Giang',
        titleEn: 'Mac Cuu Family Tombs - Ha Tien, Kien Giang',
        lat: 10.385412,
        lng: 104.491245,
        heading: 30,
        regionClue: 'Quần thể lăng mộ người có công khai phá vùng đất Hà Tiên xưa nằm dưới chân núi Bình San, tỉnh Kiên Giang.',
        regionClueEn: 'Historic mausoleum complex of the founding pioneer family of Ha Tien at the foot of Binh San Mountain.'
    },
    {
        id: 'vuon_quoc_gia_u_minh_thuong',
        title: 'Vườn Quốc gia U Minh Thượng - Kiên Giang',
        titleEn: 'U Minh Thuong National Park - Kien Giang',
        lat: 9.612456,
        lng: 105.101245,
        heading: 160,
        regionClue: 'Hệ sinh thái rừng tràm ngập nước trên đất than bùn quý hiếm tại tỉnh Kiên Giang.',
        regionClueEn: 'Unique peat-swamp melaleuca forest ecosystem of immense biodiversity in Kien Giang Province.'
    },
    {
        id: 'grand_world_phu_quoc',
        title: 'Grand World Phú Quốc - Bắc đảo Phú Quốc, Kiên Giang',
        titleEn: 'Grand World Phu Quoc - Kien Giang',
        lat: 10.334125,
        lng: 103.854124,
        heading: 150,
        regionClue: 'Quần thể du lịch giải trí sầm uất với kênh đào sắc màu tại khu vực Bãi Dài, bắc đảo Phú Quốc, tỉnh Kiên Giang.',
        regionClueEn: 'Vibrant entertainment and resort complex featuring a scenic canal in northern Phu Quoc.'
    },
    {
        id: 'cap_treo_hon_thom_phu_quoc',
        title: 'Ga An Thới - Cáp treo Hòn Thơm, Phú Quốc',
        titleEn: 'An Thoi Station - Hon Thom Cable Car, Phu Quoc',
        lat: 9.991812,
        lng: 104.011245,
        heading: 320,
        regionClue: 'Nhà ga mang kiến trúc đấu trường La Mã cổ đại của tuyến cáp treo vượt biển tại nam đảo Phú Quốc, Kiên Giang.',
        regionClueEn: 'Roman Colosseum-inspired cable car station connecting An Thoi town to Hon Thom island in Phu Quoc.'
    },
    {
        id: 'moc_toa_do_mui_ca_mau',
        title: 'Mốc tọa độ Quốc gia GPS 0001 - Mũi Cà Mau',
        titleEn: 'National GPS 0001 Coordinate Marker - Ca Mau Cape',
        lat: 8.611245,
        lng: 104.718124,
        heading: 210,
        regionClue: 'Biểu tượng con tàu căng buồm hướng ra biển khơi tại điểm mốc cực Nam đất liền Việt Nam, tỉnh Cà Mau.',
        regionClueEn: 'Iconic ship-shaped monument marking the southernmost continental coordinate tip of Vietnam.'
    },
    {
        id: 'bao_tang_lich_su_quan_su_viet_nam_hn',
        title: 'Bảo tàng Lịch sử Quân sự Việt Nam - Hà Nội',
        titleEn: 'Vietnam Military History Museum - Hanoi',
        lat: 21.002456,
        lng: 105.748124,
        heading: 280,
        regionClue: 'Khuôn viên bảo tàng hiện đại quy mô lớn nằm bên Đại lộ Thăng Long, quận Nam Từ Liêm, thủ đô Hà Nội.',
        regionClueEn: 'Sprawling modern national military museum complex located along Thang Long Boulevard in Hanoi.'
    }
];