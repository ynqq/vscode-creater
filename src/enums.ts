export const modalCommond = [
  "cmcComponentsCreater.emptyModalFile",
  "cmcComponentsCreater.infoModalFile",
  "cmcComponentsCreater.formModalFile",
  "cmcComponentsCreater.infoFormModalFile",
] as const;
export type TModalCommond = typeof modalCommond[number];

export const drawerCommond = [
    "cmcComponentsCreater.emptyDrawerFile",
    "cmcComponentsCreater.infoDrawerFile",
    "cmcComponentsCreater.formDrawerFile",
    "cmcComponentsCreater.infoFormDrawerFile",
  ] as const;
  export type TDrawerCommond = typeof drawerCommond[number];