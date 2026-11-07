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
    }
];