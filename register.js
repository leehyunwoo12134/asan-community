// ===================================================
//  회원가입 페이지 — register.js
// ===================================================

const REG_LANG = {
  ko: {
    logoSub: '회원가입',
    stepLabels: ['기본 정보', '비밀번호', '추가 정보'],
    lblName: '이름 (실명)', lblEmail: '이메일',
    lblPw: '비밀번호', lblPw2: '비밀번호 확인',
    lblNation: '국적', lblPhone: '연락처 (선택)',
    btnNext: '다음 →', btnBack: '← 이전',
    btnRegister: '회원가입 완료',
    agreeAll: '<strong>전체 동의</strong>',
    agreeTerms: '이용약관 동의 (필수)',
    agreePrivacy: '개인정보 수집 동의 (필수)',
    noAccount: '이미 계정이 있으신가요?',
    goLogin: '로그인',
    pwStrength: ['', '매우 약함', '약함', '보통', '강함', '매우 강함'],
    errors: {
      fillAll: '모든 항목을 입력해주세요.',
      invalidEmail: '올바른 이메일 형식이 아닙니다.',
      pwShort: '비밀번호는 6자 이상이어야 합니다.',
      pwMismatch: '비밀번호가 일치하지 않습니다.',
      agreeRequired: '필수 약관에 동의해주세요.',
      emailUsed: '이미 사용 중인 이메일입니다.',
      weakPw: '비밀번호가 너무 단순합니다.',
      unknownErr: '오류가 발생했습니다. 다시 시도해주세요.',
      loading: '처리 중...',
      signupOk: '✅ 회원가입 완료! 메인 페이지로 이동합니다.',
    },
  },
  en: {
    logoSub: 'Sign Up',
    stepLabels: ['Basic Info', 'Password', 'More Info'],
    lblName: 'Full Name', lblEmail: 'Email',
    lblPw: 'Password', lblPw2: 'Confirm Password',
    lblNation: 'Nationality', lblPhone: 'Phone (optional)',
    btnNext: 'Next →', btnBack: '← Back',
    btnRegister: 'Create Account',
    agreeAll: '<strong>Agree to all</strong>',
    agreeTerms: 'Terms of Service (required)',
    agreePrivacy: 'Privacy Policy (required)',
    noAccount: 'Already have an account?',
    goLogin: 'Login',
    pwStrength: ['', 'Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'],
    errors: {
      fillAll: 'Please fill in all fields.',
      invalidEmail: 'Please enter a valid email address.',
      pwShort: 'Password must be at least 6 characters.',
      pwMismatch: 'Passwords do not match.',
      agreeRequired: 'Please agree to the required terms.',
      emailUsed: 'This email is already in use.',
      weakPw: 'Password is too weak.',
      unknownErr: 'An error occurred. Please try again.',
      loading: 'Processing...',
      signupOk: '✅ Account created! Redirecting...',
    },
  },
  vi: {
    logoSub: 'Đăng ký',
    stepLabels: ['Thông tin cơ bản', 'Mật khẩu', 'Thông tin thêm'],
    lblName: 'Họ và tên', lblEmail: 'Email',
    lblPw: 'Mật khẩu', lblPw2: 'Xác nhận mật khẩu',
    lblNation: 'Quốc tịch', lblPhone: 'Điện thoại (tùy chọn)',
    btnNext: 'Tiếp →', btnBack: '← Quay lại',
    btnRegister: 'Hoàn tất đăng ký',
    agreeAll: '<strong>Đồng ý tất cả</strong>',
    agreeTerms: 'Điều khoản dịch vụ (bắt buộc)',
    agreePrivacy: 'Chính sách quyền riêng tư (bắt buộc)',
    noAccount: 'Đã có tài khoản?',
    goLogin: 'Đăng nhập',
    pwStrength: ['', 'Rất yếu', 'Yếu', 'Trung bình', 'Mạnh', 'Rất mạnh'],
    errors: {
      fillAll: 'Vui lòng điền đầy đủ thông tin.',
      invalidEmail: 'Vui lòng nhập địa chỉ email hợp lệ.',
      pwShort: 'Mật khẩu phải có ít nhất 6 ký tự.',
      pwMismatch: 'Mật khẩu không khớp.',
      agreeRequired: 'Vui lòng đồng ý với các điều khoản bắt buộc.',
      emailUsed: 'Email này đã được sử dụng.',
      weakPw: 'Mật khẩu quá yếu.',
      unknownErr: 'Đã xảy ra lỗi. Vui lòng thử lại.',
      loading: 'Đang xử lý...',
      signupOk: '✅ Đăng ký thành công! Đang chuyển hướng...',
    },
  },
  zh: {
    logoSub: '注册',
    stepLabels: ['基本信息', '密码设置', '补充信息'],
    lblName: '姓名', lblEmail: '邮箱',
    lblPw: '密码', lblPw2: '确认密码',
    lblNation: '国籍', lblPhone: '联系方式（选填）',
    btnNext: '下一步 →', btnBack: '← 上一步',
    btnRegister: '完成注册',
    agreeAll: '<strong>全部同意</strong>',
    agreeTerms: '服务条款（必填）',
    agreePrivacy: '隐私政策（必填）',
    noAccount: '已有账户？',
    goLogin: '登录',
    pwStrength: ['', '非常弱', '弱', '一般', '强', '非常强'],
    errors: {
      fillAll: '请填写所有字段。',
      invalidEmail: '请输入有效的邮箱地址。',
      pwShort: '密码至少需要6个字符。',
      pwMismatch: '两次密码不一致。',
      agreeRequired: '请同意必填条款。',
      emailUsed: '该邮箱已被使用。',
      weakPw: '密码强度太弱。',
      unknownErr: '发生错误，请重试。',
      loading: '处理中...',
      signupOk: '✅ 注册成功！正在跳转...',
    },
  },
  ru: {
    logoSub: 'Регистрация',
    stepLabels: ['Основная информация', 'Пароль', 'Дополнительно'],
    lblName: 'Имя', lblEmail: 'Эл. почта',
    lblPw: 'Пароль', lblPw2: 'Подтвердите пароль',
    lblNation: 'Гражданство', lblPhone: 'Телефон (необязательно)',
    btnNext: 'Далее →', btnBack: '← Назад',
    btnRegister: 'Зарегистрироваться',
    agreeAll: '<strong>Принять всё</strong>',
    agreeTerms: 'Условия использования (обязательно)',
    agreePrivacy: 'Политика конфиденциальности (обязательно)',
    noAccount: 'Уже есть аккаунт?',
    goLogin: 'Войти',
    pwStrength: ['', 'Очень слабый', 'Слабый', 'Средний', 'Сильный', 'Очень сильный'],
    errors: {
      fillAll: 'Пожалуйста, заполните все поля.',
      invalidEmail: 'Введите корректный адрес эл. почты.',
      pwShort: 'Пароль должен содержать не менее 6 символов.',
      pwMismatch: 'Пароли не совпадают.',
      agreeRequired: 'Пожалуйста, примите обязательные условия.',
      emailUsed: 'Этот email уже используется.',
      weakPw: 'Пароль слишком простой.',
      unknownErr: 'Произошла ошибка. Попробуйте ещё раз.',
      loading: 'Обработка...',
      signupOk: '✅ Регистрация успешна! Перенаправление...',
    },
  },
};

