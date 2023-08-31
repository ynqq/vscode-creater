import * as vscode from "vscode";
import { readdirSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  genEmptyModal,
  genFormModal,
  genInfoFormModal,
  genInfoModal,
} from "./templates/modal";
import {
  genEmptyDrawer,
  genFormDrawer,
  genInfoDrawer,
  genInfoFormDrawer,
} from "./templates/drawer";
import genType from "./templates/type";
import genModalUtil from "./templates/modalUtil";
import genDrawerUtil from "./templates/drawerUtil";
import { TDrawerCommond, TModalCommond } from "./enums";

export const getFolderName = async (uri: vscode.Uri) => {
  const folders = readdirSync(uri.fsPath);
  const res = await vscode.window.showInputBox({
    title: "请输入文件夹名称",
  });
  if (folders.includes(res!)) {
    vscode.window.showErrorMessage(`已存在${res}文件夹!`);
    return null;
  }
  if (res !== "") {
    return res;
  }
  return null;
};
export const generateModal = async (
  uri: vscode.Uri,
  folderName: string,
  commondType: TModalCommond | TDrawerCommond,
  comType: "drawer" | "modal"
) => {
  const folderPath = join(uri.fsPath, folderName);
  const [f, ...o] = folderName.split("");
  const bigFolderName = f.toLocaleUpperCase() + o.join("");
  await mkdirSync(folderPath);
  let str: string = "";
  if (comType === "modal") {
    switch (commondType) {
      case "cmcComponentsCreater.emptyModalFile":
        str = genEmptyModal(bigFolderName);
        break;

      case "cmcComponentsCreater.infoModalFile":
        str = genInfoModal(bigFolderName);
        break;

      case "cmcComponentsCreater.formModalFile":
        str = genFormModal(bigFolderName);
        break;

      case "cmcComponentsCreater.infoFormModalFile":
        str = genInfoFormModal(bigFolderName);
        break;

      default:
        break;
    }
  } else if (comType === "drawer") {
    switch (commondType) {
      case "cmcComponentsCreater.emptyDrawerFile":
        str = genEmptyDrawer(bigFolderName);
        break;

      case "cmcComponentsCreater.infoDrawerFile":
        str = genInfoDrawer(bigFolderName);
        break;

      case "cmcComponentsCreater.formDrawerFile":
        str = genFormDrawer(bigFolderName);
        break;

      case "cmcComponentsCreater.infoFormDrawerFile":
        str = genInfoFormDrawer(bigFolderName);
        break;

      default:
        break;
    }
  }
  await writeFileSync(join(folderPath, "modalCom.vue"), str);
  await writeFileSync(join(folderPath, "type.ts"), genType(bigFolderName));
  if (comType === "modal") {
    await writeFileSync(
      join(folderPath, `index.tsx`),
      genModalUtil(bigFolderName)
    );
  } else if (comType === "drawer") {
    await writeFileSync(
      join(folderPath, `index.tsx`),
      genDrawerUtil(bigFolderName)
    );
  }
};
