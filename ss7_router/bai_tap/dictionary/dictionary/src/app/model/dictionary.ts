import {IWord} from "../iword";

export class Dictionary implements IWord{
    constructor(
      public word: string,
      public mean: string
    ) {
    }
}
