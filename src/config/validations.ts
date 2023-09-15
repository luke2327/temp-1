export const validations = {
  phone: {
    pattern: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
    errorMessage: '전화번호 형식에 맞게 입력해주세요.',
  },
  name: {
    pattern: /^.{0,20}$/,
    errorMessage: '20글자 이내의 단체명을 사용해주세요.',
  },
  location: {
    pattern: /^.{0,50}$/,
    errorMessage: '50글자 이하로 입력해주세요.',
  },
  etc: {
    pattern: /^.{0,1000}$/,
    errorMessage: '1000글자 이하로 입력해주세요.',
  },
};
