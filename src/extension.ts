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
            generateModal(uri, folderName, commond, "modal");
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
            generateModal(uri, folderName, commond, "drawer");
          }
        } catch (error) {
          console.log(error);
        }
      })
    );
  });
  vscode.commands.registerCommand(
    "copy.fileNameAndSuffix",
    (uri: vscode.Uri) => {
      const allName = uri.fsPath.split("\\").pop();
      if (allName) {
        vscode.env.clipboard.writeText(allName);
        vscode.window.showInformationMessage(`${allName}复制成功`);
      }
    }
  );
  vscode.commands.registerCommand("copy.fileName", (uri: vscode.Uri) => {
    const allName = uri.fsPath.split("\\").pop();
    if (allName) {
      const [name] = allName.split(".");
      vscode.env.clipboard.writeText(name);
      vscode.window.showInformationMessage(`${name}复制成功`);
    }
  });
  vscode.commands.registerCommand("copy.folderName", (uri: vscode.Uri) => {
    const allName = uri.fsPath.split("\\").pop();
    if (allName) {
      vscode.env.clipboard.writeText(allName);
      vscode.window.showInformationMessage(`${allName}复制成功`);
    }
  });
}

export function deactivate() {}

