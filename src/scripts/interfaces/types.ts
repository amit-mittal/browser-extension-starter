const TYPES = {
  ApiService: Symbol.for("ApiService"),
  HttpService: Symbol.for("HttpService"),

  IErrorHandler: Symbol.for("IErrorHandler"),
  ILocalStorage: Symbol.for("ILocalStorage"),
  ILogger: Symbol.for("ILogger")
};

export { TYPES };
