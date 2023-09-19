export default (bigFolderName: string) => {
  return `import ModalCom from './modalCom.vue';
import { generatorDrawer, ActionType } from 'neo-cmc-components';
import { $t } from '@/locales/index';
import { ${bigFolderName}Props } from './type';

const createTitle = () => {
  return <div>{}</div>;
};

export const showAdd${bigFolderName}Drawer = (props: OmitRequired<${bigFolderName}Props, 'action'>) => {
  props.action = ActionType.CREATE;
  return generatorDrawer<null, OmitRequired<${bigFolderName}Props, 'action'>>(ModalCom, {
    title: createTitle,
    width: '640px',
    showBBtn: true,
  })(props);
};
`;
};