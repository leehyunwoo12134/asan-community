// ===================================================
//  아산 외국인 커뮤니티 — script.js
// ===================================================

// ===================================================
//  다국어 번역 데이터
// ===================================================
const T = {
  ko: {
    site: '아산 외국인 커뮤니티',
    tabs: ['커뮤니티', '공지판', '채팅', '관리자 소통', '뉴스', '생활지도', '안전정보', '긴급카드', '💱 환율'],
    pb: [
      '아산 온천역 근처 맛있는 쌀국수 집 아시는 분 있나요? 베트남 음식 그리워요 ㅠㅠ',
      '아산시 외국인 등록증 갱신 어디서 하나요? 출입국관리소 가야 하나요?',
      '분리수거 방법이 너무 복잡해요. 플라스틱은 어디에 버려야 하나요?',
    ],
    pt: ['2시간 전', '어제', '3일 전'],
    cmts: ['댓글 5', '댓글 7', '댓글 11'],
    nfAll: '전체', nfUrgent: '긴급', nfEvent: '행사', nfNotice: '공지',
    ntagPin: '📌 고정', ntagUrgent: '긴급', ntagEvent: '행사', ntagNotice: '공지',
    n: [
      '2025년 외국인 주민 건강검진 일정 안내 — 무료 접수 마감 6월 30일',
      '아산 온천지구 도로공사 안내 — 6월 15일~7월 31일 우회 필요',
      '다문화 어울림 축제 — 6월 22일 아산시민광장 (무료 입장)',
      '아산시 외국인주민 한국어 교육 2분기 수강생 모집 안내',
      '외국인 법률 무료 상담 — 매월 마지막 주 수요일 시청 1층',
    ],
    chatTitle: '실시간 커뮤니티 채팅',
    chatOnline: '🟢 24명 접속 중',
    chatPh: '메시지를 입력하세요...',
    chatSend: '전송',
    cm: [
      '안녕하세요! 오늘 날씨 너무 좋네요 😊',
      '네 맞아요! 주말에 신정호 공원 가려고요',
      '저도 가고 싶어요! 같이 가도 될까요?',
    ],
    adminT: ['1:1 문의하기', '내 문의 내역', '자주 묻는 질문 (FAQ)'],
    adminS: ['관리자가 24시간 내 답변드립니다', '최근 접수된 문의를 확인하세요', '빠른 답변을 확인해 보세요'],
    flCat: '문의 유형', flTitle: '제목', flContent: '내용',
    opts: ['비자 · 체류', '생활 · 주거', '의료 · 보험', '노동 · 임금', '기타'],
    inqPh: ['문의 제목을 입력하세요', '궁금한 내용을 자세히 적어주세요'],
    inqBtn: '문의 보내기',
    inqOk: '✅ 문의가 접수되었습니다! 24시간 내 답변드릴게요.',
    inq: ['비자 갱신 서류 문의', '건강보험 적용 범위 질문'],
    statusDone: '답변완료', statusWait: '답변대기',
    faqQ: ['외국인 등록증은 어디서 갱신하나요?', '건강보험은 어떻게 가입하나요?', '분리수거 날짜와 방법은?'],
    faqA: [
      '아산출입국·외국인사무소(아산시 번영로 88)에서 가능합니다. 만료 2개월 전부터 신청 가능하며, 하이코리아 사이트에서 온라인 예약 후 방문하세요.',
      '직장 가입자는 회사에서 자동 가입됩니다. 지역 가입자는 국민건강보험공단(1577-1000)에 문의하거나 가까운 지사를 방문하세요.',
      '아파트는 단지별로 상이합니다. 일반적으로 재활용은 화·목·토, 음식물은 매일, 일반쓰레기는 종량제봉투 사용 후 지정된 날에 배출합니다.',
    ],
    ep: ['Help me please', 'I need to go to hospital', 'Please call the police', 'There is a fire'],
    en: ['경찰 신고', '화재·구급'],
    emer: '긴급 상황 시 아래 번호로 바로 연락하세요',
    phrase: '긴급 표현 카드',
    mapLabel: '📍 아산시 지도',
    mcat: ['병원', '은행', '마트', '관공서'],
    places: ['순천향대 천안병원', '기업은행 아산점', '이마트 아산점', '아산시청 외국인주민과'],
    st: ['보이스피싱 주의', '생활 안전'],
    stitle: ['이런 전화는 무조건 끊으세요!', '분리수거 방법 안내'],
    safety1: ['"검찰·경찰입니다" — 기관은 전화로 돈 요구 안 함', '"계좌 이체하세요" — 절대 하지 마세요', '의심되면 즉시 112 신고'],
    safety2: ['종이류 — 묶어서 종이 전용함에', '플라스틱 — 씻어서 투명 봉투에', '음식물 — 별도 음식물 봉투 사용'],
    news: [
      '아산시, 외국인 주민 한국어 교육 지원 확대 — 2025년부터 무료 강좌 신청 가능',
      '충남 외국인 건강보험 혜택 안내 — 직장 가입자 가족도 적용 가능',
      '아산시 다문화가족지원센터, 이주여성 취업 지원 프로그램 모집 중',
    ],
  },

  en: {
    site: 'Asan Foreign Community',
    tabs: ['Community', 'Notice Board', 'Chat', 'Admin Contact', 'News', 'Local Map', 'Safety', 'Emergency', '💱 Exchange'],
    pb: [
      'Anyone know a good pho restaurant near Asan Oncheon Station? I miss Vietnamese food ㅠㅠ',
      'Where do I renew my alien registration card? Do I have to go to immigration?',
      'Recycling rules are so complicated. Where do I throw plastic?',
    ],
    pt: ['2 hours ago', 'Yesterday', '3 days ago'],
    cmts: ['5 comments', '7 comments', '11 comments'],
    nfAll: 'All', nfUrgent: 'Urgent', nfEvent: 'Events', nfNotice: 'Notice',
    ntagPin: '📌 Pinned', ntagUrgent: 'Urgent', ntagEvent: 'Event', ntagNotice: 'Notice',
    n: [
      '2025 Free Health Check for Foreign Residents — Registration deadline June 30',
      'Asan Oncheon District Road Construction — Detour required June 15 ~ July 31',
      'Multicultural Festival — June 22, Asan Civic Plaza (Free admission)',
      'Asan City Korean Language Class Q2 Registration Open for Foreign Residents',
      'Free Legal Consultation for Foreigners — Last Wednesday each month, City Hall 1F',
    ],
    chatTitle: 'Live Community Chat',
    chatOnline: '🟢 24 online',
    chatPh: 'Type a message...',
    chatSend: 'Send',
    cm: [
      'Hello! The weather is so nice today 😊',
      'Yes! I\'m planning to go to Sinjeongho Park this weekend',
      'I want to go too! Can I join?',
    ],
    adminT: ['Send Inquiry', 'My Inquiries', 'FAQ'],
    adminS: ['Admin will reply within 24 hours', 'Check your recent inquiries', 'Find quick answers here'],
    flCat: 'Category', flTitle: 'Subject', flContent: 'Message',
    opts: ['Visa / Stay', 'Living / Housing', 'Medical / Insurance', 'Labor / Wages', 'Other'],
    inqPh: ['Enter inquiry subject', 'Please describe your question in detail'],
    inqBtn: 'Send Inquiry',
    inqOk: '✅ Your inquiry has been submitted! We\'ll reply within 24 hours.',
    inq: ['Visa renewal document inquiry', 'Health insurance coverage question'],
    statusDone: 'Answered', statusWait: 'Pending',
    faqQ: ['Where can I renew my alien registration card?', 'How do I enroll in health insurance?', 'When and how do I recycle?'],
    faqA: [
      'Visit Asan Immigration Office (88 Beonyeong-ro, Asan). You can apply from 2 months before expiry. Book online at HiKorea first.',
      'Employees are enrolled automatically by their company. Local subscribers should call NHIS (1577-1000) or visit a local branch.',
      'Varies by apartment complex. Generally: recyclables on Tue/Thu/Sat, food waste daily, general waste in designated bags on specified days.',
    ],
    ep: ['Help me please', 'I need to go to hospital', 'Please call the police', 'There is a fire'],
    en: ['Police', 'Fire / Ambulance'],
    emer: 'Call these numbers immediately in an emergency',
    phrase: 'Emergency phrase card',
    mapLabel: '📍 Asan City Map',
    mcat: ['Hospital', 'Bank', 'Mart', 'Gov. Office'],
    places: ['Soonchunhyang Cheonan Hospital', 'IBK Bank Asan', 'E-Mart Asan', 'Asan City Foreigner Division'],
    st: ['Voice Phishing Alert', 'Daily Safety'],
    stitle: ['Hang up immediately on these calls!', 'Recycling guide'],
    safety1: ['"This is the police" — authorities never ask for money by phone', '"Please transfer money" — never do this', 'If suspicious, call 112 immediately'],
    safety2: ['Paper — bundle and place in paper bin', 'Plastic — rinse and put in clear bag', 'Food waste — use designated food waste bag'],
    news: [
      'Asan City expands Korean language support — free classes from 2025',
      'Guide to health insurance for foreigners in Chungnam — families of employees also covered',
      'Asan Multicultural Center recruiting for women\'s employment program',
    ],
  },

  vi: {
    site: 'Cộng đồng người nước ngoài Asan',
    tabs: ['Cộng đồng', 'Bảng thông báo', 'Chat', 'Liên hệ QTV', 'Tin tức', 'Bản đồ', 'An toàn', 'Khẩn cấp', '💱 Tỷ giá'],
    pb: [
      'Có ai biết quán phở ngon gần ga Asan Oncheon không? Nhớ đồ ăn Việt Nam quá ㅠㅠ',
      'Gia hạn thẻ đăng ký người nước ngoài ở đâu? Có phải đến xuất nhập cảnh không?',
      'Quy tắc phân loại rác quá phức tạp. Vứt nhựa ở đâu?',
    ],
    pt: ['2 giờ trước', 'Hôm qua', '3 ngày trước'],
    cmts: ['5 bình luận', '7 bình luận', '11 bình luận'],
    nfAll: 'Tất cả', nfUrgent: 'Khẩn cấp', nfEvent: 'Sự kiện', nfNotice: 'Thông báo',
    ntagPin: '📌 Ghim', ntagUrgent: 'Khẩn cấp', ntagEvent: 'Sự kiện', ntagNotice: 'Thông báo',
    n: [
      'Lịch khám sức khỏe miễn phí 2025 cho cư dân nước ngoài — Đăng ký trước 30/6',
      'Thi công đường khu vực Asan Oncheon — Cần đi đường vòng 15/6~31/7',
      'Lễ hội đa văn hóa — 22/6 tại quảng trường thành phố Asan (Miễn phí)',
      'Mở đăng ký lớp tiếng Hàn quý 2 cho cư dân nước ngoài tại Asan',
      'Tư vấn pháp luật miễn phí — Thứ Tư cuối tháng, tầng 1 tòa thị chính',
    ],
    chatTitle: 'Chat cộng đồng trực tuyến',
    chatOnline: '🟢 24 người trực tuyến',
    chatPh: 'Nhập tin nhắn...',
    chatSend: 'Gửi',
    cm: [
      'Xin chào! Thời tiết hôm nay đẹp quá 😊',
      'Đúng vậy! Cuối tuần tôi định đi công viên Sinjeongho',
      'Tôi cũng muốn đi! Có thể cùng đi không?',
    ],
    adminT: ['Gửi câu hỏi', 'Câu hỏi của tôi', 'Câu hỏi thường gặp'],
    adminS: ['Quản trị viên phản hồi trong 24 giờ', 'Xem các câu hỏi gần đây của bạn', 'Tìm câu trả lời nhanh tại đây'],
    flCat: 'Loại câu hỏi', flTitle: 'Tiêu đề', flContent: 'Nội dung',
    opts: ['Visa / Cư trú', 'Sinh hoạt / Nhà ở', 'Y tế / Bảo hiểm', 'Lao động / Lương', 'Khác'],
    inqPh: ['Nhập tiêu đề câu hỏi', 'Mô tả chi tiết câu hỏi của bạn'],
    inqBtn: 'Gửi câu hỏi',
    inqOk: '✅ Câu hỏi đã được gửi! Chúng tôi sẽ phản hồi trong 24 giờ.',
    inq: ['Hỏi về hồ sơ gia hạn visa', 'Câu hỏi về phạm vi bảo hiểm y tế'],
    statusDone: 'Đã trả lời', statusWait: 'Chờ trả lời',
    faqQ: ['Gia hạn thẻ đăng ký người nước ngoài ở đâu?', 'Đăng ký bảo hiểm y tế như thế nào?', 'Lịch và cách phân loại rác?'],
    faqA: [
      'Đến Văn phòng Xuất nhập cảnh Asan (88 Beonyeong-ro). Có thể nộp trước 2 tháng khi hết hạn. Đặt lịch online tại HiKorea trước.',
      'Người đi làm được công ty đăng ký tự động. Người đăng ký địa phương gọi NHIS (1577-1000) hoặc đến chi nhánh gần nhất.',
      'Tùy khu căn hộ. Thường tái chế: T3/T5/T7, rác thực phẩm hàng ngày, rác thường dùng túi quy định đúng ngày.',
    ],
    ep: ['Hãy giúp tôi', 'Tôi cần đến bệnh viện', 'Hãy gọi cảnh sát', 'Có hỏa hoạn'],
    en: ['Cảnh sát', 'Cứu hỏa / Cấp cứu'],
    emer: 'Gọi ngay các số này trong trường hợp khẩn cấp',
    phrase: 'Thẻ cụm từ khẩn cấp',
    mapLabel: '📍 Bản đồ TP Asan',
    mcat: ['Bệnh viện', 'Ngân hàng', 'Siêu thị', 'Cơ quan'],
    places: ['BV Soonchunhyang Cheonan', 'Ngân hàng IBK Asan', 'E-Mart Asan', 'Phòng người nước ngoài TP Asan'],
    st: ['Cảnh báo lừa đảo điện thoại', 'An toàn sinh hoạt'],
    stitle: ['Cúp máy ngay với những cuộc gọi này!', 'Hướng dẫn phân loại rác'],
    safety1: ['"Tôi là cảnh sát" — cơ quan không yêu cầu tiền qua điện thoại', '"Hãy chuyển khoản" — tuyệt đối không làm', 'Nghi ngờ thì gọi 112 ngay'],
    safety2: ['Giấy — buộc lại bỏ thùng giấy', 'Nhựa — rửa sạch cho vào túi trong', 'Thức ăn — dùng túi rác thực phẩm riêng'],
    news: [
      'Asan mở rộng hỗ trợ tiếng Hàn — học miễn phí từ 2025',
      'Hướng dẫn bảo hiểm y tế cho người nước ngoài tại Chungnam',
      'Trung tâm đa văn hóa Asan tuyển sinh chương trình hỗ trợ việc làm',
    ],
  },

  zh: {
    site: '牙山外国人社区',
    tabs: ['社区', '公告栏', '聊天', '联系管理员', '新闻', '生活地图', '安全信息', '紧急卡片', '💱 汇率'],
    pb: [
      '有人知道牙山温泉站附近好吃的越南米粉店吗？好想念越南食物啊ㅠㅠ',
      '在牙山哪里办理外国人登录证更新？需要去出入境管理局吗？',
      '垃圾分类太复杂了。塑料应该扔在哪里？',
    ],
    pt: ['2小时前', '昨天', '3天前'],
    cmts: ['5条评论', '7条评论', '11条评论'],
    nfAll: '全部', nfUrgent: '紧急', nfEvent: '活动', nfNotice: '公告',
    ntagPin: '📌 置顶', ntagUrgent: '紧急', ntagEvent: '活动', ntagNotice: '公告',
    n: [
      '2025年外国人免费健康检查通知 — 报名截止6月30日',
      '牙山温泉区道路施工通知 — 6月15日~7月31日需绕行',
      '多文化融合节 — 6月22日牙山市民广场（免费入场）',
      '牙山市外国人韩语教育第二季度招生通知',
      '外国人免费法律咨询 — 每月最后一个周三，市政厅1楼',
    ],
    chatTitle: '实时社区聊天',
    chatOnline: '🟢 24人在线',
    chatPh: '输入消息...',
    chatSend: '发送',
    cm: ['大家好！今天天气真好 😊', '对啊！周末想去新井湖公园', '我也想去！可以一起吗？'],
    adminT: ['发送咨询', '我的咨询记录', '常见问题'],
    adminS: ['管理员将在24小时内回复', '查看您最近的咨询记录', '在这里找到快速解答'],
    flCat: '咨询类型', flTitle: '标题', flContent: '内容',
    opts: ['签证·居留', '生活·住房', '医疗·保险', '劳动·工资', '其他'],
    inqPh: ['输入咨询标题', '请详细描述您的问题'],
    inqBtn: '发送咨询',
    inqOk: '✅ 咨询已提交！我们将在24小时内回复您。',
    inq: ['签证续签材料咨询', '健康保险覆盖范围问题'],
    statusDone: '已回复', statusWait: '等待回复',
    faqQ: ['外国人登录证在哪里更新？', '如何加入健康保险？', '垃圾分类时间和方法？'],
    faqA: [
      '请前往牙山出入境外国人事务所（牙山市繁荣路88号）。可在到期前2个月申请，建议先在HiKorea网站预约。',
      '在职人员由公司自动登记。地区加入者请拨打国民健康保险公团（1577-1000）或前往就近分支机构。',
      '因小区而异。一般为：可回收垃圾周二/四/六，厨余垃圾每天，一般垃圾需用计量制垃圾袋在指定日期投放。',
    ],
    ep: ['请帮帮我', '我需要去医院', '请叫警察', '着火了'],
    en: ['警察报警', '消防 / 急救'],
    emer: '紧急情况请立即拨打以下号码',
    phrase: '紧急用语卡片',
    mapLabel: '📍 牙山市地图',
    mcat: ['医院', '银行', '超市', '政府机关'],
    places: ['顺天乡大学天安医院', '企业银行牙山支行', '易买得牙山店', '牙山市外国人居民科'],
    st: ['电话诈骗警告', '生活安全'],
    stitle: ['接到以下电话请立即挂断！', '垃圾分类指南'],
    safety1: ['"我是检察官/警察" — 机关不会通过电话要钱', '"请转账" — 绝对不要转账', '如有疑虑立即拨打112'],
    safety2: ['纸类 — 捆好放入纸类回收箱', '塑料 — 洗净放入透明袋', '厨余垃圾 — 使用专用厨余垃圾袋'],
    news: [
      '牙山市扩大外国人韩语教育支持——2025年起可申请免费课程',
      '忠南外国人健康保险权益说明——职工家属同样适用',
      '牙山多文化家庭支持中心招募女性就业支援项目学员',
    ],
  },

  ru: {
    site: 'Сообщество иностранцев Асан',
    tabs: ['Сообщество', 'Объявления', 'Чат', 'Связь с адм.', 'Новости', 'Карта', 'Безопасность', 'Экстренная', '💱 Курсы'],
    pb: [
      'Кто-нибудь знает хорошее место с фо рядом со станцией Асан Ончхон? Так скучаю по вьетнамской еде ㅠㅠ',
      'Где продлить карту иностранца в Асане? Нужно идти в миграционную службу?',
      'Правила сортировки мусора очень сложные. Куда выбрасывать пластик?',
    ],
    pt: ['2 часа назад', 'Вчера', '3 дня назад'],
    cmts: ['5 комментариев', '7 комментариев', '11 комментариев'],
    nfAll: 'Все', nfUrgent: 'Срочно', nfEvent: 'События', nfNotice: 'Объявление',
    ntagPin: '📌 Закреплено', ntagUrgent: 'Срочно', ntagEvent: 'Событие', ntagNotice: 'Объявление',
    n: [
      'Бесплатная диспансеризация 2025 — запись до 30 июня',
      'Дорожные работы в районе Асан Ончхон — объезд 15 июня ~ 31 июля',
      'Мультикультурный фестиваль — 22 июня, площадь Асана (бесплатно)',
      'Набор на курсы корейского языка 2 кв. для иностранцев Асана',
      'Бесплатная юридическая консультация — последняя среда месяца, 1 этаж мэрии',
    ],
    chatTitle: 'Чат сообщества в реальном времени',
    chatOnline: '🟢 24 онлайн',
    chatPh: 'Введите сообщение...',
    chatSend: 'Отправить',
    cm: [
      'Привет всем! Сегодня такая хорошая погода 😊',
      'Да! На выходных планирую пойти в парк Синджонхо',
      'Я тоже хочу! Можно с вами?',
    ],
    adminT: ['Отправить запрос', 'Мои запросы', 'Частые вопросы (FAQ)'],
    adminS: ['Администратор ответит в течение 24 часов', 'Просмотрите ваши последние обращения', 'Найдите быстрые ответы здесь'],
    flCat: 'Тема обращения', flTitle: 'Заголовок', flContent: 'Содержание',
    opts: ['Виза / Пребывание', 'Жизнь / Жильё', 'Медицина / Страхование', 'Труд / Зарплата', 'Другое'],
    inqPh: ['Введите заголовок обращения', 'Опишите ваш вопрос подробно'],
    inqBtn: 'Отправить обращение',
    inqOk: '✅ Ваше обращение принято! Мы ответим в течение 24 часов.',
    inq: ['Запрос о документах для продления визы', 'Вопрос о медицинской страховке'],
    statusDone: 'Отвечено', statusWait: 'Ожидает ответа',
    faqQ: ['Где продлить карту иностранца?', 'Как оформить медицинскую страховку?', 'Когда и как сортировать мусор?'],
    faqA: [
      'Офис иммиграции Асана (88 Beonyeong-ro). Можно подать за 2 месяца до истечения. Сначала запишитесь онлайн на HiKorea.',
      'Работники оформляются автоматически работодателем. Местные жители звонят в NHIS (1577-1000) или посещают ближайший офис.',
      'Зависит от комплекса. Обычно: вторсырьё вт/чт/сб, пищевые отходы ежедневно, общий мусор в специальных пакетах в отведённые дни.',
    ],
    ep: ['Помогите мне, пожалуйста', 'Мне нужно в больницу', 'Вызовите полицию', 'Здесь пожар'],
    en: ['Полиция', 'Пожарные / Скорая'],
    emer: 'В экстренной ситуации немедленно звоните',
    phrase: 'Карточка экстренных фраз',
    mapLabel: '📍 Карта города Асан',
    mcat: ['Больница', 'Банк', 'Супермаркет', 'Гос. учреждение'],
    places: ['Больница Сунчхонхян Чхонан', 'Банк IBK Асан', 'E-Mart Асан', 'Отдел по иностранцам г. Асан'],
    st: ['Внимание: телефонное мошенничество', 'Бытовая безопасность'],
    stitle: ['Немедленно вешайте трубку при таких звонках!', 'Руководство по сортировке мусора'],
    safety1: ['"Это прокуратура/полиция" — госорганы не требуют деньги по телефону', '"Переведите деньги" — никогда этого не делайте', 'При подозрении сразу звоните 112'],
    safety2: ['Бумага — свяжите и положите в контейнер для бумаги', 'Пластик — вымойте и положите в прозрачный пакет', 'Пищевые отходы — используйте специальный пакет'],
    news: [
      'Асан расширяет поддержку изучения корейского — бесплатные курсы с 2025',
      'Руководство по медстрахованию для иностранцев в Чхунне',
      'Центр поддержки семей Асана набирает участниц программы трудоустройства',
    ],
  },
};

