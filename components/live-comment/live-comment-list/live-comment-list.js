import { LiveCommentListItemComponent } from '../live-comment-list-item/index.js';

export const LiveCommentListComponent = {
  props: {
    comments: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    'live-comment-list-item': LiveCommentListItemComponent,
  },
  computed: {
    empty() {
      return this.comments.length === 0;
    },
  },
  template: `
    <ul class="live-comment-list-component">
      <p v-if="empty">지금 첫 댓글 작성!</p>
      <live-comment-list-item v-for="comment in comments" :key="comment.id" :comment="comment"></live-comment-list-item>
    </ul>
  `,
};
