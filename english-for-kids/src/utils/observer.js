class Test {
  constructor() {
    const div = document.createElement('div');
    div.innerText = 'test';
    div.onclick = () => {
      this.dispatch();
    };
    document.body.appendChild(div);
    this.arr = [];
    this.eventCollection = [
      {
        name: name,
        func: () => {
          // Your func here
        },
      },
    ];
  }

  add(string, func) {
    this.arr.push(func);
  }

  remove(func) {
    const ind = this.arr.indexOf(func);
    if (ind !== -1) {
      this.arr.splice(ind, 1);
    }
  }

  dispatch(string, funcParam) {
    this.arr.forEach((elem) => {
      elem(funcParam);
    })
  }
}

const test = new Test();
test.add('', () => {
  console.log('121212');
});
