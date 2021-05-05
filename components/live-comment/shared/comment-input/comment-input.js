export const CommentInputComponent = {
  props: {
    user: {
      type: Object,
    },
  },
  computed: {
    userProfileStyle() {
      if (!this.user) return;

      return {
        'background-image': `url('${user.image}')`,
      };
    },
  },
  methods: {},
  template: `
    <div class="comment-input-component">
      <label class="input__label">
        <span class="user-profile" :style="userProfileStyle"></span>
        <textarea class="input" type="text" placeholder="white your comment at here!"></textarea>
        <button class="button--submit">SUBMIT</button>
      </label>
    </div>
  `,
};