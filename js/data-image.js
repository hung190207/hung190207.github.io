// Section: Dish Database

const DISH_DATABASE = {
    easy: [
        {
            id: 'pho',
            nameCodes: [80, 104, 7903],
            image: 'img/pho.jpeg',
            featureClue: 'Món ăn có nước dùng trong và ngọt thanh ninh từ xương, thơm mùi quế, hồi, thảo quả, ăn cùng sợi bánh trắng mềm.',
            originClue: 'Ra đời tại miền Bắc Việt Nam, cội nguồn từ Nam Định và Hà Nội vào đầu thế kỷ 20.'
        },
        {
            id: 'com_tam',
            nameCodes: [67, 417, 109, 32, 116, 7845, 109],
            image: 'img/com_tam.webp',
            featureClue: 'Nấu từ những hạt gạo bị vỡ khi xay xát, thường ăn kèm sườn nướng, bì, chả trứng, mỡ hành và nước mắm chua ngọt.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long và trở thành món ăn biểu tượng của Sài Gòn – TP.HCM.'
        },
        {
            id: 'banh_mi',
            nameCodes: [66, 225, 110, 104, 32, 109, 236],
            image: 'img/banh_mi.jpg',
            featureClue: 'Vỏ nướng giòn rụm bên ngoài, ruột mềm xốp bên trong, phết pate, bơ, kẹp thịt, chả lụa, đồ chua và ngò rí.',
            originClue: 'Hình thành tại Sài Gòn từ sự giao thoa ẩm thực Việt – Pháp, biến tấu từ ổ bánh baguette thành món ăn đường phố.'
        },
        {
            id: 'bun_thit_nuong',
            nameCodes: [66, 250, 110, 32, 116, 104, 7883, 116, 32, 110, 432, 7899, 110, 103],
            image: 'img/bun_thit_nuong.png',
            featureClue: 'Món bún trộn khô không chan nước lèo nóng, gồm thịt heo ướp sả nướng vàng thơm, đồ chua, đậu phộng rang và mỡ hành.',
            originClue: 'Có nguồn gốc từ miền Trung và miền Nam Việt Nam, đặc biệt phổ biến tại Sài Gòn và các tỉnh Nam Bộ.'
        },
        {
            id: 'bun_bo_hue',
            nameCodes: [66, 250, 110, 32, 98, 242, 32, 72, 117, 7871],
            image: 'img/bun-bo-hue.webp',
            featureClue: 'Món bún nổi tiếng với sợi bún to, nước dùng đậm đà vị sả và mắm ruốc đặc trưng, ăn kèm thịt bò, chả và giò heo.',
            originClue: 'Xuất xứ từ vùng đất cố đô Huế, mang đậm phong cách ẩm thực miền Trung.'
        },       
        {
            id: 'goi_cuon',
            nameCodes: [71, 7887, 105, 32, 99, 117, 7889, 110],
            image: 'img/goi_cuon.jpg',
            featureClue: 'Món cuốn tươi gồm tôm, thịt luộc, bún và rau thơm gói trong lớp bánh tráng mỏng trong suốt, chấm tương đậu phộng.',
            originClue: 'Có nguồn gốc từ miền Nam Việt Nam, đặc biệt phổ biến ở Sài Gòn và các tỉnh Nam Bộ.'
        },
        {
            id: 'banh_xeo',
            nameCodes: [66, 225, 110, 104, 32, 120, 232, 111],
            image: 'img/banh_xeo.jpg',
            featureClue: 'Chiếc bánh vàng giòn làm từ bột gạo pha nghệ, nhân tôm, thịt, giá đỗ, ăn cuốn rau sống và chấm nước mắm chua ngọt.',
            originClue: 'Phổ biến ở miền Trung và miền Nam, tên gọi bắt nguồn từ tiếng bột đổ xèo xèo khi chạm chảo nóng.'
        },
        {
            id: 'chao_long',
            nameCodes: [67, 104, 225, 111, 32, 108, 242, 110, 103],
            image: 'img/chao_long.webp',
            featureClue: 'Món ăn nóng gồm gạo nấu nhừ sánh mịn, ăn cùng tim, gan, bầu dục, dồi heo, thêm hành, tiêu và quẩy.',
            originClue: 'Món ăn dân dã có từ lâu đời, phổ biến ở nhiều vùng, nổi tiếng nhất ở miền Bắc và Sài Gòn.'
        },
        {
            id: 'banh_chung',
            nameCodes: [66, 225, 110, 104, 32, 99, 104, 432, 110, 103],
            image: 'img/banh_chung.jpg',
            featureClue: 'Món bánh hình vuông gói lá dong, nhân đậu xanh và thịt mỡ bọc trong lớp gạo nếp, luộc nhiều giờ liền.',
            originClue: 'Gắn với truyền thuyết hoàng tử Lang Liêu thời Hùng Vương, là món không thể thiếu trong dịp Tết miền Bắc.'
        },
        {
            id: 'banh_tet',
            nameCodes: [66, 225, 110, 104, 32, 116, 233, 116],
            image: 'img/banh_tet.jpg',
            featureClue: 'Món bánh hình trụ dài gói lá chuối, nhân đậu xanh và thịt heo bọc trong lớp gạo nếp, thường cắt thành khoanh bằng sợi dây.',
            originClue: 'Đặc trưng của miền Trung và miền Nam trong dịp Tết, được xem là phiên bản phương Nam của món bánh vuông miền Bắc.'
        },
        {
            id: 'che_ba_mau',
            nameCodes: [67, 104, 232, 32, 98, 97, 32, 109, 224, 117],
            image: 'img/che_ba_mau.jpg',
            featureClue: 'Món tráng miệng giải nhiệt nhiều lớp màu từ đậu đỏ, đậu xanh nghiền và thạch, rưới nước cốt dừa, ăn cùng đá bào.',
            originClue: 'Món chè phổ biến ở miền Nam, trở nên quen thuộc nhất tại Sài Gòn và các tỉnh Nam Bộ.'
        },
        {
            id: 'bo_luc_lac',
            nameCodes: [66, 242, 32, 108, 250, 99, 32, 108, 7855, 99],
            image: 'img/bo_luc_lac.jpg',
            featureClue: 'Món xào gồm thịt bò cắt hạt lựu, áp chảo lửa lớn cùng hành tây, ớt chuông, ăn kèm rau xà lách, cà chua và cơm.',
            originClue: 'Phổ biến ở Sài Gòn và Nam Bộ, tên gọi bắt nguồn từ động tác lắc chảo, được cho là chịu ảnh hưởng ẩm thực Pháp.'
        },
        {
            id: 'ca_phe_sua_da',
            nameCodes: [67, 224, 32, 112, 104, 234, 32, 115, 7919, 97, 32, 273, 225],
            image: 'img/ca_phe_sua_da.jpg',
            featureClue: 'Thức uống có vị đắng đậm của hạt rang, pha cùng sữa đặc béo ngọt, rót qua đá lạnh, thường được ủ chậm qua phin nhỏ.',
            originClue: 'Cây cà phê được người Pháp đưa vào Việt Nam năm 1857, sữa đặc được dùng thay sữa tươi hiếm có thời xưa và thành nét đặc trưng.'
        },
        {
            id: 'trung_vit_lon',
            nameCodes: [84, 114, 7913, 110, 103, 32, 118, 7883, 116, 32, 108, 7897, 110],
            image: 'img/trung_vit_lon.jpg',
            featureClue: 'Món ăn từ trứng ấp dở có phôi thai bên trong, luộc nóng, ăn cùng rau răm, muối tiêu chanh và gừng.',
            originClue: 'Món ăn dân gian phổ biến khắp Việt Nam và nhiều nước Đông Nam Á, thường dùng như món ăn vặt hoặc nhắm.'
        },
        {
            id: 'canh_chua',
            nameCodes: [67, 97, 110, 104, 32, 99, 104, 117, 97],
            image: 'img/canh_chua.jpg',
            featureClue: 'Món canh có vị chua thanh từ me, thơm, cà chua, thêm đậu bắp, bạc hà, giá đỗ và cá, thơm mùi ngò ôm.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long, gắn với nguồn cá tôm dồi dào của miền Tây Nam Bộ.'
        },
        {
            id: 'thit_kho_trung',
            nameCodes: [84, 104, 7883, 116, 32, 107, 104, 111, 32, 116, 114, 7913, 110, 103],
            image: 'img/thit_kho_trung.jpg',
            featureClue: 'Món ăn mặn gồm thịt ba chỉ và trứng nấu nhừ trong nước dừa tươi, có màu cánh gián và ăn kèm dưa chua.',
            originClue: 'Món truyền thống của miền Nam, gắn liền với mâm cơm ngày Tết, có ảnh hưởng từ cách nấu của người Hoa.'
        },
        {
            id: 'banh_bao',
            nameCodes: [66, 225, 110, 104, 32, 98, 97, 111],
            image: 'img/banh_bao.jpg',
            featureClue: 'Món bánh hấp trắng xốp mềm, tròn như chiếc nón, bên trong có nhân thịt heo băm, trứng cút và lạp xưởng.',
            originClue: 'Có nguồn gốc từ ẩm thực Trung Hoa, được người Hoa mang vào Việt Nam và phổ biến mạnh ở Chợ Lớn, Sài Gòn.'
        },
        {
            id: 'banh_flan',
            nameCodes: [66, 225, 110, 104, 32, 102, 108, 97, 110],
            image: 'img/banh_flan.jpg',
            featureClue: 'Món tráng miệng làm từ trứng và sữa, mềm mịn, rưới lớp caramel đắng nhẹ, thường ăn lạnh hoặc với cà phê và đá.',
            originClue: 'Du nhập từ ẩm thực Pháp (crème caramel) trong thời Pháp thuộc, sau đó được Việt hóa và phổ biến khắp cả nước.'
        },
        {
            id: 'bap_xao',
            nameCodes: [66, 7855, 112, 32, 120, 224, 111],
            img: 'img/bap_xao.jpg',
            featureClue: 'Món ăn vặt làm từ hạt ngô tươi xào cùng bơ, hành phi, tép khô và muối ớt, được bán trong ly giấy.',
            originClue: 'Món ăn vặt đường phố nổi tiếng của Sài Gòn, thường được bán ở các vỉa hè và khu vực gần trường học.'
        },
        {
            id: 'banh_trang_tron',
            nameCodes: [66, 225, 110, 104, 32, 116, 114, 225, 110, 103, 32, 116, 114, 7897, 110],
            img: 'img/banh_trang_tron.jpg',
            featureClue: 'Món ăn vặt gồm sợi trắng cắt nhỏ trộn cùng khô bò, xoài xanh, trứng cút, rau răm, hành phi và sa tế cay.',
            originClue: 'Nổi lên ở Sài Gòn như món ăn vặt đường phố, sử dụng nguyên liệu đặc sản vùng Tây Ninh.'
        },
        {
            id: 'banh_trang_nuong',
            nameCodes: [66, 225, 110, 104, 32, 116, 114, 225, 110, 103, 32, 110, 432, 7899, 110, 103],
            img: 'img/banh_trang_nuong.jpg',
            featureClue: 'Món ăn vặt giòn nướng trên than hồng, phết trứng, hành lá, xúc xích, phô mai, được người ta ví như "pizza Việt Nam".',
            originClue: 'Phổ biến ở Đà Lạt như món ăn vặt buổi tối trời lạnh, đồng thời cũng là đặc sản của vùng Ninh Thuận.'
        },
        {
            id: 'bo_ne',
            nameCodes: [66, 242, 32, 110, 233],
            image: 'img/bo_ne.jpg',
            featureClue: 'Món ăn sáng được dọn trên chảo gang nóng, gồm trứng ốp la, bò bít tết, pate, xúc xích, ăn kèm bánh mì.',
            originClue: 'Phổ biến tại Sài Gòn, được cho là chịu ảnh hưởng từ món bít tết của ẩm thực Pháp.'
        },


    ],

    medium: [
        {
            id: 'banh_khot',
            nameCodes: [66, 225, 110, 104, 32, 107, 104, 7885, 116],
            image: 'img/banh_khot.webp',
            featureClue: 'Bánh tròn nhỏ đổ trong khuôn sâu lòng, vỏ giòn rụm, nhân tôm tươi, rắc mỡ hành và tôm cháy, ăn kèm rau sống và nước mắm.',
            originClue: 'Đặc sản nổi tiếng của vùng biển Vũng Tàu và các tỉnh miền Nam.'
        },
        {
            id: 'banh_gai',
            nameCodes: [66, 225, 110, 104, 32, 103, 97, 105],
            image: 'img/banh_gai.jpg',
            featureClue: 'Bánh có lớp vỏ màu đen đặc trưng làm từ lá gai giã nhuyễn trộn bột nếp, nhân đậu xanh dừa thơm ngọt bùi, gói lá chuối khô.',
            originClue: 'Đặc sản truyền thống trứ danh của vùng đồng bằng Bắc Bộ như Hải Dương, Nam Định và Thanh Hóa.'
        },
        {
            id: 'mi_vit_tiem',
            nameCodes: [77, 236, 32, 118, 7883, 116, 32, 116, 105, 7873, 109],
            image: 'img/mi_vit_tiem.jpg',
            featureClue: 'Mì trứng sợi dai ăn cùng đùi vịt chiên vàng rồi tiềm mềm trong nồi nước dùng thảo mộc thuốc bắc thơm dịu.',
            originClue: 'Món ăn có gốc từ người Hoa, gắn liền với văn hóa ẩm thực khu vực Chợ Lớn, Sài Gòn.'
        },
        {
            id: 'che_khuc_bach',
            nameCodes: [67, 104, 232, 32, 107, 104, 250, 99, 32, 98, 7841, 99, 104],
            image: 'img/che_khuc_bach.jpg',
            featureClue: 'Món chè giải nhiệt gồm những viên thạch kem sữa phô mai béo ngậy cắt miếng, ăn kèm vải hoặc nhãn lồng và hạnh nhân lát.',
            originClue: 'Trào lưu ẩm thực khởi nguồn từ Hà Nội và Sài Gòn, rất được ưa chuộng vào mùa hè.'
        },
        {
            id: 'che_buoi',
            nameCodes: [67, 104, 232, 32, 98, 432, 7903, 105],
            image: 'img/che_buoi.jpg',
            featureClue: 'Được nấu từ phần cùi trắng giòn sần sật đã khử sạch vị đắng, kết hợp cùng đậu xanh bùi và nước cốt dừa sánh đặc.',
            originClue: 'Món chè dân dã nổi tiếng của vùng sông nước miền Tây Nam Bộ, đặc biệt là An Giang và Cần Thơ.'
        },
        {
            id: 'bo_pia',
            nameCodes: [66, 242, 32, 112, 237, 97],
            image: 'img/bo_pia.jpg',
            featureClue: 'Món cuốn nhỏ gọn gồm bánh tráng mỏng cuốn củ sắn, lạp xưởng, trứng tráng, tép khô, rau thơm và chấm tương ngọt đậu phộng.',
            originClue: 'Món ăn vặt đường phố du nhập từ ẩm thực Triều Châu, rất phổ biến tại miền Nam.'
        }
    ],

    hard: [
        {
            id: 'thang_co',
            nameCodes: [84, 104, 7855, 110, 103, 32, 99, 7889],
            image: 'img/thang_co.webp',
            featureClue: 'Món canh truyền thống ninh nhừ từ thịt, xương và nội tạng cùng thảo quả, hạt dổi và nhiều loại gia vị núi rừng đặc trưng.',
            originClue: 'Món ăn truyền thống lâu đời của đồng bào dân tộc H’Mông tại vùng cao nguyên Hà Giang và Lào Cai.'
        },
        {
            id: 'che_suong_sa_hat_luu',
            nameCodes: [67, 104, 232, 32, 115, 432, 417, 110, 103, 32, 115, 97, 32, 104, 7841, 116, 32, 108, 7921, 117],
            image: 'img/che-suong-sa-hat-luu.jpg',
            featureClue: 'Món chè nhiều màu sắc gồm thạch rong biển giòn mát, củ năng áo bột năng luộc trong veo, đậu xanh đánh và nước cốt dừa.',
            originClue: 'Món chè giải nhiệt lâu đời và phổ biến rộng rãi tại Sài Gòn cùng các tỉnh miền Nam.'
        },
        {
            id: 'luon_xao_lan',
            nameCodes: [76, 432, 417, 110, 32, 120, 224, 111, 32, 108, 259, 110],
            image: 'img/luon_xao_lan.jpg',
            featureClue: 'Thịt đồng xào săn thơm lừng với sả ớt, cà ri, bún tàu, nấm mèo và nước cốt dừa béo ngậy, rắc đậu phộng rang.',
            originClue: 'Món ăn đặc sản đậm chất dân dã của vùng sông nước miền Tây Nam Bộ.'
        },
        {
            id: 'banh_to',
            nameCodes: [66, 225, 110, 104, 32, 116, 7893],
            image: 'img/banh_to.jpg',
            featureClue: 'Bánh làm từ gạo nếp và đường đen đặc sản đem hấp chín trong rọ tre lót lá chuối, dẻo quánh, ăn trực tiếp hoặc chiên giòn.',
            originClue: 'Bánh cổ truyền không thể thiếu trong mâm cỗ ngày Tết của người dân xứ Quảng Nam.'
        },
        {
            id: 'bun_doc_mung',
            nameCodes: [66, 250, 110, 32, 100, 7885, 99, 32, 109, 249, 110, 103],
            image: 'img/bun_doc_mung.jpg',
            featureClue: 'Bát bún nước dùng xương heo trong ngọt, ăn kèm sườn non, mọc viên, thịt chân giò thái lát và phần cuống lá giòn sần sật.',
            originClue: 'Món bún thanh tao quen thuộc của ẩm thực Hà Nội.'
        }
    ]
};