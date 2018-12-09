import { myContainer } from "./services/chrome/chrome-container";
import { TYPES } from "./interfaces/types";
import { ILogger } from "./interfaces/logger.interface";
import { ILocalStorage } from "./interfaces/local-storage.interface";
import { ApiService } from "./services/api.serive";

const logger = myContainer.get<ILogger>(TYPES.ILogger);
logger.info("Hello World!!");

const localStorage = myContainer.get<ILocalStorage>(TYPES.ILocalStorage);
localStorage.set<string>("key1", "value1");

localStorage.get<string>("key1").then(result => {
  logger.info("Value1 as " + JSON.stringify(result));
}, error => {
  logger.error(error);
})

localStorage.get<string>("key2").then(result => {
  logger.info("Value2 as " + JSON.stringify(result));
}, error => {
  logger.error(error);
})

const apiService = myContainer.get<ApiService>(TYPES.ApiService);
apiService.getApiCall();