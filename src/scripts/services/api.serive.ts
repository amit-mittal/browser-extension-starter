import { injectable, inject } from "inversify";
import { ILogger } from "../interfaces/logger.interface";
import { TYPES } from "../interfaces/types";
import { HttpService } from "./http.service";

@injectable()
export class ApiService {

  private logger: ILogger;
  private httpService: HttpService;

  public constructor(
    @inject(TYPES.ILogger) logger: ILogger,
    @inject(TYPES.HttpService) httpService: HttpService
  ) {
    this.logger = logger;
    this.httpService = httpService;
  }

  public getApiCall(): void {
    this.logger.info("Fetching data from Google!!");
    this.httpService.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
      this.logger.info(JSON.stringify(response));
    }, error => {
      this.logger.error(JSON.stringify(error));
    });
  }
}