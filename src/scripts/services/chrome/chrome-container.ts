import { Container } from "inversify";
import { TYPES } from "../../interfaces/types";
import { ILogger } from "../../interfaces/logger.interface";
import { ChromeLogger } from "./chrome-logger";
import { HttpService } from "../http.service";
import { ILocalStorage } from "../../interfaces/local-storage.interface";
import { ChromeLocalStorage } from "./chrome-local-storage";

const myContainer = new Container();
myContainer.bind<ILogger>(TYPES.ILogger).to(ChromeLogger);
myContainer.bind<HttpService>(TYPES.HttpService).to(HttpService);
myContainer.bind<ILocalStorage>(TYPES.ILocalStorage).to(ChromeLocalStorage);

export { myContainer };