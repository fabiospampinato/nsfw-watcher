
/* TYPES */

type EventAdd = {
  action: 0,
  directory: string,
  file: string
};

type EventUnlink = {
  action: 1,
  directory: string,
  file: string
};

type EventChange = {
  action: 2,
  directory: string,
  file: string
};

type EventRename = {
  action: 3,
  directory: string,
  oldFile: string,
  newDirectory: string
  newFile: string
};

type Event = EventAdd | EventUnlink | EventChange | EventRename;

type Options = {
  debounceMS?: number,
  errorCallback?: Function
};

type Handlers = {
  add?: ( filePath: string ) => void,
  unlink?: ( filePath: string ) => void,
  change?: ( filePath: string ) => void,
  rename?: ( prevFilePath: string, nextFilePath: string ) => void
};

type Listener = {
  start (): Promise<void>,
  stop (): Promise<void>
};
