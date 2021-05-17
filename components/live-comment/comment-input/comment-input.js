export const CommentInputComponent = {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      editMode: false,
    };
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
      <div class="dim" :class="{showing: editMode}" @click="editMode = false"></div>
      <label class="input__label">
        <span class="user-profile" :style="userProfileStyle"></span>
        <textarea class="input" type="text" placeholder="white your comment at here!" @focus="editMode = true"></textarea>
        <button class="button--submit" :disabled="!editMode">SUBMIT</button>
      </label>
    </div>
  `,
};
