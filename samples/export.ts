export const numberRegexp : RegExp

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export namespace Hoge {
    export class Fuga {
        name: string
    }
}

declare namespace PIXI {
    const VERSION: string;
}

declare module "pixi.js" {
    export = PIXI;
}





// declare let $: JQuery;
// export default $;