// ===================================================
//  언어 설정
// ===================================================
function setLang(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const t = T[lang];

  document.getElementById('site-title').textContent = t.site;

  // 탭
  const tabIds = ['t-community','t-notice','t-chat','t-admin','t-news','t-map','t-safety','t-emergency','t-exchange'];
  tabIds.forEach((id, i) => { document.getElementById(id).textContent = t.tabs[i]; });

  // 커뮤니티
  ['pb1','pb2','pb3'].forEach((id, i) => { document.getElementById(id).textContent = t.pb[i]; });
  ['pt1','pt2','pt3'].forEach((id, i) => { document.getElementById(id).textContent = t.pt[i]; });
  ['pa-cmt1','pa-cmt2','pa-cmt3'].forEach((id, i) => { document.getElementById(id).textContent = '💬 ' + t.cmts[i]; });

  // 공지판
  document.getElementById('nf-all').textContent    = t.nfAll;
  document.getElementById('nf-urgent').textContent = t.nfUrgent;
  document.getElementById('nf-event').textContent  = t.nfEvent;
  document.getElementById('nf-notice').textContent = t.nfNotice;
  document.getElementById('ntag-pin').textContent     = t.ntagPin;
  document.getElementById('ntag-urgent').textContent  = t.ntagUrgent;
  document.getElementById('ntag-event').textContent   = t.ntagEvent;
  document.getElementById('ntag-notice2').textContent = t.ntagNotice;
  for (let i = 1; i <= 5; i++) {
    document.getElementById('n' + i + '-title').textContent = t.n[i - 1];
  }

  // 채팅
  document.getElementById('chat-title').textContent    = t.chatTitle;
  document.getElementById('chat-online').textContent   = t.chatOnline;
  document.getElementById('chat-input').placeholder    = t.chatPh;
  document.getElementById('chat-send-btn').textContent = t.chatSend;
  ['cm1','cm2','cm3'].forEach((id, i) => { document.getElementById(id).textContent = t.cm[i]; });

  // 관리자
  ['admin-t1','admin-t2','admin-t3'].forEach((id, i) => { document.getElementById(id).textContent = t.adminT[i]; });
  ['admin-s1','admin-s2','admin-s3'].forEach((id, i) => { document.getElementById(id).textContent = t.adminS[i]; });
  document.getElementById('fl-cat').textContent     = t.flCat;
  document.getElementById('fl-title').textContent   = t.flTitle;
  document.getElementById('fl-content').textContent = t.flContent;
  ['opt1','opt2','opt3','opt4','opt5'].forEach((id, i) => { document.getElementById(id).textContent = t.opts[i]; });
  document.getElementById('inq-title').placeholder   = t.inqPh[0];
  document.getElementById('inq-content').placeholder = t.inqPh[1];
  document.getElementById('inq-submit-btn').textContent = t.inqBtn;
  document.getElementById('inq-success').textContent    = t.inqOk;
  document.getElementById('inq1-title').textContent  = t.inq[0];
  document.getElementById('inq2-title').textContent  = t.inq[1];
  document.getElementById('inq1-status').textContent = t.statusDone;
  document.getElementById('inq2-status').textContent = t.statusWait;
  ['faq1-q','faq2-q','faq3-q'].forEach((id, i) => { document.getElementById(id).textContent = t.faqQ[i]; });
  ['faq1-a','faq2-a','faq3-a'].forEach((id, i) => { document.getElementById(id).textContent = t.faqA[i]; });

  // 긴급카드
  ['ep1-tr','ep2-tr','ep3-tr','ep4-tr'].forEach((id, i) => { document.getElementById(id).textContent = t.ep[i]; });
  document.getElementById('en1').textContent         = t.en[0];
  document.getElementById('en2').textContent         = t.en[1];
  document.getElementById('emer-banner').textContent = t.emer;
  document.getElementById('phrase-title').textContent = t.phrase;

  // 생활지도
  document.getElementById('map-label').textContent = t.mapLabel;
  ['mb-hosp','mb-bank','mb-mart','mb-gov'].forEach((id, i) => { document.getElementById(id).textContent = t.mcat[i]; });
  ['pl1','pl2','pl3','pl4'].forEach((id, i) => { document.getElementById(id).textContent = t.places[i]; });

  // 안전정보
  ['st1','st2'].forEach((id, i) => { document.getElementById(id).textContent = t.st[i]; });
  ['stitle1','stitle2'].forEach((id, i) => { document.getElementById(id).textContent = t.stitle[i]; });
  ['ss1-1','ss1-2','ss1-3'].forEach((id, i) => { document.getElementById(id).textContent = t.safety1[i]; });
  ['ss2-1','ss2-2','ss2-3'].forEach((id, i) => { document.getElementById(id).textContent = t.safety2[i]; });

  // 뉴스
  ['nt1','nt2','nt3'].forEach((id, i) => { document.getElementById(id).textContent = t.news[i]; });

  // AI 챗봇 언어 동기화
  updateAILang(lang);
}

