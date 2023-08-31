import * as vscode from "vscode";
import { generateModal, getFolderName } from "./generator";
import { drawerCommond, modalCommond } from "./enums";

export function activate(context: vscode.ExtensionContext) {
  modalCommond.forEach((commond) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(commond, async (uri: vscode.Uri) => {
        try {
          const folderName = await getFolderName(uri);
          if (folderName) {
            generateModal(uri, folderName, commond, 'modal');
          }
        } catch (error) {
          console.log(error);
        }
      })
    );
  });
  drawerCommond.forEach((commond) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(commond, async (uri: vscode.Uri) => {
        try {
          const folderName = await getFolderName(uri);
          if (folderName) {
            generateModal(uri, folderName, commond, 'drawer');
          }
        } catch (error) {
          console.log(error);
        }
      })
    );
  });
}

export function deactivate() {}

