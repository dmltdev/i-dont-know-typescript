const getInfo = (): string | undefined => {
  if (Math.random() <= 0.5) {
    return '';
  }

  return undefined;
}

const info = getInfo();

// info.slice(); // "info" is possibly "undefined"
info?.slice(); //! Use optional chaining operator (?) to tell TypeScript to only call slice() if "info" is not undefined.