const files = ["foo.txt", ".bar", "  ", "baz.foo"];
// filePaths = ['~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

// 방법 1 - loop
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();

  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

// 방법 2 - array reduce
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
});

// 방법 3 - method chaining
const filePaths = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~/cool_app/${fileName}`);
