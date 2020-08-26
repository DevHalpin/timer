const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
const interactiveTimer = () => {
  stdin.on('data', (key) => {

    switch(key) {
      case '\u0003': {
        process.stdout.write("\nThanks for using me, ciao!\n")
        process.exit();
        break;
      }
      case 'b' : {
        process.stdout.write('\x07');
        break;
      }
      case '1' : {
        setTimeout(() => {process.stdout.write('\x07')}, 1000)
        break;
      }
      case '2' : {
        setTimeout(() => {process.stdout.write('\x07')}, 2000)
        break;
      }
      case '3' : {
        setTimeout(() => {process.stdout.write('\x07')}, 3000)
        break;
      }
      case '4' : {
        setTimeout(() => {process.stdout.write('\x07')}, 4000)
        break;
      }
      case '5' : {
        setTimeout(() => {process.stdout.write('\x07')}, 5000)
        break;
      }
      case  '6' : {
        setTimeout(() => {process.stdout.write('\x07')}, 6000)
        break;
      }
      case '7' : {
        setTimeout(() => {process.stdout.write('\x07')}, 7000)
        break;
      }
      case '8' : {
        setTimeout(() => {process.stdout.write('\x07')}, 8000)
        break;
      }
      case '9' : {
        setTimeout(() => {process.stdout.write('\x07')}, 9000)
        break;
      }
      default: {
        console.log('Invalid Key! Press b to beep immediately, 1-9 to beep after certain number of seconds or ctrl + c to quit')
      }
    }
  });
};

interactiveTimer();