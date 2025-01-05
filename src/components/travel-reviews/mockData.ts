// 리뷰 리스트 UI 테스트를 위한 더미 데이터
export const REVIEW_LIST = [
  {
    nickname: '정센',
    review_id: 1,
    title: '여행 겁나게 재밌어부러야',
    rating: 5,
    like_count: 3,
    comment_count: 3,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '권연',
    review_id: 2,
    title: '절거운 여행',
    rating: 3,
    like_count: 7,
    comment_count: 7,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '조유원숭이',
    review_id: 3,
    title: '맛있는 거 많이 먹구 왔어요',
    rating: 5,
    like_count: 3,
    comment_count: 3,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '승강',
    review_id: 4,
    title: '멋진 여행',
    rating: 3,
    like_count: 7,
    comment_count: 7,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '임돌',
    review_id: 5,
    title: '멋진 여행',
    rating: 5,
    like_count: 3,
    comment_count: 3,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '권연',
    review_id: 6,
    title: '멋진 여행',
    rating: 3,
    like_count: 7,
    comment_count: 7,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '조유원숭이',
    review_id: 7,
    title: '멋진 여행',
    rating: 5,
    like_count: 3,
    comment_count: 3,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '승강',
    review_id: 8,
    title: '멋진 여행',
    rating: 3,
    like_count: 7,
    comment_count: 7,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
  {
    nickname: '임돌',
    review_id: 9,
    title: '멋진 여행',
    rating: 5,
    like_count: 3,
    comment_count: 3,
    created_at: '2024-12-23T14:00:00Z',
    updated_at: '2024-12-23T14:00:00Z',
  },
];

// 여행 후기 상세페이지 더미데이터
export const REVIEW_DATA = {
  travel_route_id: '123',
  review_id: 1,
  title: '일정을 정말로 진짜로 진정으로 진심으로 진실로 추천합니다!',
  nickname: '정돌멍',
  content: `<h1 class="font-bold text-2xl"><span style="color: #FF9B36">도르멍 첫 사용 후기</span></h1><p>지난 주 친구와 다녀온 일정입니다.</p><p></p><h2 class="font-bold text-xl"><strong><mark data-color="#F8EAC1" style="background-color: #F8EAC1; color: inherit">용머리해안</mark></strong></h2><p>장관이네요. 절경이구요. 신이 주신 선물이네요.</p><p></p><h2 class="font-bold text-xl"><span style="color: #FFFFFF"><mark data-color="#0E72D5" style="background-color: #0E72D5; color: inherit">한담해변 카약</mark></span></h2><p><s>물이 굉장히 얕은 걸 몰라서</s></p><p>너무 무서웠어요.</p>`,
  rating: 4.5,
  like_count: 99,
  comment_count: 0,
  photo_urls: [],
  regions: ['애월읍', '한림읍'],
  travel_route: ['용머리해안', '한담해변카약', '애월놀맨', '이호테우 해변'],
  created_at: '2025-01-02T00:00:00.000Z',
  updated_at: '2025-01-02T00:00:00.000Z',
};

// 여행 후기 댓글 더미데이터
export const COMMENT_DATA = [
  {
    comment_id: 1,
    content:
      '이 여행 후기 너무 좋아요! 저도 가보고 싶네요. 정말 멋진 여행지인 것 같아요. 언제가 될지 모르겠지만 꼭 가보고 싶어요.',
    created_at: '2025-01-03T10:30:00Z',
    updated_at: '2025-01-03T10:30:00Z',
    nickname: '여행사랑',
    user_id: 101,
    message: '',
  },
  {
    comment_id: 2,
    content:
      '사진이 정말 멋지네요. 여행지 추천 감사합니다! 이렇게 상세하게 설명해주셔서 다음 여행지 선택에 큰 도움이 될 것 같습니다.',
    created_at: '2025-01-03T11:00:00Z',
    updated_at: '2025-01-03T11:00:00Z',
    nickname: '방랑자',
    user_id: 102,
    message: '',
  },
  {
    comment_id: 3,
    content:
      '여행 경비는 어느 정도 들었나요? 궁금합니다. 예산을 어떻게 계획해야 할지 잘 모르겠어요. 조금 더 구체적인 정보가 필요합니다.',
    created_at: '2025-01-03T11:15:00Z',
    updated_at: '2025-01-03T11:15:00Z',
    nickname: '예산여행자',
    user_id: 103,
    message: '',
  },
  {
    comment_id: 4,
    content:
      '저도 비슷한 코스로 다녀왔는데 정말 좋았어요. 이 여행지에 대해 좀 더 알고 싶어요. 좋은 정보 감사합니다!',
    created_at: '2025-01-03T12:00:00Z',
    updated_at: '2025-01-03T12:00:00Z',
    nickname: '세계일주자',
    user_id: 104,
    message: '',
  },
  {
    comment_id: 5,
    content: '다음에는 꼭 여기에 가봐야겠어요. 좋은 정보 감사합니다!',
    created_at: '2025-01-03T12:30:00Z',
    updated_at: '2025-01-03T12:30:00Z',
    nickname: '탐험가',
    user_id: 105,
    message: '',
  },
  {
    comment_id: 6,
    content:
      '이 코스는 너무 멋지네요. 친구들과 함께 가면 정말 재미있을 것 같아요. 추가 정보가 더 있으면 알려주세요.',
    created_at: '2025-01-03T13:00:00Z',
    updated_at: '2025-01-03T13:00:00Z',
    nickname: '여행매니아',
    user_id: 106,
    message: '',
  },
  {
    comment_id: 7,
    content:
      '여기 음식도 맛있다고 들었는데, 어떤 음식이 가장 추천되나요? 여행하면서 먹을 것을 고민 중이에요.',
    created_at: '2025-01-03T13:30:00Z',
    updated_at: '2025-01-03T13:30:00Z',
    nickname: '미식가',
    user_id: 107,
    message: '',
  },
  {
    comment_id: 8,
    content:
      '비슷한 여행지를 찾고 있었는데 정말 좋은 정보네요. 특히 이 지역의 문화가 정말 매력적이에요.',
    created_at: '2025-01-03T14:00:00Z',
    updated_at: '2025-01-03T14:00:00Z',
    nickname: '문화탐방',
    user_id: 108,
    message: '',
  },
  {
    comment_id: 9,
    content:
      '이 여행지를 선택한 이유가 궁금해요. 다른 사람들은 어떤 이유로 이곳을 선택했는지 알고 싶습니다.',
    created_at: '2025-01-03T14:30:00Z',
    updated_at: '2025-01-03T14:30:00Z',
    nickname: '여행질문자',
    user_id: 109,
    message: '',
  },
  {
    comment_id: 10,
    content:
      '정말 멋진 여행지네요! 사진도 너무 예쁘고, 다른 사람들에게도 추천하고 싶어요. 다음 여행지로 여기로 정해야겠어요.',
    created_at: '2025-01-03T15:00:00Z',
    updated_at: '2025-01-03T15:00:00Z',
    nickname: '여행추천자',
    user_id: 110,
    message: '',
  },
];

// 임시 더미 데이터
export const ROUTE_INFO_DUMMY_DATA = {
  title: '카약 타러 가는 일정',
  route: '용머리 해안 - 성이시돌 목장 - 한담해변 카약 - 애월 놀맨 - 이호테우 해변',
} as const;
