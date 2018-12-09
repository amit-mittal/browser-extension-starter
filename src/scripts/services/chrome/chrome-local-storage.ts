import { injectable } from "inversify";
import { ILocalStorage } from "../../interfaces/local-storage.interface";

@injectable()
export class ChromeLocalStorage implements ILocalStorage {
  public get<T>(key: string): Promise<T> {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get([key], (result: any) => {
        if (result[key]) {
          resolve(result);
        } else {
          reject(new Error(`${key} not found`));
        }
      });
    });
  }

  public set<T>(key: string, value: T): void {
    chrome.storage.local.set({ [key]: value });
  }
}
