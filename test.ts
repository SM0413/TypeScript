type Words = { [key: string]: string };

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.getTerm()] === undefined) {
      this.words[word.getTerm()] = word.getDef();
    } else {
      console.log(`This term(${word.getTerm()}) is already exist.`);
    }
  }

  def(term: string) {
    return this.words[term];
  }

  del(word: string | Word) {
    let term: string;
    if (typeof word === "string") {
      term = word;
    } else {
      term = word.getTerm();
    }
    if (this.words[term] !== undefined) {
      delete this.words[term];
    } else {
      console.log(`This term(${term}) is not exist.`);
    }
  }

  update(arg1, arg2?: string) {
    let term: string, def: string;
    if (arg2) {
      term = arg1;
      def = arg2;
    } else {
      term = arg1.getTerm();
      def = arg1.getDef();
    }

    this.words[term] = def;
  }

  print() {
    console.log(this.words);
  }
}

class Word {
  constructor(private term: string, private def: string) {}
  getTerm = () => this.term;
  getDef = () => this.def;
  addDef(extraDef: string) {
    this.def = `${this.def}, ${extraDef}`;
  }
  updateDef(newDef: string) {
    this.def = newDef;
  }
  print() {
    console.log(`${this.term}: ${this.def}`);
  }
}

const dict = new Dict();

const kimchi = new Word("kimchi", "김치");
const cider = new Word("cider", "사이다");

dict.add(kimchi);
dict.add(cider);

kimchi.updateDef("한국의 음식, 김치");
kimchi.print();

cider.addDef("탄산음료");
cider.print();

dict.update(kimchi);
dict.update(cider);
dict.del("cider");
dict.del(kimchi);

dict.print();

const light = new Word("light", "빛");
dict.add(light);
dict.print();
