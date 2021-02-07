import { createInterface } from "readline";

import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve: any) => {
    rl.question(">", (answer: string) => {
      const result = runner(answer);

      if (result) {
        console.log(`Answer: ${result}`);
      }

      resolve()
    })
  })

async function app(): Promise<null> {
  while (true) {
    await question()
  }
}

app();