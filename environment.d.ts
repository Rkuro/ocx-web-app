import * as ts from 'typescript';
declare global {
    namespace NodeJS
    {

        // Merge the existing `ProcessEnv` definition with ours
        // https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
        export interface ProcessEnv
        {
            API_ENDPOINT_URL: string
        }
    }
}