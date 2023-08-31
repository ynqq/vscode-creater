export default (bigFolderName: string) => `<template>
  <div></div>
</template>

<script setup lang="ts">
  import { IConfirmRes } from 'neo-cmc-components';
  import { ${bigFolderName}Props } from './type';

  defineOptions({
    name: '${bigFolderName}Com',
  });
  const props = defineProps<${bigFolderName}Props>();
  const emits = defineEmits<{
    confirm: [];
  }>();

  async function confirm({ close }: IConfirmRes) {
    await close();
    emits('confirm');
  }
  defineExpose({ confirm });
</script>

<style scoped lang="less"></style>
`;
