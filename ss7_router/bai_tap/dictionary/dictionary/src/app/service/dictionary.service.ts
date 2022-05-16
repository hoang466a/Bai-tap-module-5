import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Dictionary[] = [
    new Dictionary('cat', 'mèo'),
    new Dictionary('dog', 'chó'),
    new Dictionary('car', 'xe'),
    new Dictionary('table', 'bảng'),
    new Dictionary('motocycle', 'xe máy'),
    new Dictionary('smartphone', 'điện thoại thông minh'),
    new Dictionary('diamond', 'kim cương'),
    new Dictionary('book', 'sách'),
    new Dictionary('fan', 'quạt'),
    new Dictionary('phone', 'điện thoại thông minh')]

  getAll() {
    return this.dictionaryList;
  }

  // @ts-ignore
  findByWord(word: string | null) {
    let dictionaryList: Dictionary[];
    dictionaryList = this.getAll();
    for (var i = 0; i < dictionaryList.length; i++) {
      if (dictionaryList[i].word === word) {
        return dictionaryList[i];
      }
    }

  }

  translate(word: string) {
    // @ts-ignore
    let mean: string = this.findByWord(word).mean;
    if (mean != null)
      return mean;
    else
      return "Không tìm thấy từ cần tra!";
  }

  constructor() {
  }
}
