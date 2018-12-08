import { myContainer } from "./services/chrome/chrome-container";
import { TYPES } from "./interfaces/types";
import { ILogger } from "./interfaces/logger.interface";

const logger = myContainer.get<ILogger>(TYPES.ILogger);
logger.info("Hello World!!");
