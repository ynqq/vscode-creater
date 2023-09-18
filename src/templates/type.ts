export default (bigFolderName: string) => {
  return `import { ActionType, ActionEnum } from 'neo-cmc-components';

export interface ${bigFolderName}Props {
  action: ActionType | ActionEnum;
}
`;
};
