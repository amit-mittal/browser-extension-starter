import { ILocalStorage } from "../../interfaces/local-storage.interface";
import { injectable } from "inversify";

@injectable()
export class ChromeLocalStorage implements ILocalStorage {

  get<T>(key: string): Promise<T> {
    return new Promise(function(resolve, reject) {
      chrome.storage.local.get([key], function(result: any) {
        if (result[key]) {
          resolve(result);
        } else {
          reject(new Error(`${key} not found`));
        }
      });
    });
  }

  set<T>(key: string, value: T): void {
    chrome.storage.local.set({[key]: value});
  }
}