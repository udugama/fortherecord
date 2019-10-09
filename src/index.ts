import * as readline from 'readline';
import * as orderBy from 'lodash.orderby';
import { isFibonacci } from './lib/fibonacci';

export declare type IEnterdNumbers = Array<any>;

let delay: number = 0;
let enterdNumbers: IEnterdNumbers = [ ];
let timer: any;
let stage: number = 0;

export const getMessage = (stage: number) => {
  let text = '';
  switch (stage) {
    case 0:
      text = 'Please input the number of time in seconds between emitting numbers and their frequency\n';
      break;
    case 1:
      text = 'Please enter the first numbery\n';
      break;
    case 2:
      text = 'Please enter the next number\n';
      break;
    case 3:
      text = '';
      break;
  }

  return text;
}

export const stopApplication = (async() => {
  stopTimer();
  console.log('Thanks for playing, Press any key to exit.');
  return new Promise(resolve => process.stdin.once('data', (data) => {
    process.exit(0);
  }));
})

export const read = (async(stage: number) => {
  let action: boolean = false;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let text = getMessage(stage);

  await rl.question(`>> ${text}`, async(answer: any) => {
    if (stage === 0) {
      delay = parseInt(answer);
      setTimer(enterdNumbers);
    } else {
      // process actions
      if (answer === 'halt') {
        stopTimer();
        console.log('timer halted');
        action = true;
      } else if (answer === 'resume') {
        setTimer(enterdNumbers);
        console.log('timer resumed');
        action = true;
      } else if (answer === 'quit') {
        await stopApplication();
        stage = 3;
        action = true;
      }

      if (isFibonacci(parseInt(answer))) {
        console.log('FIB');
      }

      if (!action) {
        setValues(answer, enterdNumbers);
      }
    }
    rl.close();
    orchestrate();
  });
});

/**
 * I beleive asigning values to the array is performant rather than push 
 * object awway with input values and search every time to update the frequency
 * 
 * @param input 
 */
export const setValues = ((input: number, enterdNumbers: IEnterdNumbers) => {
  const index: string = `number_${input}`;

  const element = (enterdNumbers[index]) ? enterdNumbers[index]+1 : 1;
  enterdNumbers[index] = parseInt(element);
});

export const displayReport = (enterdNumbers: IEnterdNumbers) => {
  let printable: string = '';
  const keys: Array<string> = Object.keys(enterdNumbers);

  const allNumbers = keys.map((key) => {
    const index: string = key.replace('number_', '');

    return { value: index, frequency: enterdNumbers[key] };
  });

  const orderdList = orderBy(allNumbers, 'frequency', 'desc');
  
  orderdList.map(({ value, frequency }) => {
    printable = printable + ` ${value}:${frequency},`;
  });
  
  return `>> ${printable.slice(0, -1)}`;
};

const setTimer = (enterdNumbers) => {
  timer = setInterval(() => {
    console.log(displayReport(enterdNumbers));
  }, (1000 * delay));
}

const stopTimer = () => {
  clearInterval(timer);
}

export const orchestrate = (async(init: boolean = false) => {
  if (stage < 2 && init === false) { stage++; }
  await read(stage);
});

orchestrate(true)
  .catch(() => {
    process.exit(1);
  });
