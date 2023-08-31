export default (bigFolderName: string) => {
  return `import ModalCom from './modalCom.vue';
import { generatorModal } from 'neo-cmc-components';
import { $t } from '@/locales/index';
import { ${bigFolderName}Props } from './type';

const createTitle = () => {
  return <div>{}</div>;
};

export const showApplyModal = generatorModal<null, ${bigFolderName}Props>(ModalCom, {
  title: createTitle,
  width: '640px',
  showBBtn: true,
});
`;
};
