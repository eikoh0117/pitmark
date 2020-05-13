<template>
  <div class="field">
    <!-- ラベルの文字列が指定されたときだけ表示します -->
    <label class="label" v-if="label">{{ label }}</label>
    <!-- icon が指定されたときだけ必要なクラスを設定します -->
    <p class="control" :class="{ 'has-icons-left': icon }">
      <input class="input" :type="type" :placeholder="placeholder" :v-model="innnerValue" />
      <!-- アイコンが指定されたときだけ表示します -->
      <pm-icon v-if="icon" class="is-small is-left" :name="icon"></pm-icon>
    </p>
  </div>
</template>

<script>
import pmIcon from "./Icon";

export default {
  name: "pm-text-field",
  components: { pmIcon },
  props: {
    type: {
      type: String,
      label: String,
      default: "text",
      validator(val) {
        return ["text", "email", "password", "search", "url"].includes(val);
      }
    },
    placeholder: String,
    value: String,
    icon: String
  },
  computed: {
    // v-model の受け皿のプロパティを定義
    innerValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        // 更新されるときは input イベントを呼び出して親コンポーネントに変更してもらう
        this.$emit("input", newValue);
      }
    }
  }
};
</script>
