import HttpHeader = chrome.webRequest.HttpHeader;
import { ILogger } from "../interfaces/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../interfaces/types";

@injectable()
export class HttpService {

  private logger: ILogger;

  public constructor(
    @inject(TYPES.ILogger) chromeLogger: ILogger
  ) {
    this.logger = chromeLogger;
  }

  post(url: string, headers?: HttpHeader[], body?: Object): Promise<any> {
    this.logger.info("Sending post to " + url);
    return this.request("POST", url, headers, body);
  }

  get(url: string): Promise<any> {
    this.logger.info("Sending get to " + url);
    return this.request('get', url);
  }

  private request(method: string, url: string, headers?: HttpHeader[], body?: Object): Promise<any> {
    return new Promise(function (resolve, reject) {

      const request = new XMLHttpRequest();
      request.open(method, url);
      request.withCredentials = true;

      if (headers) {
        headers.forEach(header => {
          request.setRequestHeader(header.name, header.value);
        });
      }

      request.onload = () => {
        try {
          resolve(JSON.parse(request.response));
        } catch {
          reject({
            status: request.status,
            statusText: request.statusText
          });
        }
      };

      request.onerror = function () {
        reject({
          status: request.status,
          statusText: request.statusText
        });
      };

      request.send(JSON.stringify(body));
    });
  }
}