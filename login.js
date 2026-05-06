// ===================================================
//  로그인 페이지 — login.js
//  다국어 데이터 & UI 전환 로직
// ===================================================

const LOGIN_LANG = {
  ko: {
    logoText:   '아산 외국인 커뮤니티',
    logoSub:    'Asan Foreign Community',
    tabLogin:   '로그인',
    tabSignup:  '회원가입',
    lblEmail:   '이메일',
    lblPw:      '비밀번호',
    lblName:    '이름',
    lblSuEmail: '이메일',
    lblSuPw:    '비밀번호',
    lblSuPw2:   '비밀번호 확인',
    lblNation:  '국적',
    btnLogin:   '로그인',
    btnGoogle:  'Google로 로그인',
    btnSignup:  '회원가입',
    divider:    '또는',
    loading:    '처리 중...',
    errors: {
      fillAll:     '모든 항목을 입력해주세요.',
      pwMismatch:  '비밀번호가 일치하지 않습니다.',
      pwShort:     '비밀번호는 6자 이상이어야 합니다.',
      noUser:      '존재하지 않는 계정입니다.',
      wrongPw:     '비밀번호가 올바르지 않습니다.',
      invalidEmail:'올바른 이메일 형식이 아닙니다.',
      emailUsed:   '이미 사용 중인 이메일입니다.',
      weakPw:      '비밀번호가 너무 단순합니다.',
      tooMany:     '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해주세요.',
      popupClosed: '팝업이 닫혔습니다. 다시 시도해주세요.',
      unknownErr:  '오류가 발생했습니다. 다시 시도해주세요.',
      signupOk:    '✅ 회원가입 완료! 메인 페이지로 이동합니다.',
      loading:     '처리 중...',
    },
  },
  en: {
    logoText:   'Asan Foreign Community',
    logoSub:    '아산 외국인 커뮤니티',
    tabLogin:   'Login',
    tabSignup:  'Sign Up',
    lblEmail:   'Email',
    lblPw:      'Password',
    lblName:    'Name',
    lblSuEmail: 'Email',
    lblSuPw:    'Password',
    lblSuPw2:   'Confirm password',
    lblNation:  'Nationality',
    btnLogin:   'Login',
    btnGoogle:  'Continue with Google',
    btnSignup:  'Create account',
    divider:    'or',
    loading:    'Processing...',
    errors: {
      fillAll:     'Please fill in all fields.',
      pwMismatch:  'Passwords do not match.',
      pwShort:     'Password must be at least 6 characters.',
      noUser:      'No account found with this email.',
      wrongPw:     'Incorrect password.',
      invalidEmail:'Please enter a valid email address.',
      emailUsed:   'This email is already in use.',
      weakPw:      'Password is too weak.',
      tooMany:     'Too many attempts. Please try again later.',
      popupClosed: 'Popup closed. Please try again.',
      unknownErr:  'An error occurred. Please try again.',
      signupOk:    '✅ Account created! Redirecting...',
      loading:     'Processing...',
    },
  },
  vi: {
    logoText:   'Cộng đồng người nước ngoài Asan',
    logoSub:    '아산 외국인 커뮤니티',
    tabLogin:   'Đăng nhập',
    tabSignup:  'Đăng ký',
    lblEmail:   'Email',
    lblPw:      'Mật khẩu',
    lblName:    'Họ và tên',
    lblSuEmail: 'Email',
    lblSuPw:    'Mật khẩu',
    lblSuPw2:   'Xác nhận mật khẩu',
    lblNation:  'Quốc tịch',
    btnLogin:   'Đăng nhập',
    btnGoogle:  'Đăng nhập bằng Google',
    btnSignup:  'Tạo tài khoản',
    divider:    'hoặc',
    loading:    'Đang xử lý...',
    errors: {
      fillAll:     'Vui lòng điền đầy đủ thông tin.',
      pwMismatch:  'Mật khẩu không khớp.',
      pwShort:     'Mật khẩu phải có ít nhất 6 ký tự.',
      noUser:      'Không tìm thấy tài khoản với email này.',
      wrongPw:     'Mật khẩu không đúng.',
      invalidEmail:'Vui lòng nhập địa chỉ email hợp lệ.',
      emailUsed:   'Email này đã được sử dụng.',
      weakPw:      'Mật khẩu quá yếu.',
      tooMany:     'Quá nhiều lần thử. Vui lòng thử lại sau.',
      popupClosed: 'Cửa sổ đã đóng. Vui lòng thử lại.',
      unknownErr:  'Đã xảy ra lỗi. Vui lòng thử lại.',
      signupOk:    '✅ Đăng ký thành công! Đang chuyển hướng...',
      loading:     'Đang xử lý...',
    },
  },
  zh: {
    logoText:   '牙山外国人社区',
    logoSub:    '아산 외국인 커뮤니티',
    tabLogin:   '登录',
    tabSignup:  '注册',
    lblEmail:   '邮箱',
    lblPw:      '密码',
    lblName:    '姓名',
    lblSuEmail: '邮箱',
    lblSuPw:    '密码',
    lblSuPw2:   '确认密码',
    lblNation:  '国籍',
    btnLogin:   '登录',
    btnGoogle:  '使用 Google 登录',
    btnSignup:  '创建账户',
    divider:    '或',
    loading:    '处理中...',
    errors: {
      fillAll:     '请填写所有字段。',
      pwMismatch:  '两次密码不一致。',
      pwShort:     '密码至少需要6个字符。',
      noUser:      '未找到该邮箱对应的账户。',
      wrongPw:     '密码不正确。',
      invalidEmail:'请输入有效的邮箱地址。',
      emailUsed:   '该邮箱已被使用。',
      weakPw:      '密码强度太弱。',
      tooMany:     '尝试次数过多，请稍后再试。',
      popupClosed: '弹窗已关闭，请重试。',
      unknownErr:  '发生错误，请重试。',
      signupOk:    '✅ 注册成功！正在跳转...',
      loading:     '处理中...',
    },
  },
  ru: {
    logoText:   'Сообщество иностранцев Асан',
    logoSub:    '아산 외국인 커뮤니티',
    tabLogin:   'Войти',
    tabSignup:  'Регистрация',
    lblEmail:   'Эл. почта',
    lblPw:      'Пароль',
    lblName:    'Имя',
    lblSuEmail: 'Эл. почта',
    lblSuPw:    'Пароль',
    lblSuPw2:   'Подтвердите пароль',
    lblNation:  'Гражданство',
    btnLogin:   'Войти',
    btnGoogle:  'Войти через Google',
    btnSignup:  'Создать аккаунт',
    divider:    'или',
    loading:    'Обработка...',
    errors: {
      fillAll:     'Пожалуйста, заполните все поля.',
      pwMismatch:  'Пароли не совпадают.',
      pwShort:     'Пароль должен содержать не менее 6 символов.',
      noUser:      'Аккаунт с этим email не найден.',
      wrongPw:     'Неверный пароль.',
      invalidEmail:'Введите корректный адрес эл. почты.',
      emailUsed:   'Этот email уже используется.',
      weakPw:      'Пароль слишком простой.',
      tooMany:     'Слишком много попыток. Попробуйте позже.',
      popupClosed: 'Окно закрыто. Попробуйте ещё раз.',
      unknownErr:  'Произошла ошибка. Попробуйте ещё раз.',
      signupOk:    '✅ Регистрация прошла успешно! Перенаправление...',
      loading:     'Обработка...',
    },
  },
};

