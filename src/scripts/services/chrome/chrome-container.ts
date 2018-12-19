import { Container } from "inversify";
import { IErrorHandler } from "../../interfaces/error-handler.interface";
import { ILocalStorage } from "../../interfaces/local-storage.interface";
import { ILogger } from "../../interfaces/logger.interface";
import { TYPES } from "../../interfaces/types";
import { ApiService } from "../api.serive";
import { HttpService } from "../http.service";
import { SentryService } from "../sentry.service";
import { ChromeLocalStorage } from "./chrome-local-storage";
import { ChromeLogger } from "./chrome-logger";

const myContainer = new Container();
myContainer.bind<ILogger>(TYPES.ILogger).to(ChromeLogger);
myContainer.bind<ILocalStorage>(TYPES.ILocalStorage).to(ChromeLocalStorage);
myContainer.bind<IErrorHandler>(TYPES.IErrorHandler).to(SentryService);

myContainer.bind<HttpService>(TYPES.HttpService).to(HttpService);
myContainer.bind<ApiService>(TYPES.ApiService).to(ApiService);

export { myContainer };
