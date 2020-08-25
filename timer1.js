const getUserInput = () => {
  return process.argv.slice(2);
}

const timer = (args) => {
  const sorted = args.sort((a,b) => {
    return a - b;
  });
  for (item of sorted) {
    num = Number(item);
    if (!isNaN(num) && num > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, num * 1000)
    }
  }
}

timer(getUserInput());