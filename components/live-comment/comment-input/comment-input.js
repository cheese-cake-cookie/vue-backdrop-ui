export const CommentInputComponent = {
  data() {
    return {
      editMode: false,
    };
  },
  methods: {},
  template: `
    <div class="comment-input-component">
      <label class="input__label">
        <textarea class="message" type="text" placeholder="white your comment at here!" @focus="editMode = true"></textarea>
        <button class="button--submit" :disabled="!editMode">SUBMIT</button>
      </label>
    </div>
  `,
};
