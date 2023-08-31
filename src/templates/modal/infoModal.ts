export default (bigFolderName: string) => `<template>
  <div ref="modalRef"></div>
</template>

<script setup lang="ts">
  import { IConfirmRes, useLoading } from 'neo-cmc-components';
  import { ${bigFolderName}Props } from './type';

  defineOptions({
    name: '${bigFolderName}Com',
  });
  const props = defineProps<${bigFolderName}Props>();
  const emits = defineEmits<{
    confirm: [];
  }>();

  const modalRef = ref();

  const fetchInfo = useLoading(
    async () => {
      //
    },
    {
      el: modalRef,
      noDelay: true,
    }
  );

  async function confirm({ close }: IConfirmRes) {
    await close();
    emits('confirm');
  }

  function init() {
    fetchInfo();
  }
  onMounted(() => {
    init();
  });
  defineExpose({ confirm });
</script>

<style scoped lang="less"></style>
`;
