import { LiveCommentListComponent } from './shared/live-comment-list/index.js';
import { LiveCommentListItemComponent } from './shared/live-comment-list-item/index.js';

export const LiveCommentComponent = {
  components: {
    LiveCommentListComponent,
    LiveCommentListItemComponent,
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
      <p class="warn">도배/욕설 등 댓글 예절을 지키지 않을 경우, 댓글 이용이 제한될 수 있습니다.</p>
      <LiveCommentListComponent :comments="comments"></LiveCommentListComponent>
    </div>
  `,
};
