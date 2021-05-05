export const LiveCommentListItemComponent = {
  props: {
    comment: {
      type: Object,
    },
  },
  computed: {
    userProfileStyle() {
      return {
        'background-image': `url('${this.comment.user.image}')`,
      };
    },
  },
  template: `
    <li class="live-comment-list-item-component">
      <div class="user">
        <div class="user-profile" :style="userProfileStyle"></div>
        <span class="user-nickname">{{ comment.user.nickname }}</span>
      </div>
      <span class="created-at">{{ comment.createdAt }}</span>
      <p class="content">{{ comment.content }}</p>
    </li>
  `,
};
