# NSFW Watcher

File system watcher based on [`NSFW`](https://github.com/Axosoft/nsfw) that emits add/change/rename/unlink events.

## Install

```sh
npm install --save nsfw-watcher
```

## API

This library provides the following interface:

```ts
type Options = {
  debounceMS?: number,
  errorCallback?: Function
};

type Handlers = {
  add?: ( filePath: string ) => void,
  change?: ( filePath: string ) => void,
  rename?: ( prevFilePath: string, nextFilePath: string ) => void,
  unlink?: ( filePath: string ) => void
};

type Listener = {
  start (): Promise<void>,
  stop (): Promise<void>
};

function watcher ( path: string, options: Options, handlers: Handlers ): Promise<Listener>;
```

## Usage

```ts
import watcher from 'nsfw-watcher';

const handlers = {
  add ( filePath ) { /* ... */ },
  change ( filePath ) { /* ... */ },
  rename ( prevFilePath, nextFilePath ) { /* ... */ },
  unlink ( filePath ) { /* ... */ }
};

watcher ( '/Users/fabio/Desktop', {}, handlers );
```

## License

MIT © Fabio Spampinato