let currentRegLang = 'ko';

window.getLangData = () => REG_LANG[currentRegLang];
window.getMsg      = (key) => REG_LANG[currentRegLang].errors?.[key] || key;

window.setLang = function(lang, btn) {
  currentRegLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const d = REG_LANG[lang];
  document.getElementById('logo-sub').textContent      = d.logoSub;
  document.getElementById('step-lbl-1').textContent    = d.stepLabels[0];
  document.getElementById('step-lbl-2').textContent    = d.stepLabels[1];
  document.getElementById('step-lbl-3').textContent    = d.stepLabels[2];
  document.getElementById('lbl-name').textContent      = d.lblName;
  document.getElementById('lbl-email').textContent     = d.lblEmail;
  document.getElementById('lbl-pw').textContent        = d.lblPw;
  document.getElementById('lbl-pw2').textContent       = d.lblPw2;
  document.getElementById('lbl-nation').textContent    = d.lblNation;
  document.getElementById('lbl-phone').textContent     = d.lblPhone;
  document.getElementById('btn-next-1').textContent    = d.btnNext;
  document.getElementById('btn-next-2').textContent    = d.btnNext;
  document.getElementById('btn-back-2').textContent    = d.btnBack;
  document.getElementById('btn-back-3').textContent    = d.btnBack;
  document.getElementById('btn-register-text').textContent = d.btnRegister;
  document.getElementById('agree-all-text').innerHTML  = d.agreeAll;
  document.getElementById('agree-terms-text').textContent = d.agreeTerms;
  document.getElementById('agree-privacy-text').textContent = d.agreePrivacy;
  document.getElementById('have-account-text').textContent = d.noAccount;
  document.getElementById('go-login-link').textContent = d.goLogin;
};

// 비밀번호 강도 체크
window.checkPwStrength = function(pw) {
  const bar   = document.getElementById('pw-bar');
  const label = document.getElementById('pw-label');
  const d = REG_LANG[currentRegLang];
  if (!pw) { bar.style.width = '0'; label.textContent = ''; return; }

  let score = 0;
  if (pw.length >= 6)  score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const pct    = (score / 5) * 100;
  const colors = ['', '#E24B4A', '#E87E2B', '#F0C125', '#44B879', '#1D9E75'];
  bar.style.width      = pct + '%';
  bar.style.background = colors[score] || '#ccc';
  label.textContent    = d.pwStrength[score] || '';
  label.style.color    = colors[score] || '#ccc';
};

// 비밀번호 표시/숨김
window.togglePw = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
};
