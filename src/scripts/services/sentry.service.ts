import * as Sentry from "@sentry/browser";
import { injectable } from "inversify";
import { IErrorHandler } from "../interfaces/error-handler.interface";

@injectable()
export class SentryService implements IErrorHandler {
  private client: Sentry.BrowserClient;

  constructor() {
    this.client = new Sentry.BrowserClient({
      dsn: "<DSN>"
    });
  }

  public captureException(exception: any): void {
    this.client.captureException(exception);
  }
}
