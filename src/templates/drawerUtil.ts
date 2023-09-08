export default (bigFolderName: string) => {
  return `import ModalCom from './modalCom.vue';
import { generatorDrawer } from 'neo-cmc-components';
import { $t } from '@/locales/index';
import { ${bigFolderName}Props } from './type';

const createTitle = () => {
  return <div>{}</div>;
};

export const show${bigFolderName}Modal = generatorDrawer<null, ${bigFolderName}Props>(ModalCom, {
  title: createTitle,
  width: '640px',
  showBBtn: true,
});
`;
};
