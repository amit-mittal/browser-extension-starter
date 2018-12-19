import * as Sentry from "@sentry/browser";
import { IErrorHandler } from "./interfaces/error-handler.interface";
import { ILocalStorage } from "./interfaces/local-storage.interface";
import { ILogger } from "./interfaces/logger.interface";
import { TYPES } from "./interfaces/types";
import { ApiService } from "./services/api.serive";
import { myContainer } from "./services/chrome/chrome-container";

const logger = myContainer.get<ILogger>(TYPES.ILogger);
logger.info("Hello World!!");

const localStorage = myContainer.get<ILocalStorage>(TYPES.ILocalStorage);
localStorage.set<string>("key1", "value1");

const sentryService = myContainer.get<IErrorHandler>(TYPES.IErrorHandler);

localStorage.get<string>("key1").then(
  result => {
    logger.info("Value1 as " + JSON.stringify(result));
  },
  error => {
    logger.error(error);
  }
);

localStorage.get<string>("key2").then(
  result => {
    logger.info("Value2 as " + JSON.stringify(result));
  },
  error => {
    logger.error(error);
  }
);

const apiService = myContainer.get<ApiService>(TYPES.ApiService);
apiService.getApiCall();

Sentry.init({ dsn: "<DSN>" });

/**
 * To test:
 *    throw new Error("Checking");
 * from main.ts
 */
window.onerror = (message, source, fileNo, columnNumber, error) => {
  logger.error("Inside window.onerror");
  sentryService.captureException(error);

  // The exception is still reported to the user.
};

/**
 * To test:
 *    new Promise((resolve, reject) => reject(new Error("Unhandled error")));
 * from main.ts
 */
window.addEventListener("unhandledrejection", event => {
  logger.error("Inside window.unhandledrejection");
  sentryService.captureException(event.reason);
});
