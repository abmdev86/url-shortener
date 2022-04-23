import { Logger } from "@firebase/logger";
const logClient = new Logger(`@firebase/LoggerUtil`);

export function logError(e) {
  logClient.debug(e);
  logClient.debug(e.message);
}
export function logger(message) {
  logClient.debug(message);
}
