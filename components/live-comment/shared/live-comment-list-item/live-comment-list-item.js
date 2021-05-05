export const LiveCommentListItemComponent = {
  props: {
    comment: {
      type: Object,
      default: () => {
        return {
          id: 1,
          user: {
            id: 1,
            nickname: 'MIA',
            iamge: 'https://dummyimage.com/400x400/ff36de/ffffff&text=MIA',
          },
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nisi!',
          createdAt: '2021-05-05 14:27:00',
        };
      },
    },
  },
  template: `
    <li class="live-comment-list-item-component">
      <div class="user">
        <div class="user__profile">
        </div>
        <span class="user__nickname">{{ comment.user.nickname }}</span>
      </div>
      <span class="created-at">오늘 9:39</span>
      <p class="content">{{ comment.content }}</p>
    </li>
  `,
};
