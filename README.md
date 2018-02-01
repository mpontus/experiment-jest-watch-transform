# Experiment: Jest watch transform files

> Experiment with Jest watching transformed files

Ordinarily when jest is invoked with `--watch` option, the test run will trigger when any of the required files change.

As this example demonstrates, the expected behavior fails when custom transform script is used on the required file with the extension other than `.js` or `.json`.

## Install

```
git clone https://github.com/mpontus/experiment-jest-watch-transform
cd experiment-jest-watch-transform
npm install
```

## Usage

Run

```
npm run jest -- --watchAll
```

Modify [banner.txt](banner.txt) file and observe that the test will not be restarted. 
