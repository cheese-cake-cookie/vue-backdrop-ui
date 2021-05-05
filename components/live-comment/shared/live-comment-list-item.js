export const LiveCommentListItemComponent = {
  props: {
    user: {
      type: Object,
    },
    comment: {
      type: Object,
    },
  },
  template: `
    <li class="lice-comment-list-item-component">
      <div class="user">
        <div class="user__profile">
        </div>
        <span class="user__nickname">MIA</span>
      </div>
      <span class="created-at">오늘 9:39</span>
      <p class="content"></p>
    </li>
  `
}