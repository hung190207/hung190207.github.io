// Dishes Database

const DISH_DATABASE = {
    easy: [
        {
            id: 'pho',
            nameCodes: [80, 104, 7903],
            image: 'img/pho.jpeg',
            featureClue: 'Món ăn có nước dùng trong và ngọt thanh ninh từ xương, thơm mùi quế, hồi, thảo quả, ăn cùng sợi bánh trắng mềm.',
            featureClueEn: 'A dish with clear, savory bone broth infused with cinnamon, star anise, and cardamom, served with soft white rice noodles.',
            originClue: 'Ra đời tại miền Bắc Việt Nam, cội nguồn từ Nam Định và Hà Nội vào đầu thế kỷ 20.',
            originClueEn: 'Originated in Northern Vietnam, rooted in Nam Dinh and Hanoi in the early 20th century.'
        },
        {
            id: 'com_tam',
            nameCodes: [67, 417, 109, 32, 116, 7845, 109],
            image: 'img/com_tam.webp',
            featureClue: 'Nấu từ những hạt gạo bị vỡ khi xay xát, thường ăn kèm sườn nướng, bì, chả trứng, mỡ hành và nước mắm chua ngọt.',
            featureClueEn: 'Cooked from fractured rice grains, typically served with grilled pork ribs, shredded pork skin, steamed egg meatloaf, scallion oil, and sweet-and-sour fish sauce.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long và trở thành món ăn biểu tượng của Sài Gòn – TP.HCM.',
            originClueEn: 'Originated in the Mekong Delta and became an iconic dish of Saigon – Ho Chi Minh City.'
        },
        {
            id: 'banh_mi',
            nameCodes: [66, 225, 110, 104, 32, 109, 236],
            image: 'img/banh_mi.jpg',
            featureClue: 'Vỏ nướng giòn rụm bên ngoài, ruột mềm xốp bên trong, phết pate, bơ, kẹp thịt, chả lụa, đồ chua và ngò rí.',
            featureClueEn: 'Crispy baked crust outside and airy inside, spread with pâté and butter, stuffed with meats, Vietnamese sausage, pickled vegetables, and cilantro.',
            originClue: 'Hình thành tại Sài Gòn từ sự giao thoa ẩm thực Việt – Pháp, biến tấu từ ổ bánh baguette thành món ăn đường phố.',
            originClueEn: 'Formed in Saigon through Vietnamese–French culinary fusion, adapting the baguette into an iconic street food.'
        },
        {
            id: 'bun_thit_nuong',
            nameCodes: [66, 250, 110, 32, 116, 104, 7883, 116, 32, 110, 432, 7899, 110, 103],
            image: 'img/bun_thit_nuong.png',
            featureClue: 'Món bún trộn khô không chan nước lèo nóng, gồm thịt heo ướp sả nướng vàng thơm, đồ chua, đậu phộng rang và mỡ hành.',
            featureClueEn: 'A dry noodle bowl without hot broth, topped with lemongrass-marinated grilled pork, pickled vegetables, roasted peanuts, and scallion oil.',
            originClue: 'Có nguồn gốc từ miền Trung và miền Nam Việt Nam, đặc biệt phổ biến tại Sài Gòn và các tỉnh Nam Bộ.',
            originClueEn: 'Originated in Central and Southern Vietnam, especially popular in Saigon and Southern provinces.'
        },
        {
            id: 'bun_bo_hue',
            nameCodes: [66, 250, 110, 32, 98, 242, 32, 72, 117, 7871],
            image: 'img/bun-bo-hue.webp',
            featureClue: 'Món bún nổi tiếng với sợi bún to, nước dùng đậm đà vị sả và mắm ruốc đặc trưng, ăn kèm thịt bò, chả và giò heo.',
            featureClueEn: 'Famous for thick round rice noodles, rich broth flavored with lemongrass and fermented shrimp paste, served with beef, pork roll, and pork knuckle.',
            originClue: 'Xuất xứ từ vùng đất cố đô Huế, mang đậm phong cách ẩm thực miền Trung.',
            originClueEn: 'Originated from the ancient capital of Hue, embodying Central Vietnamese cuisine.'
        },
        {
            id: 'goi_cuon',
            nameCodes: [71, 7887, 105, 32, 99, 117, 7889, 110],
            image: 'img/goi_cuon.jpg',
            featureClue: 'Món cuốn tươi gồm tôm, thịt luộc, bún và rau thơm gói trong lớp bánh tráng mỏng trong suốt, chấm tương đậu phộng.',
            featureClueEn: 'Fresh rolls filled with shrimp, boiled pork, rice vermicelli, and herbs wrapped in translucent rice paper, served with peanut dipping sauce.',
            originClue: 'Có nguồn gốc từ miền Nam Việt Nam, đặc biệt phổ biến ở Sài Gòn và các tỉnh Nam Bộ.',
            originClueEn: 'Originated in Southern Vietnam, especially popular in Saigon and Southern provinces.'
        },
        {
            id: 'banh_xeo',
            nameCodes: [66, 225, 110, 104, 32, 120, 232, 111],
            image: 'img/banh_xeo.jpg',
            featureClue: 'Chiếc bánh vàng giòn làm từ bột gạo pha nghệ, nhân tôm, thịt, giá đỗ, ăn cuốn rau sống và chấm nước mắm chua ngọt.',
            featureClueEn: 'Crispy golden crepe made from rice flour and turmeric, stuffed with shrimp, pork, and bean sprouts, wrapped in fresh greens and dipped in sweet-and-sour fish sauce.',
            originClue: 'Phổ biến ở miền Trung và miền Nam, tên gọi bắt nguồn từ tiếng bột đổ xèo xèo khi chạm chảo nóng.',
            originClueEn: 'Popular in Central and Southern Vietnam, named after the sizzling sound when the rice batter hits the hot pan.'
        },
        {
            id: 'chao_long',
            nameCodes: [67, 104, 225, 111, 32, 108, 242, 110, 103],
            image: 'img/chao_long.webp',
            featureClue: 'Món ăn nóng gồm gạo nấu nhừ sánh mịn, ăn cùng tim, gan, bầu dục, dồi heo, thêm hành, tiêu và quẩy.',
            featureClueEn: 'Hot savory rice porridge cooked until smooth, served with pork heart, liver, kidney, blood sausage, scallions, pepper, and fried dough sticks.',
            originClue: 'Món ăn dân dã có từ lâu đời, phổ biến ở nhiều vùng, nổi tiếng nhất ở miền Bắc và Sài Gòn.',
            originClueEn: 'A long-standing rustic dish popular across many regions, especially famous in Northern Vietnam and Saigon.'
        },
        {
            id: 'banh_chung',
            nameCodes: [66, 225, 110, 104, 32, 99, 104, 432, 110, 103],
            image: 'img/banh_chung.jpg',
            featureClue: 'Món bánh hình vuông gói lá dong, nhân đậu xanh và thịt mỡ bọc trong lớp gạo nếp, luộc nhiều giờ liền.',
            featureClueEn: 'Square sticky rice cake wrapped in dong leaves, filled with mung beans and fatty pork, boiled for many hours.',
            originClue: 'Gắn với truyền thuyết hoàng tử Lang Liêu thời Hùng Vương, là món không thể thiếu trong dịp Tết miền Bắc.',
            originClueEn: 'Tied to the legend of Prince Lang Lieu during the Hung Kings era, an essential Tet dish in Northern Vietnam.'
        },
        {
            id: 'banh_tet',
            nameCodes: [66, 225, 110, 104, 32, 116, 233, 116],
            image: 'img/banh_tet.jpg',
            featureClue: 'Món bánh hình trụ dài gói lá chuối, nhân đậu xanh và thịt heo bọc trong lớp gạo nếp, thường cắt thành khoanh bằng sợi dây.',
            featureClueEn: 'Cylindrical glutinous rice cake wrapped in banana leaves, filled with mung bean and pork, typically sliced into rounds using a string.',
            originClue: 'Đặc trưng của miền Trung và miền Nam trong dịp Tết, được xem là phiên bản phương Nam của món bánh vuông miền Bắc.',
            originClueEn: 'A signature Tet dish in Central and Southern Vietnam, considered the southern counterpart to the northern square sticky rice cake.'
        },
        {
            id: 'che_ba_mau',
            nameCodes: [67, 104, 232, 32, 98, 97, 32, 109, 224, 117],
            image: 'img/che_ba_mau.jpg',
            featureClue: 'Món tráng miệng giải nhiệt nhiều lớp màu từ đậu đỏ, đậu xanh nghiền và thạch, rưới nước cốt dừa, ăn cùng đá bào.',
            featureClueEn: 'Refreshing layered dessert made with red beans, mashed mung beans, and pandan jelly, topped with coconut milk and shaved ice.',
            originClue: 'Món chè phổ biến ở miền Nam, trở nên quen thuộc nhất tại Sài Gòn và các tỉnh Nam Bộ.',
            originClueEn: 'A popular sweet soup in Southern Vietnam, most familiar in Saigon and Southern provinces.'
        },
        {
            id: 'bo_luc_lac',
            nameCodes: [66, 242, 32, 108, 250, 99, 32, 108, 7855, 99],
            image: 'img/bo_luc_lac.jpg',
            featureClue: 'Món xào gồm thịt bò cắt hạt lựu, áp chảo lửa lớn cùng hành tây, ớt chuông, ăn kèm rau xà lách, cà chua và cơm.',
            featureClueEn: 'Wok-seared cubed beef cooked over high heat with onions and bell peppers, served with lettuce, tomatoes, and rice.',
            originClue: 'Phổ biến ở Sài Gòn và Nam Bộ, tên gọi bắt nguồn từ động tác lắc chảo, được cho là chịu ảnh hưởng ẩm thực Pháp.',
            originClueEn: 'Popular in Saigon and Southern Vietnam, named after the shaking motion of the wok and influenced by French cuisine.'
        },
        {
            id: 'ca_phe_sua_da',
            nameCodes: [67, 224, 32, 112, 104, 234, 32, 115, 7919, 97, 32, 273, 225],
            image: 'img/ca_phe_sua_da.jpg',
            featureClue: 'Thức uống có vị đắng đậm của hạt rang, pha cùng sữa đặc béo ngọt, rót qua đá lạnh, thường được ủ chậm qua phin nhỏ.',
            featureClueEn: 'Strong dark roast coffee slow-dripped through a metal phin filter, mixed with sweet condensed milk and poured over ice.',
            originClue: 'Cây cà phê được người Pháp đưa vào Việt Nam năm 1857, sữa đặc được dùng thay sữa tươi hiếm có thời xưa và thành nét đặc trưng.',
            originClueEn: 'Coffee was introduced by the French in 1857; condensed milk replaced scarce fresh milk and became a Vietnamese signature.'
        },
        {
            id: 'trung_vit_lon',
            nameCodes: [84, 114, 7913, 110, 103, 32, 118, 7883, 116, 32, 108, 7897, 110],
            image: 'img/trung_vit_lon.jpg',
            featureClue: 'Món ăn từ trứng ấp dở có phôi thai bên trong, luộc nóng, ăn cùng rau răm, muối tiêu chanh và gừng.',
            featureClueEn: 'Fertilized duck egg boiled hot and eaten with Vietnamese coriander, lime-pepper salt, and shredded ginger.',
            originClue: 'Món ăn dân gian phổ biến khắp Việt Nam và nhiều nước Đông Nam Á, thường dùng như món ăn vặt hoặc nhắm.',
            originClueEn: 'A popular street snack across Vietnam and Southeast Asia.'
        },
        {
            id: 'canh_chua',
            nameCodes: [67, 97, 110, 104, 32, 99, 104, 117, 97],
            image: 'img/canh_chua.jpg',
            featureClue: 'Món canh có vị chua thanh từ me, thơm, cà chua, thêm đậu bắp, bạc hà, giá đỗ và cá, thơm mùi ngò ôm.',
            featureClueEn: 'Tangy soup flavored with tamarind, pineapple, and tomatoes, cooked with fish, okra, elephant ear stems, bean sprouts, and rice paddy herb.',
            originClue: 'Xuất xứ từ vùng đồng bằng sông Cửu Long, gắn với nguồn cá tôm dồi dào của miền Tây Nam Bộ.',
            originClueEn: 'Originated in the Mekong Delta, closely tied to the abundant freshwater fish of Southwestern Vietnam.'
        },
        {
            id: 'thit_kho_trung',
            nameCodes: [84, 104, 7883, 116, 32, 107, 104, 111, 32, 116, 114, 7913, 110, 103],
            image: 'img/thit_kho_trung.jpg',
            featureClue: 'Món ăn mặn gồm thịt ba chỉ và trứng nấu nhừ trong nước dừa tươi, có màu cánh gián và ăn kèm dưa chua.',
            featureClueEn: 'Savory braised pork belly and boiled eggs simmered until tender in fresh coconut water, served with pickled mustard greens.',
            originClue: 'Món truyền thống của miền Nam, gắn liền với mâm cơm ngày Tết, có ảnh hưởng từ cách nấu của người Hoa.',
            originClueEn: 'A traditional Southern Vietnamese dish central to Tet family meals, influenced by Chinese braising techniques.'
        },
        {
            id: 'banh_bao',
            nameCodes: [66, 225, 110, 104, 32, 98, 97, 111],
            image: 'img/banh_bao.jpg',
            featureClue: 'Món bánh hấp trắng xốp mềm, tròn như chiếc nón, bên trong có nhân thịt heo băm, trứng cút và lạp xưởng.',
            featureClueEn: 'Soft, fluffy white steamed bun filled with minced pork, wood ear mushrooms, quail eggs, and Chinese sausage.',
            originClue: 'Có nguồn gốc từ ẩm thực Trung Hoa, được người Hoa mang vào Việt Nam và phổ biến mạnh ở Chợ Lớn, Sài Gòn.',
            originClueEn: 'Rooted in Chinese cuisine, brought to Vietnam by the Hoa community and popularized in Cho Lon, Saigon.'
        },
        {
            id: 'banh_flan',
            nameCodes: [66, 225, 110, 104, 32, 102, 108, 97, 110],
            image: 'img/banh_flan.jpg',
            featureClue: 'Món tráng miệng làm từ trứng và sữa, mềm mịn, rưới lớp caramel đắng nhẹ, thường ăn lạnh hoặc với cà phê và đá.',
            featureClueEn: 'Silky custard dessert made from eggs and milk, topped with caramel sauce and often served chilled with black coffee and crushed ice.',
            originClue: 'Du nhập từ ẩm thực Pháp (crème caramel) trong thời Pháp thuộc, sau đó được Việt hóa và phổ biến khắp cả nước.',
            originClueEn: 'Introduced from French crème caramel during the colonial era and adapted across Vietnam.'
        },
        {
            id: 'bap_xao',
            nameCodes: [66, 7855, 112, 32, 120, 224, 111],
            image: 'img/bap_xao.jpg',
            featureClue: 'Món ăn vặt làm từ hạt ngô tươi xào cùng bơ, hành phi, tép khô và muối ớt, được bán trong ly giấy.',
            featureClueEn: 'Street snack of sweet corn kernels stir-fried with butter, scallions, dried baby shrimp, and chili salt.',
            originClue: 'Món ăn vặt đường phố nổi tiếng của Sài Gòn, thường được bán ở các vỉa hè và khu vực gần trường học.',
            originClueEn: 'A famous Saigon street snack commonly sold along sidewalks and near schools.'
        },
        {
            id: 'banh_trang_tron',
            nameCodes: [66, 225, 110, 104, 32, 116, 114, 225, 110, 103, 32, 116, 114, 7897, 110],
            image: 'img/banh_trang_tron.jpg',
            featureClue: 'Món ăn vặt gồm sợi trắng cắt nhỏ trộn cùng khô bò, xoài xanh, trứng cút, rau răm, hành phi và sa tế cay.',
            featureClueEn: 'Popular snack of julienned rice paper tossed with beef jerky, green mango, quail eggs, Vietnamese coriander, fried shallots, and spicy satay.',
            originClue: 'Nổi lên ở Sài Gòn như món ăn vặt đường phố, sử dụng nguyên liệu đặc sản vùng Tây Ninh.',
            originClueEn: 'Rose to fame in Saigon as a street snack utilizing specialty rice paper from Tay Ninh.'
        },
        {
            id: 'banh_trang_nuong',
            nameCodes: [66, 225, 110, 104, 32, 116, 114, 225, 110, 103, 32, 110, 432, 7899, 110, 103],
            image: 'img/banh_trang_nuong.jpg',
            featureClue: 'Món ăn vặt giòn nướng trên than hồng, phết trứng, hành lá, xúc xích, phô mai, được người ta ví như "pizza Việt Nam".',
            featureClueEn: 'Crispy rice paper grilled over charcoal with beaten egg, scallions, sausage, and cheese, often nicknamed "Vietnamese pizza".',
            originClue: 'Phổ biến ở Đà Lạt như món ăn vặt buổi tối trời lạnh, đồng thời cũng là đặc sản của vùng Ninh Thuận.',
            originClueEn: 'Popular in chilly Da Lat night markets as well as a specialty of Ninh Thuan province.'
        },
        {
            id: 'bo_ne',
            nameCodes: [66, 242, 32, 110, 233],
            image: 'img/bo_ne.jpg',
            featureClue: 'Món ăn sáng được dọn trên chảo gang nóng, gồm trứng ốp la, bò bít tết, pate, xúc xích, ăn kèm bánh mì.',
            featureClueEn: 'Breakfast dish served sizzling on a cast-iron platter with steak, sunny-side-up egg, pâté, and sausage alongside baguette.',
            originClue: 'Phổ biến tại Sài Gòn, được cho là chịu ảnh hưởng từ món bít tết của ẩm thực Pháp.',
            originClueEn: 'Popular in Saigon and Central Vietnam, inspired by French steak dishes.'
        }
    ],

    medium: [
        {
            id: 'banh_khot',
            nameCodes: [66, 225, 110, 104, 32, 107, 104, 7885, 116],
            image: 'img/banh_khot.webp',
            featureClue: 'Bánh tròn nhỏ đổ trong khuôn sâu lòng, vỏ giòn rụm, nhân tôm tươi, rắc mỡ hành và tôm cháy, ăn kèm rau sống và nước mắm.',
            featureClueEn: 'Small round crispy savory pancakes cooked in a molded pan, topped with fresh shrimp, scallion oil, and dried shrimp floss, eaten with herbs and fish sauce.',
            originClue: 'Đặc sản nổi tiếng của vùng biển Vũng Tàu và các tỉnh miền Nam.',
            originClueEn: 'A famous coastal specialty of Vung Tau and Southern provinces.'
        },
        {
            id: 'banh_gai',
            nameCodes: [66, 225, 110, 104, 32, 103, 97, 105],
            image: 'img/banh_gai.jpg',
            featureClue: 'Bánh có lớp vỏ màu đen đặc trưng làm từ lá gai giã nhuyễn trộn bột nếp, nhân đậu xanh dừa thơm ngọt bùi, gói lá chuối khô.',
            featureClueEn: 'Sweet cake with a distinctive black glutinous wrapper made from ramie leaves, filled with mung bean and coconut paste, wrapped in dried banana leaves.',
            originClue: 'Đặc sản truyền thống trứ danh của vùng đồng bằng Bắc Bộ như Hải Dương, Nam Định và Thanh Hóa.',
            originClueEn: 'A renowned traditional specialty of the Red River Delta and North Central provinces like Hai Duong, Nam Dinh, and Thanh Hoa.'
        },
        {
            id: 'mi_vit_tiem',
            nameCodes: [77, 236, 32, 118, 7883, 116, 32, 116, 105, 7873, 109],
            image: 'img/mi_vit_tiem.jpg',
            featureClue: 'Mì trứng sợi dai ăn cùng đùi vịt chiên vàng rồi tiềm mềm trong nồi nước dùng thảo mộc thuốc bắc thơm dịu.',
            featureClueEn: 'Chewy egg noodles served with a golden-fried duck leg braised until tender in an aromatic Chinese herbal broth.',
            originClue: 'Món ăn có gốc từ người Hoa, gắn liền với văn hóa ẩm thực khu vực Chợ Lớn, Sài Gòn.',
            originClueEn: 'A Cantonese-rooted dish closely associated with the culinary heritage of Cho Lon, Saigon.'
        },
        {
            id: 'che_khuc_bach',
            nameCodes: [67, 104, 232, 32, 107, 104, 250, 99, 32, 98, 7841, 99, 104],
            image: 'img/che_khuc_bach.jpg',
            featureClue: 'Món chè giải nhiệt gồm những viên thạch kem sữa phô mai béo ngậy cắt miếng, ăn kèm vải hoặc nhãn lồng và hạnh nhân lát.',
            featureClueEn: 'Chilled dessert soup featuring creamy milk-and-cheese panna cotta cubes, served with lychees or longans and toasted sliced almonds.',
            originClue: 'Trào lưu ẩm thực khởi nguồn từ Hà Nội và Sài Gòn, rất được ưa chuộng vào mùa hè.',
            originClueEn: 'A popular summer dessert trend originating in Hanoi and Saigon.'
        },
        {
            id: 'che_buoi',
            nameCodes: [67, 104, 232, 32, 98, 432, 7903, 105],
            image: 'img/che_buoi.jpg',
            featureClue: 'Được nấu từ phần cùi trắng giòn sần sật đã khử sạch vị đắng, kết hợp cùng đậu xanh bùi và nước cốt dừa sánh đặc.',
            featureClueEn: 'Cooked from crunchy pomelo pith debittered and coated in tapioca starch, combined with steamed mung beans and rich coconut cream.',
            originClue: 'Món chè dân dã nổi tiếng của vùng sông nước miền Tây Nam Bộ, đặc biệt là An Giang và Cần Thơ.',
            originClueEn: 'A famous rustic sweet soup from the Mekong Delta, especially An Giang and Can Tho.'
        },
        {
            id: 'bo_pia',
            nameCodes: [66, 242, 32, 112, 237, 97],
            image: 'img/bo_pia.jpg',
            featureClue: 'Món cuốn nhỏ gọn gồm bánh tráng mỏng cuốn củ sắn, lạp xưởng, trứng tráng, tép khô, rau thơm và chấm tương ngọt đậu phộng.',
            featureClueEn: 'Small fresh rolls wrapped in soft wheat-rice paper with julienned jicama, Chinese sausage, shredded egg, dried shrimp, and herbs, dipped in sweet bean sauce.',
            originClue: 'Món ăn vặt đường phố du nhập từ ẩm thực Triều Châu, rất phổ biến tại miền Nam.',
            originClueEn: 'A street snack adapted from Teochew cuisine, widely popular in Southern Vietnam.'
        },
        {
            id: 'lau_mam',
            name: 'Lẩu mắm',
            image: 'img/lau_mam.jpg',
            featureClue: 'Món nước nấu từ mắm cá linh hoặc cá sặc đậm đà hương sả ớt, ăn kèm thịt quay, cá, tôm, mực và hàng chục loại rau đồng nội như bông điên điển, bông súng, rau đắng.',
            featureClueEn: 'Rich hotpot broth made from fermented freshwater fish and lemongrass, served with roasted pork, seafood, and dozens of river greens like water lily stems and sesbania flowers.',
            originClue: 'Món ăn biểu tượng của vùng sông nước miền Tây Nam Bộ, đặc biệt nổi tiếng tại Cần Thơ và Châu Đốc (An Giang).',
            originClueEn: 'An iconic culinary specialty of the Mekong Delta in Southern Vietnam, especially famous in Can Tho and Chau Doc (An Giang).'
        },
        {
            id: 'lau_thai',
            name: 'Lẩu thái',
            image: 'img/lau_thai.jpg',
            featureClue: 'Nước dùng có vị chua cay nồng đặc trưng từ sả, riềng, lá chanh và ớt, nhúng kèm tôm, mực, nghêu, thịt bò và các loại nấm.',
            featureClueEn: 'Hot and sour broth infused with lemongrass, galangal, kaffir lime leaves, and chili, served with shrimp, squid, clams, sliced beef, and mushrooms.',
            originClue: 'Biến tấu từ món canh Tom Yum của Thái Lan, du nhập và trở thành một trong những món lẩu được ưa chuộng khắp Việt Nam.',
            originClueEn: 'Adapted from Thailand’s Tom Yum soup, widely popularized across Vietnam as a favorite gathering hotpot.'
        },
        {
            id: 'bun_mang_vit',
            name: 'Bún măng vịt',
            image: 'img/bun_mang_vit.jpg',
            featureClue: 'Bát bún có nước dùng thanh ngọt ninh từ xương và măng khô hoặc măng tươi giòn sần sật, ăn kèm thịt vịt luộc chặt miếng và chén nước mắm gừng cay nồng.',
            featureClueEn: 'Rice vermicelli soup with sweet broth simmered with bamboo shoots, served with tender boiled duck meat and a spicy ginger fish sauce dip.',
            originClue: 'Món ăn dân dã quen thuộc trên khắp cả nước, đặc biệt nổi tiếng ở Hà Nội và các con hẻm ẩm thực tại Sài Gòn.',
            originClueEn: 'A familiar rustic noodle soup across Vietnam, especially popular in Hanoi and Saigon alleyways.'
        },
        {
            id: 'sup_cua',
            name: 'Súp cua',
            image: 'img/sup_cua.jpg',
            featureClue: 'Món ăn nóng sánh đặc nấu từ bột năng, thịt cua xé, sợi gà, nấm tuyết, hạt bắp và trứng đánh vân, thêm trứng cút hoặc óc heo, rắc ngò rí và tiêu.',
            featureClueEn: 'Thick, warm savory soup made with shredded crab meat, chicken, snow fungus, sweet corn, and egg ribbons, topped with quail eggs, cilantro, and pepper.',
            originClue: 'Món ăn xế và khai vị đường phố vô cùng phổ biến tại Sài Gòn cùng các tỉnh miền Nam.',
            originClueEn: 'A popular afternoon street snack and starter in Saigon and Southern Vietnam.'
        },
        {
            id: 'sinh_to_bo',
            name: 'Sinh tố bơ',
            image: 'img/sinh_to_bo.jpg',
            featureClue: 'Thức uống xay nhuyễn sánh mịn có màu xanh lục nhạt đẹp mắt, vị béo ngậy tự nhiên hòa quyện cùng sữa đặc, sữa tươi và đá bào.',
            featureClueEn: 'Creamy, velvety green smoothie blended from ripe avocado flesh, sweetened condensed milk, fresh milk, and crushed ice.',
            originClue: 'Thức uống giải nhiệt nổi tiếng khắp Việt Nam, với nguồn nguyên liệu ngon nhất đến từ vùng cao nguyên Đắk Lắk và Lâm Đồng (Đà Lạt).',
            originClueEn: 'A famous refreshing drink across Vietnam, using prime avocados grown in the Central Highlands of Dak Lak and Da Lat.'
        },
        {
            id: 'xiu_mai',
            name: 'Xíu mại',
            image: 'img/xiu_mai.jpg',
            featureClue: 'Thịt heo xay nhuyễn trộn củ sắn viên tròn, nấu chín mềm trong sốt cà chua đỏ sánh đậm đà ăn kèm bánh mì hoặc hấp trong lớp vỏ bột mì mỏng vàng.',
            featureClueEn: 'Seasoned minced pork and jicama meatballs simmered in a rich tomato sauce (often eaten with baguette) or steamed in thin yellow dumpling wrappers.',
            originClue: 'Có nguồn gốc từ ẩm thực người Hoa, sau khi vào Việt Nam được biến tấu thành món chấm bánh mì trứ danh ở Đà Lạt và Sài Gòn.',
            originClueEn: 'Rooted in Chinese dim sum cuisine and adapted in Vietnam into a beloved tomato-sauce meatball dish famous in Da Lat and Saigon.'
        },
        {
            id: 'ha_cao',
            name: 'Há cảo',
            image: 'img/ha_cao.jpg',
            featureClue: 'Những viên bánh nhỏ có lớp vỏ bột trong mờ, dai mềm xếp nếp khéo léo, bên trong bọc nhân tôm tươi và thịt băm, hấp chín ăn kèm nước tương pha giấm ớt và hành phi.',
            featureClueEn: 'Bite-sized steamed dumplings with translucent, chewy pleated wrappers filled with juicy shrimp and minced pork, served with soy sauce, chili, and fried shallots.',
            originClue: 'Món điểm tâm có nguồn gốc từ Quảng Đông (Trung Hoa), gắn liền với khu phố người Hoa Chợ Lớn tại Sài Gòn.',
            originClueEn: 'A Cantonese dim sum classic closely associated with the Chinatown district of Cho Lon in Saigon.'
        },
        {
            id: 'sua_chua_nep_cam',
            name: 'Sữa chua nếp cẩm',
            image: 'img/sua_chua_nep_cam.jpg',
            featureClue: 'Món tráng miệng kết hợp vị chua thanh mát lạnh của sữa lên men cùng lớp nếp tím than nấu chín dẻo thơm, bùi ngọt và nước cốt dừa.',
            featureClueEn: 'Dessert pairing tangy chilled yogurt with chewy purple-black glutinous rice cooked with coconut milk.',
            originClue: 'Món ăn vặt khởi nguồn từ miền Bắc (đặc biệt là Hà Nội và vùng Tây Bắc) rồi nhanh chóng được yêu thích trên toàn quốc.',
            originClueEn: 'A popular dessert snack originating in Northern Vietnam that quickly became a nationwide favorite.'
        },
        {
            id: 'bun_dau_mam_tom',
            name: 'Bún đậu mắm tôm',
            image: 'img/bun_dau_mam_tom.jpg',
            featureClue: 'Món ăn bày trên mẹt tre lót lá chuối gồm bún lá cắt miếng, đậu hũ chiên giòn, chả cốm, thịt chân giò luộc, dồi sụn, rau kinh giới và chén mắm đánh sủi bọt với tắc, ớt.',
            featureClueEn: 'Served on a banana-leaf-lined bamboo tray featuring pressed rice vermicelli, crispy fried tofu, green rice pork patties, boiled pork, herbs, and frothy fermented shrimp paste.',
            originClue: 'Món ăn dân dã đặc trưng của thủ đô Hà Nội và vùng đồng bằng Bắc Bộ.',
            originClueEn: 'A signature rustic street food of Hanoi and the Red River Delta in Northern Vietnam.'
        }
    ],

    hard: [
        {
            id: 'thang_co',
            nameCodes: [84, 104, 7855, 110, 103, 32, 99, 7889],
            image: 'img/thang_co.webp',
            featureClue: 'Món canh truyền thống ninh nhừ từ thịt, xương và nội tạng cùng thảo quả, hạt dổi và nhiều loại gia vị núi rừng đặc trưng.',
            featureClueEn: 'Traditional highland stew simmered from horse or beef meat, bones, and offal seasoned with cardamom, doi seeds, and mountain herbs.',
            originClue: 'Món ăn truyền thống lâu đời của đồng bào dân tộc H’Mông tại vùng cao nguyên Hà Giang và Lào Cai.',
            originClueEn: 'A centuries-old traditional dish of the H’Mong people in the highlands of Ha Giang and Lao Cai.'
        },
        {
            id: 'che_suong_sa_hat_luu',
            nameCodes: [67, 104, 232, 32, 115, 432, 417, 110, 103, 32, 115, 97, 32, 104, 7841, 116, 32, 108, 7921, 117],
            image: 'img/che-suong-sa-hat-luu.jpg',
            featureClue: 'Món chè nhiều màu sắc gồm thạch rong biển giòn mát, củ năng áo bột năng luộc trong veo, đậu xanh đánh và nước cốt dừa.',
            featureClueEn: 'Colorful sweet dessert withagar jelly, ruby-red water chestnut pearls coated in tapioca, mashed mung beans, and coconut milk.',
            originClue: 'Món chè giải nhiệt lâu đời và phổ biến rộng rãi tại Sài Gòn cùng các tỉnh miền Nam.',
            originClueEn: 'A long-standing refreshing dessert widely loved in Saigon and Southern Vietnam.'
        },
        {
            id: 'luon_xao_lan',
            nameCodes: [76, 432, 417, 110, 32, 120, 224, 111, 32, 108, 259, 110],
            image: 'img/luon_xao_lan.jpg',
            featureClue: 'Thịt đồng xào săn thơm lừng với sả ớt, cà ri, bún tàu, nấm mèo và nước cốt dừa béo ngậy, rắc đậu phộng rang.',
            featureClueEn: 'Freshwater eel stir-fried with lemongrass, chili, curry powder, glass noodles, wood ear mushrooms, and rich coconut milk, topped with roasted peanuts.',
            originClue: 'Món ăn đặc sản đậm chất dân dã của vùng sông nước miền Tây Nam Bộ.',
            originClueEn: 'A rustic waterway specialty of the Mekong Delta in Southern Vietnam.'
        },
        {
            id: 'banh_to',
            nameCodes: [66, 225, 110, 104, 32, 116, 7893],
            image: 'img/banh_to.jpg',
            featureClue: 'Bánh làm từ gạo nếp và đường đen đặc sản đem hấp chín trong rọ tre lót lá chuối, dẻo quánh, ăn trực tiếp hoặc chiên giòn.',
            featureClueEn: 'Sticky cake made from glutinous rice flour and dark cane sugar steamed in banana-leaf-lined bamboo baskets, eaten fresh or pan-fried.',
            originClue: 'Bánh cổ truyền không thể thiếu trong mâm cỗ ngày Tết của người dân xứ Quảng Nam.',
            originClueEn: 'A traditional Tet delicacy native to Quang Nam province.'
        },
        {
            id: 'bun_doc_mung',
            nameCodes: [66, 250, 110, 32, 100, 7885, 99, 32, 109, 249, 110, 103],
            image: 'img/bun_doc_mung.jpg',
            featureClue: 'Bát bún nước dùng xương heo trong ngọt, ăn kèm sườn non, mọc viên, thịt chân giò thái lát và phần cuống lá giòn sần sật.',
            featureClueEn: 'Rice noodle soup in clear pork bone broth topped with spare ribs, pork meatballs, sliced pork shank, and crisp elephant ear stems.',
            originClue: 'Món bún thanh tao quen thuộc của ẩm thực Hà Nội.',
            originClueEn: 'A refined and familiar noodle soup of Hanoi cuisine.'
        },
        {
            id: 'goi_sau_dau',
            name: 'Gỏi sầu đâu',
            image: 'img/goi_sau_dau.jpg',
            featureClue: 'Món trộn có vị đắng hậu ngọt đặc trưng từ lá và hoa chần sơ, kết hợp cùng khô cá sặc hoặc cá lóc nướng, thịt ba chỉ, xoài xanh và nước mắm me chua ngọt.',
            featureClueEn: 'A distinctive bitter-yet-sweet salad made from blanched neem leaves and blossoms, tossed with grilled dried fish, pork belly, green mango, and tamarind fish sauce.',
            originClue: 'Đặc sản dân dã nổi tiếng của vùng Bảy Núi (Châu Đốc, Tri Tôn) thuộc tỉnh An Giang, miền Tây Nam Bộ.',
            originClueEn: 'A famous rustic specialty of the Seven Mountains region (Chau Doc, Tri Ton) in An Giang Province, Mekong Delta.'
        },
        {
            id: 'banh_goi',
            name: 'Bánh gối',
            image: 'img/banh_goi.jpg',
            featureClue: 'Bánh có vỏ bột mì cán mỏng gấp mép xếp nếp hình bán nguyệt chiên vàng giòn, nhân miến, mộc nhĩ, thịt băm, lạp xưởng và trứng cút, ăn kèm rau sống và nước chấm đu đủ xanh.',
            featureClueEn: 'Crescent-shaped pastry with a pleated wheat crust deep-fried until golden crispy, stuffed with glass noodles, wood ear mushrooms, minced pork, Chinese sausage, and quail egg.',
            originClue: 'Món quà vặt quen thuộc mỗi dịp thu đông của ẩm thực đường phố Hà Nội.',
            originClueEn: 'A beloved autumn-winter street food snack of Hanoi.'
        },
        {
            id: 'banh_da_lon',
            name: 'Bánh da lợn',
            image: 'img/banh_da_lon.jpg',
            featureClue: 'Bánh ngọt hấp chín có nhiều lớp mỏng dẻo dai xếp chồng xen kẽ giữa màu xanh thơm hương lá dứa và màu vàng bùi béo của đậu xanh nghiền cùng nước cốt dừa.',
            featureClueEn: 'Steamed chewy layered cake alternating translucent green pandan tapioca layers with creamy yellow mashed mung bean and coconut milk layers.',
            originClue: 'Món bánh dân gian truyền thống lâu đời của vùng Nam Bộ.',
            originClueEn: 'A traditional folk dessert native to Southern Vietnam.'
        },
        {
            id: 'banh_da_cua',
            name: 'Bánh đa cua',
            image: 'img/banh_da_cua.jpg',
            featureClue: 'Món nước nổi bật với sợi bánh dẹt màu nâu đỏ dai mềm, nước dùng riêu cua đồng béo ngậy, ăn kèm chả lá lốt, tôm, sườn và rau muống hoặc rau nhút.',
            featureClueEn: 'Noodle soup featuring chewy reddish-brown flat rice noodles in a rich freshwater crab broth, topped with betel-leaf pork rolls, shrimp, and water spinach.',
            originClue: 'Món ăn biểu tượng trứ danh của thành phố cảng Hải Phòng.',
            originClueEn: 'The signature culinary icon of the port city of Hai Phong.'
        },
        {
            id: 'banh_tam_bi',
            name: 'Bánh tằm bì',
            image: 'img/banh_tam_bi.jpg',
            featureClue: 'Sợi bột gạo tròn trắng mập, trộn cùng bì heo thính, xíu mại, rau sống, chan đồng thời cả nước cốt dừa béo ngậy lẫn nước mắm chua ngọt.',
            featureClueEn: 'Thick round white rice noodles topped with shredded pork skin, meatballs, and fresh herbs, uniquely dressed with both savory coconut cream and sweet-and-sour fish sauce.',
            originClue: 'Đặc sản nức tiếng của vùng miền Tây Nam Bộ, đặc biệt là Bạc Liêu, Sóc Trăng và Cà Mau.',
            originClueEn: 'A renowned specialty of the Mekong Delta, especially famous in Bac Lieu, Soc Trang, and Ca Mau.'
        },
        {
            id: 'banh_beo_chen',
            name: 'Bánh bèo chén',
            image: 'img/banh_beo_chen.jpg',
            featureClue: 'Bột gạo hấp chín trong từng chén sứ nhỏ có xoáy lõm ở giữa, rắc tôm chấy đỏ cam, tóp mỡ hoặc da heo chiên giòn, mỡ hành và chan nước mắm ngọt dịu.',
            featureClueEn: 'Steamed rice flour cakes served in small individual porcelain bowls with a dimpled center, topped with toasted shrimp floss, crispy pork cracklings, and scallion oil.',
            originClue: 'Món bánh thanh tao đặc trưng của ẩm thực cố đô Huế và các tỉnh miền Trung.',
            originClueEn: 'A delicate signature dish of the ancient capital of Hue and Central Vietnam.'
        },
        {
            id: 'banh_phu_the',
            name: 'Bánh phu thê',
            image: 'img/banh_phu_the.jpg',
            featureClue: 'Bánh cổ truyền có lớp vỏ bột lọc trong veo giòn dẻo lẫn sợi đu đủ nạo và hạt sen, nhân đậu xanh sên đường dừa, gói vuông vức trong hai chiếc khuôn lá úp vào nhau.',
            featureClueEn: 'Traditional cake with a translucent chewy tapioca crust mixed with shredded papaya and lotus seeds, filled with sweet mung bean paste and wrapped in square leaf boxes.',
            originClue: 'Đặc sản làng Đình Bảng (Bắc Ninh) và miền Trung, biểu tượng cho sự gắn kết thủy chung trong các lễ cưới hỏi cổ truyền.',
            originClueEn: 'A specialty of Dinh Bang village (Bac Ninh) and Central Vietnam, symbolizing marital harmony in traditional weddings.'
        },
        {
            id: 'mi_quang_ech',
            name: 'Mì Quảng ếch',
            image: 'img/mi_quang_ech.jpg',
            featureClue: 'Sợi mì gạo bản to màu vàng nghệ ăn cùng thịt ếch đồng um sả nghệ đậm đà sệt nước, dọn kèm rau sống chín vị, đậu phộng rang và bánh tráng mè nướng giòn.',
            featureClueEn: 'Turmeric-yellow wide rice noodles served with rich lemongrass-turmeric braised field frog, fresh herbs, roasted peanuts, and crispy sesame rice crackers.',
            originClue: 'Biến tấu ẩm thực nổi tiếng và rất được ưa chuộng tại Đà Nẵng và Quảng Nam.',
            originClueEn: 'A famous and widely loved regional dish originating in Da Nang and Quang Nam.'
        },
        {
            id: 'banh_troi_tau',
            name: 'Bánh trôi tàu',
            image: 'img/banh_troi_tau.jpg',
            featureClue: 'Món quà ngọt ăn nóng gồm những viên bột nếp dẻo to tròn nhân đậu xanh hoặc vừng đen, chan nước đường mật nấu gừng già cay ấm, rắc lạc rang và dừa nạo.',
            featureClueEn: 'Warm winter dessert featuring large glutinous rice balls filled with mung bean or black sesame paste, served in hot ginger-infused dark sugar syrup with peanuts and coconut.',
            originClue: 'Món ăn vặt mùa đông có nguồn gốc từ người Hoa, gắn liền với khu phố cổ Hà Nội.',
            originClueEn: 'A Chinese-origin winter street dessert deeply associated with Hanoi’s Old Quarter.'
        }
    ]
};