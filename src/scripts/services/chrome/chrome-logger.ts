import { injectable } from "inversify";
import "reflect-metadata";
import { ILogger } from "../../interfaces/logger.interface";

@injectable()
export class ChromeLogger implements ILogger {
  info(message: any): void {
    this.write("INFO", message);
  }

  error(message: any): void {
    this.write("ERROR", message);
  }

  private write(prefix: string, message: any): void {
    const date = new Date();
    const line: string = `${date.toTimeString().slice(0, 8)}:${date.getMilliseconds()}|${prefix}|${message}`;

    chrome.extension.getBackgroundPage().console.log(line);
  }
}