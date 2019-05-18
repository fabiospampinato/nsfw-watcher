
/* IMPORT */

import * as nsfw from 'nsfw';
import * as path from 'path';
import {Event, Options, Handlers, Listener} from './types';

/* WATCHER */

//TODO: Improve "rename" detaction: under macOS sometimes it get detected as "change" + "unlink" or "unlink" + "change"

function watcher ( rootPath: string, options: Options = {}, handlers: Handlers = {} ): Promise<Listener> {

  function handleEvents ( events: Event[] ) {
    for ( let i = 0, l = events.length; i < l; i++ ) {
      const event = events[i];
      if ( event.action === 0 ) { // Add
        if ( handlers.add ) {
          handlers.add ( path.join ( event.directory, event.file ) );
        }
      } else if ( event.action === 1 ) { // Unlink
        if ( handlers.unlink ) {
          handlers.unlink ( path.join ( event.directory, event.file ) );
        }
      } else if ( event.action === 2 ) { // Change
        if ( handlers.change ) {
          handlers.change ( path.join ( event.directory, event.file ) );
        }
      } else if ( event.action === 3 ) { // Rename
        if ( handlers.rename ) {
          handlers.rename ( path.join ( event.directory, event.oldFile ), path.join ( event.directory, event.newFile ) );
        }
      }
    }
  }

  return nsfw ( rootPath, handleEvents, options ).then ( listener => listener.start () && listener );

}

/* EXPORT */

export default watcher;