let currentLoginLang = 'ko';

// 외부에서 호출 가능하도록 window에 노출
window.getLangData = () => LOGIN_LANG[currentLoginLang];
window.getMsg      = (key) => LOGIN_LANG[currentLoginLang].errors?.[key] || key;

// ── 언어 설정 ──
window.setLang = function(lang, btn) {
  currentLoginLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const d = LOGIN_LANG[lang];
  document.getElementById('logo-text').textContent      = d.logoText;
  document.getElementById('logo-sub').textContent       = d.logoSub;
  document.getElementById('tab-login-text').textContent = d.tabLogin;
  document.getElementById('tab-signup-text').textContent= d.tabSignup;
  document.getElementById('lbl-email').textContent      = d.lblEmail;
  document.getElementById('lbl-pw').textContent         = d.lblPw;
  document.getElementById('lbl-name').textContent       = d.lblName;
  document.getElementById('lbl-su-email').textContent   = d.lblSuEmail;
  document.getElementById('lbl-su-pw').textContent      = d.lblSuPw;
  document.getElementById('lbl-su-pw2').textContent     = d.lblSuPw2;
  document.getElementById('lbl-nation').textContent     = d.lblNation;
  document.getElementById('btn-login-text').textContent = d.btnLogin;
  document.getElementById('btn-google-text').textContent= d.btnGoogle;
  document.getElementById('btn-signup-text').textContent= d.btnSignup;
  document.getElementById('divider-text').textContent   = d.divider;

  // 에러 메시지 초기화
  ['login-error', 'signup-error'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
    document.getElementById(id).textContent = '';
  });
};

// ── 탭 전환 ──
window.switchTab = function(tab) {
  const isLogin = tab === 'login';
  document.getElementById('form-login').classList.toggle('hidden', !isLogin);
  document.getElementById('form-signup').classList.toggle('hidden', isLogin);
  document.getElementById('tab-login').classList.toggle('active', isLogin);
  document.getElementById('tab-signup').classList.toggle('active', !isLogin);
  document.getElementById('login-success').classList.add('hidden');
  ['login-error', 'signup-error'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
};

// 엔터키로 로그인
document.addEventListener('DOMContentLoaded', () => {
  ['login-email', 'login-pw'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') window.doLogin?.();
    });
  });
  ['signup-name', 'signup-email', 'signup-pw', 'signup-pw2'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') window.doSignup?.();
    });
  });
});
