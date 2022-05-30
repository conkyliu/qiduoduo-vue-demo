<template>
  <div>
    <p>myInput value is {{ value }}</p>
    <label for="username">Username:</label>
    <Input id="username" name="username" v-model:value="value" data-testid="username"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Input} from 'ant-design-vue'

export default defineComponent({
  components: {Input},
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>
