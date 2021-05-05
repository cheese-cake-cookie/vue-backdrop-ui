import {LiveCommentListItemComponent} from './shared/live-comment-list-item.js';

export const LiveCommentComponent = {
  props: {
    channel: {
      type: Object,
    }
  },
  components: {
    LiveCommentListItemComponent,
  },
  template: `
    <div class="live-comment-component">
      <div class="channel">
        <h1>채널 타이틀</h1>
        <img class="channel__image" style="width: 100px;">
      </div>
    </div>
  `
};