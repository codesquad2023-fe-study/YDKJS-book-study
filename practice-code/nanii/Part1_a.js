var VmyAddress = {
  street: '종로구',
  city: '서울',
  country: '한국',
};

var VyourAddress = VmyAddress; //** ⭐️ 참조의 복사가 할당

VmyAddress.street = '성동구';
console.log(VyourAddress.street); // 성동구

VyourAddress.street = '강남구';
console.log(VmyAddress.street, VyourAddress.street); // 강남구 강남구

const CmyAddress = {
  street: '종로구',
  city: '서울',
  country: '한국',
};
const CyourAddress = CmyAddress; //** ⭐️ 참조의 복사가 할당

CmyAddress.street = '강남구';
console.log(CyourAddress.street); // 강남구

CyourAddress.street = '성동구';
console.log(CmyAddress.street, CyourAddress.street); // 성동구 성동구
