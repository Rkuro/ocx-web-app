import { createLogger, format, transports } from "winston";
import { TransformableInfo } from "logform";

const enumerateErrorFormat = format((info: TransformableInfo) => {
    // @ts-ignore
    if (info.message instanceof Error) {
        info.message = Object.assign(
            {
                message: info.message.message,
                stack: info.message.stack,
            },
            info.message
        );
    }

    if (info instanceof Error) {
        return Object.assign(
            {
                message: info.message,
                stack: info.stack,
            },
            info
        );
    }

    return info;
});

const logger = createLogger({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    format: format.combine(enumerateErrorFormat(), format.json()),
    transports: [new transports.Console()],
});

export default logger;
