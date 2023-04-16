export function timeout() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error('Random Error'));
      }
    }, 300);
  });
}
