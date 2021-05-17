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
  render(h) {
    const commentItems = this.comments.map((comment) => {
      return h(LiveCommentListItemComponent, {
        props: {
          comment: comment,
        },
      });
    });

    return h(
      'ul',
      {
        staticClass: 'live-comment-list-component',
      },
      [this.$slots.default, commentItems],
    );
  },
};
