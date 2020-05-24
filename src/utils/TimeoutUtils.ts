// default between 0 and 1 seconds

export const runFunctionsOnTimeout = (
    functionToRun: Function,
    iPointFunction: Function
): void => {
    const start = 0;
    const end = 1000;

    for (let i: number = start; i < end; i++) {
        if (iPointFunction(i)) setTimeout(functionToRun(), i);
    }
};
