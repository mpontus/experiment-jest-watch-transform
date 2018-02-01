// Transform script that allows to import .txt files as string

module.exports = {
  process: src => `
module.exports = ${JSON.stringify(src)};
`
}