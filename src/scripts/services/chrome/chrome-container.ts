import { Container } from "inversify";
import { TYPES } from "../../interfaces/types";
import { ILogger } from "../../interfaces/logger.interface";
import { ChromeLogger } from "./chrome-logger";
import { HttpService } from "../http.service";
import { ILocalStorage } from "../../interfaces/local-storage.interface";
import { ChromeLocalStorage } from "./chrome-local-storage";
import { ApiService } from "../api.serive";

const myContainer = new Container();
myContainer.bind<ILogger>(TYPES.ILogger).to(ChromeLogger);
myContainer.bind<ILocalStorage>(TYPES.ILocalStorage).to(ChromeLocalStorage);

myContainer.bind<HttpService>(TYPES.HttpService).to(HttpService);
myContainer.bind<ApiService>(TYPES.ApiService).to(ApiService);

export { myContainer };