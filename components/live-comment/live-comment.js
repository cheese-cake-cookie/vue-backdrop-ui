import { LiveCommentListComponent } from './shared/live-comment-list/index.js';
import { LiveCommentListItemComponent } from './shared/live-comment-list-item/index.js';
import { CommentInputComponent } from './shared/comment-input/index.js';

export const LiveCommentComponent = {
  components: {
    LiveCommentListComponent,
    LiveCommentListItemComponent,
    CommentInputComponent,
  },
  data() {
    return {
      comments: [],
      channel: {
        id: 1,
        title: 'WIGGLE WIGGLE',
        image: 'https://dummyimage.com/400x400/93b4fa/ffffff&text=sora+no+aosa',
      },
      adminComment: {
        id: 1,
        user: {
          id: 1,
          nickname: 'MIA',
          image: 'https://dummyimage.com/400x400/ff36de/ffffff&text=MIA',
        },
        content: 'Hello everyone until tommorow streaming is on..! enjoy it :)',
        createdAt: '2021-05-05 14:27:00',
      },
    };
  },
  created() {
    fetch('./json/comments.json')
      .then((res) => res.json())
      .then((comments) => {
        this.comments = comments.data;
      });
  },
  template: `
    <div class="live-comment-component">
      <div class="channel">
        <img class="channel-image" :src="channel.image">
        <h1 class="channel-title">{{ channel.title }}</h1>
      </div>
      <hr class="divider" />
      <LiveCommentListItemComponent :comment="adminComment"></LiveCommentListItemComponent>
      <hr class="divider divider--primary" />
      <p class="warn">The use of comments may be restricted if you do not observe the manners of comments.</p>
      <LiveCommentListComponent :comments="comments"></LiveCommentListComponent>
      <CommentInputComponent class="form"></CommentInputComponent>
    </div>
  `,
};
