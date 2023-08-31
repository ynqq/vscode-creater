export default (bigFolderName: string) => `<template>
  <div ref="modalRef">
    <a-form ref="formRef" :model="form" :rules="rules" layout="vertical">
      <a-form-item name="remark" :label="''">
        <a-textarea v-model:value="form.remark" :placeholder="''" :rows="6" show-count :maxlength="200"></a-textarea>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { IConfirmRes, useLoading, handleRes } from 'neo-cmc-components';
  import { signAction } from '@/store/index';
  import { ${bigFolderName}Props } from './type';

  defineOptions({
    name: '${bigFolderName}Com',
  });
  const props = defineProps<${bigFolderName}Props>();
  const emits = defineEmits<{
    confirm: [];
  }>();

  const modalRef = ref();
  const formRef = ref();
  const { t: $t } = useI18n();
  const form = ref({
    remark: '',
  });
  const rules: any = {
    remark: [
      {
        required: true,
        message: '',
        trigger: 'change',
      },
    ],
  };

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
    await formRef.value.validateFields();
    await signAction({
      btnCode: '',
      signFun: async () => {
        const res = await _();
        await handleRes(res);
        await close();
        emits('confirm');
      },
    });
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