// ===================================================
//  탭 전환
// ===================================================
const ALL_SECTIONS = ['community','notice','chat','admin','news','map','safety','emergency','exchange'];

function showTab(name, el) {
  ALL_SECTIONS.forEach(s => {
    document.getElementById('sec-' + s).classList.add('hidden');
  });
  document.getElementById('sec-' + name).classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ===================================================
//  공지판 필터
// ===================================================
function filterNotice(cat, el) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.notice-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// ===================================================
//  채팅 전송
// ===================================================
function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('chat-messages');
  const now = new Date();
  const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

  const div = document.createElement('div');
  div.className = 'msg mine';
  div.innerHTML = `
    <div class="msg-avatar av-me">나</div>
    <div class="msg-body">
      <div class="msg-name" style="text-align:right;">나</div>
      <div class="msg-bubble mine-bubble">${msg}</div>
      <div class="msg-time">${time}</div>
    </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  input.value = '';
}

// ===================================================
//  관리자 문의 제출
// ===================================================
function submitInquiry() {
  const title   = document.getElementById('inq-title').value.trim();
  const content = document.getElementById('inq-content').value.trim();
  if (!title || !content) {
    alert('제목과 내용을 모두 입력해 주세요.');
    return;
  }
  document.getElementById('inq-form').classList.add('hidden');
  document.getElementById('inq-success').classList.remove('hidden');
}

// ===================================================
//  FAQ 토글
// ===================================================
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const arrow  = el.querySelector('.faq-arrow');
  answer.classList.toggle('open');
  el.classList.toggle('open');
}

// ===================================================
//  생활지도 카테고리 필터
// ===================================================
function filterMap(el) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  // 실제 카카오맵 연동 시 여기서 마커 필터링 로직 추가
}

// ===================================================
//  AI 챗봇 (관리자 소통 탭 내)
// ===================================================

const AI_LANG = {
  ko: {
    systemPrompt: `당신은 한국 충남 아산시에 거주하는 외국인 주민을 돕는 친절한 AI 생활 도우미입니다.
비자·체류, 건강보험, 분리수거, 병원 이용, 은행 이용, 노동권, 보이스피싱 예방, 관공서 이용법 등 일상생활 전반을 쉽고 친절하게 한국어로 안내해주세요.
답변은 3~5문장으로 핵심만 간결하게 설명하고, 필요하면 번호 목록을 사용하세요.
법적·의료적 결정이 필요한 경우 반드시 전문가 상담을 권고하세요.`,
    welcome: '안녕하세요! 아산시 생활 AI 도우미입니다. 비자, 건강보험, 분리수거, 병원 이용 등 궁금한 것을 무엇이든 물어보세요 😊',
    placeholder: '궁금한 것을 입력하세요...', send: '전송', loading: '답변 작성 중...',
    notice: '⚠️ AI는 일반 생활정보를 안내합니다. 법적·의료적 결정은 반드시 전문가에게 확인하세요.',
    title: 'AI 도우미', sub: '비자·생활정보·FAQ를 AI가 즉시 답변해드려요',
    quick: ['비자 갱신 방법', '건강보험 가입', '분리수거 방법', '병원 이용법', '보이스피싱 대처'],
    error: '⚠️ 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
  en: {
    systemPrompt: `You are a friendly AI life assistant for foreign residents in Asan City, South Korea.
Answer clearly in English about visas, health insurance, recycling, hospitals, banking, labor rights, voice phishing prevention, and government services.
Keep answers concise (3-5 sentences). Use numbered lists when helpful.
Always recommend consulting a professional for legal or medical decisions.`,
    welcome: 'Hello! I am your Asan City life assistant AI. Ask me anything about visas, health insurance, recycling, hospitals and more 😊',
    placeholder: 'Type your question...', send: 'Send', loading: 'Thinking...',
    notice: '⚠️ This AI provides general information. Always consult a professional for legal or medical decisions.',
    title: 'AI Assistant', sub: 'Get instant answers on visa, daily life, and FAQ',
    quick: ['Visa renewal', 'Health insurance', 'Recycling guide', 'Using hospital', 'Voice phishing'],
    error: '⚠️ An error occurred. Please try again.',
  },
  vi: {
    systemPrompt: `Bạn là trợ lý AI thân thiện giúp đỡ cư dân nước ngoài tại thành phố Asan, Hàn Quốc.
Trả lời bằng tiếng Việt rõ ràng về visa, bảo hiểm y tế, phân loại rác, bệnh viện, ngân hàng, quyền lao động và dịch vụ công.
Trả lời ngắn gọn (3-5 câu), dùng danh sách khi cần. Luôn khuyến nghị tham khảo chuyên gia cho quyết định pháp lý hoặc y tế.`,
    welcome: 'Xin chào! Tôi là trợ lý AI tại Asan. Hỏi tôi bất cứ điều gì về visa, bảo hiểm, rác thải, bệnh viện... 😊',
    placeholder: 'Nhập câu hỏi...', send: 'Gửi', loading: 'Đang trả lời...',
    notice: '⚠️ AI cung cấp thông tin chung. Tham khảo chuyên gia cho quyết định pháp lý hoặc y tế.',
    title: 'Trợ lý AI', sub: 'AI trả lời ngay về visa, sinh hoạt và FAQ',
    quick: ['Gia hạn visa', 'Bảo hiểm y tế', 'Phân loại rác', 'Dùng bệnh viện', 'Lừa đảo điện thoại'],
    error: '⚠️ Đã xảy ra lỗi. Vui lòng thử lại.',
  },
  zh: {
    systemPrompt: `你是一位友善的AI生活助手，帮助居住在韩国牙山市的外国居民。
请用中文清晰解答签证、健康保险、垃圾分类、医院、银行、劳动权益、防范电话诈骗和政府服务等问题。
回答简洁（3-5句），需要时使用编号列表。涉及法律或医疗决定时，务必建议咨询专业人士。`,
    welcome: '您好！我是牙山市生活AI助手。请随时询问有关签证、健康保险、垃圾分类、医院等问题 😊',
    placeholder: '请输入您的问题...', send: '发送', loading: '正在思考...',
    notice: '⚠️ AI提供一般生活信息。法律或医疗决定请务必咨询专业人士。',
    title: 'AI助手', sub: 'AI即时解答签证、生活信息和常见问题',
    quick: ['签证续签', '健康保险', '垃圾分类', '医院使用', '电话诈骗'],
    error: '⚠️ 发生错误，请稍后重试。',
  },
  ru: {
    systemPrompt: `Вы дружелюбный AI-помощник для иностранных жителей города Асан, Южная Корея.
Отвечайте на русском языке о визах, медицинском страховании, сортировке мусора, больницах, банках, трудовых правах и государственных услугах.
Отвечайте кратко (3-5 предложений). Всегда рекомендуйте обращаться к специалистам по юридическим или медицинским вопросам.`,
    welcome: 'Привет! Я AI-помощник для жителей Асана. Спрашивайте о визах, страховке, мусоре, больницах и многом другом 😊',
    placeholder: 'Введите ваш вопрос...', send: 'Отправить', loading: 'Думаю...',
    notice: '⚠️ AI предоставляет общую информацию. По юридическим и медицинским вопросам обращайтесь к специалистам.',
    title: 'AI-помощник', sub: 'AI мгновенно ответит на вопросы о визе, жизни и FAQ',
    quick: ['Продление визы', 'Медстрахование', 'Сортировка мусора', 'Использование больницы', 'Телефонное мошенничество'],
    error: '⚠️ Произошла ошибка. Попробуйте позже.',
  },
};

let aiHistory = [];
let aiCurrentLang = 'ko';

// AI 언어 변경 시 UI 텍스트 업데이트
function updateAILang(lang) {
  aiCurrentLang = lang;
  const d = AI_LANG[lang];
  if (!d) return;

  const titleEl = document.getElementById('admin-t0');
  const subEl   = document.getElementById('admin-s0');
  const inputEl = document.getElementById('ai-input');
  const sendEl  = document.getElementById('ai-send-btn');
  const noticeEl = document.getElementById('ai-notice');
  const welcomeEl = document.getElementById('ai-welcome');

  if (titleEl)   titleEl.textContent       = d.title;
  if (subEl)     subEl.textContent         = d.sub;
  if (inputEl)   inputEl.placeholder       = d.placeholder;
  if (sendEl)    sendEl.textContent        = d.send;
  if (noticeEl)  noticeEl.textContent      = d.notice;
  if (welcomeEl) welcomeEl.textContent     = d.welcome;

  // 빠른 질문 버튼 텍스트 업데이트
  const quickIds = ['aq1','aq2','aq3','aq4','aq5'];
  quickIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && d.quick[i]) el.textContent = d.quick[i];
  });

  // 대화 히스토리 초기화 (언어 바뀌면 새 대화 시작)
  aiHistory = [];
  const msgs = document.getElementById('ai-messages');
  if (msgs) {
    msgs.innerHTML = `
      <div class="ai-bubble-row">
        <div class="ai-bot-av">🤖</div>
        <div class="ai-bubble bot" id="ai-welcome">${d.welcome}</div>
      </div>`;
  }
}

// 빠른 질문 버튼 클릭
function aiQuick(btn) {
  const text = btn.textContent.trim();
  const input = document.getElementById('ai-input');
  if (input) { input.value = text; sendAI(); }
}

// AI 메시지 전송
async function sendAI() {
  const input   = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send-btn');
  const userMsg = input.value.trim();
  if (!userMsg || sendBtn.disabled) return;

  const d = AI_LANG[aiCurrentLang];

  appendAIBubble(userMsg, 'user');
  aiHistory.push({ role: 'user', content: userMsg });
  input.value = '';
  sendBtn.disabled = true;

  const loadingId = 'ai-loading-' + Date.now();
  appendAIBubble(d.loading, 'loading', loadingId);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: d.systemPrompt,
        messages: aiHistory,
      }),
    });
    const data  = await res.json();
    const reply = data.content?.[0]?.text || d.error;

    removeAIBubble(loadingId);
    appendAIBubble(reply, 'bot');
    aiHistory.push({ role: 'assistant', content: reply });

  } catch (err) {
    removeAIBubble(loadingId);
    appendAIBubble(d.error, 'bot');
  }

  sendBtn.disabled = false;
  input.focus();
}

function appendAIBubble(text, type, id) {
  const messages = document.getElementById('ai-messages');
  if (!messages) return;
  const row = document.createElement('div');
  row.className = 'ai-bubble-row' + (type === 'user' ? ' user' : '');
  if (id) row.id = id;
  const avatar = type !== 'user' ? '<div class="ai-bot-av">🤖</div>' : '';
  const cls    = type === 'user' ? 'user' : type;
  row.innerHTML = `${avatar}<div class="ai-bubble ${cls}">${text.replace(/\n/g, '<br>')}</div>`;
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function removeAIBubble(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ===================================================
//  환율 기능
// ===================================================

const EX_CURRENCIES = [
  { code: 'VND', name: { ko:'베트남 동', en:'Vietnamese Dong', vi:'Đồng Việt Nam', zh:'越南盾', ru:'Вьетнамский донг' }, flag: '🇻🇳', symbol: '₫' },
  { code: 'CNY', name: { ko:'중국 위안', en:'Chinese Yuan',    vi:'Nhân dân tệ',  zh:'人民币',    ru:'Китайский юань' }, flag: '🇨🇳', symbol: '¥' },
  { code: 'USD', name: { ko:'미국 달러', en:'US Dollar',       vi:'Đô la Mỹ',     zh:'美元',      ru:'Доллар США'     }, flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: { ko:'유럽 유로', en:'Euro',            vi:'Euro',          zh:'欧元',      ru:'Евро'           }, flag: '🇪🇺', symbol: '€' },
  { code: 'RUB', name: { ko:'러시아 루블', en:'Russian Ruble', vi:'Rúp Nga',      zh:'俄罗斯卢布', ru:'Российский рубль'}, flag: '🇷🇺', symbol: '₽' },
  { code: 'PHP', name: { ko:'필리핀 페소', en:'Philippine Peso',vi:'Peso Philippines',zh:'菲律宾比索', ru:'Филиппинское песо'}, flag: '🇵🇭', symbol: '₱' },
];

const EX_FLAGS = { KRW:'🇰🇷', VND:'🇻🇳', CNY:'🇨🇳', USD:'🇺🇸', EUR:'🇪🇺', RUB:'🇷🇺', PHP:'🇵🇭' };

const EX_LABELS = {
  ko: { title:'💱 실시간 환율 (원화 기준)', amount:'금액', convert:'변환', calculator:'환율 계산기', notice:'⚠️ 환율은 참고용입니다. 실제 은행 환전 시 수수료가 적용될 수 있어요.', loading:'불러오는 중...', basis:'기준' },
  en: { title:'💱 Live Exchange Rates (KRW base)', amount:'Amount', convert:'Convert', calculator:'Currency Calculator', notice:'⚠️ Rates are for reference only. Bank fees may apply.', loading:'Loading...', basis:'Date' },
  vi: { title:'💱 Tỷ giá thực tế (cơ sở KRW)', amount:'Số tiền', convert:'Đổi sang', calculator:'Máy tính tỷ giá', notice:'⚠️ Tỷ giá chỉ để tham khảo. Ngân hàng có thể áp phí.', loading:'Đang tải...', basis:'Ngày' },
  zh: { title:'💱 实时汇率（韩元基准）', amount:'金额', convert:'换算', calculator:'汇率计算器', notice:'⚠️ 汇率仅供参考。银行换汇时可能收取手续费。', loading:'加载中...', basis:'日期' },
  ru: { title:'💱 Актуальные курсы (база KRW)', amount:'Сумма', convert:'Конвертировать', calculator:'Конвертер валют', notice:'⚠️ Курсы приведены для справки. Банк может взимать комиссию.', loading:'Загрузка...', basis:'Дата' },
};

let exRates   = {};
let exKRWRate = 1;
let exLoaded  = false;

async function fetchExchangeRates() {
  if (exLoaded) return;
  const updEl = document.getElementById('ex-updated');
  if (updEl) updEl.textContent = EX_LABELS[curLang || 'ko'].loading;
  try {
    const res  = await fetch('https://api.frankfurter.app/latest?base=EUR&symbols=KRW,VND,CNY,USD,RUB,PHP');
    const data = await res.json();
    exRates        = data.rates;
    exRates['EUR'] = 1;
    exKRWRate      = data.rates['KRW'];
    exLoaded       = true;
    renderCurrencyCards();
    calcConvert();
    const d = new Date(data.date);
    const lbl = EX_LABELS[curLang || 'ko'];
    if (updEl) updEl.textContent = lbl.basis + ': ' + d.toLocaleDateString('ko-KR') + ' (ECB)';
  } catch(e) {
    const grid = document.getElementById('currency-grid');
    if (grid) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;font-size:13px;color:#aaa;padding:20px">환율 정보를 불러오지 못했습니다.</div>';
  }
}

function renderCurrencyCards() {
  const grid = document.getElementById('currency-grid');
  if (!grid) return;
  const lang = curLang || 'ko';
  grid.innerHTML = '';
  EX_CURRENCIES.forEach(c => {
    const rateKRW = (1 / exRates[c.code]) * exKRWRate;
    const card = document.createElement('div');
    card.className = 'currency-card';
    card.innerHTML = `
      <div class="cc-flag">${c.flag}</div>
      <div class="cc-name">${c.name[lang] || c.name.ko}</div>
      <div class="cc-rate">${fmtExRate(rateKRW)}원</div>
      <div class="cc-sub">1 ${c.symbol} 기준</div>
    `;
    card.onclick = () => {
      document.getElementById('conv-from').value = 'KRW';
      document.getElementById('conv-to').value   = c.code;
      updateExFlags(); calcConvert();
      document.querySelectorAll('.currency-card').forEach(el => el.classList.remove('active'));
      card.classList.add('active');
    };
    grid.appendChild(card);
  });
}

function fmtExRate(n) {
  if (n >= 100) return Math.round(n).toLocaleString('ko-KR');
  if (n >= 1)   return n.toFixed(2);
  return n.toFixed(4);
}

function toKRWEx(code, amount) {
  if (code === 'KRW') return amount;
  return (amount / exRates[code]) * exKRWRate;
}

function fromKRWEx(code, krw) {
  if (code === 'KRW') return krw;
  return (krw / exKRWRate) * exRates[code];
}

function calcConvert() {
  if (!Object.keys(exRates).length) return;
  const from   = document.getElementById('conv-from')?.value;
  const to     = document.getElementById('conv-to')?.value;
  const amount = parseFloat(document.getElementById('conv-amount')?.value) || 0;
  if (!from || !to) return;

  const krw    = toKRWEx(from, amount);
  const result = fromKRWEx(to, krw);
  const fmtNum = (to === 'VND' || to === 'RUB' || to === 'PHP')
    ? Math.round(result).toLocaleString('ko-KR')
    : result.toFixed(2);

  const resEl = document.getElementById('conv-result');
  const lblEl = document.getElementById('conv-result-label');
  const hintEl = document.getElementById('conv-rate-hint');
  if (resEl) resEl.textContent = fmtNum + ' ' + to;
  if (lblEl) lblEl.textContent = amount.toLocaleString('ko-KR') + ' ' + from + ' →';

  const unit = fromKRWEx(to, toKRWEx(from, 1));
  if (hintEl) hintEl.textContent = `1 ${from} = ${unit >= 1 ? unit.toFixed(2) : unit.toFixed(4)} ${to}`;

  updateExFlags();
}

function updateExFlags() {
  const from = document.getElementById('conv-from')?.value;
  const to   = document.getElementById('conv-to')?.value;
  const ff = document.getElementById('from-flag');
  const tf = document.getElementById('to-flag');
  const rf = document.getElementById('conv-to-flag');
  if (ff) ff.textContent = EX_FLAGS[from] || '';
  if (tf) tf.textContent = EX_FLAGS[to]   || '';
  if (rf) rf.textContent = EX_FLAGS[to]   || '';
}

function swapCurrency() {
  const fromEl = document.getElementById('conv-from');
  const toEl   = document.getElementById('conv-to');
  if (!fromEl || !toEl) return;
  const tmp  = fromEl.value;
  fromEl.value = toEl.value;
  toEl.value   = tmp;
  calcConvert();
}

// 환율 탭 진입 시 데이터 로드
const _origShowTab = window.showTab;
window.showTab = function(name, el) {
  _origShowTab(name, el);
  if (name === 'exchange') fetchExchangeRates();
};
