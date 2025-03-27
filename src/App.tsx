import { Tldraw } from 'tldraw';
import { JustForSandbox } from './JustForSandbox';
import 'tldraw/tldraw.css';
import './styles.css';

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw autoFocus={false}>
        <JustForSandbox /> {/* [1] */}
      </Tldraw>
    </div>
  );
}

/*
Notes 
-----

[1]
By default the editor will "steal" focus from the sandbox's text editor
whenever it reloads. We've turned that off with autoFocus={false}... but have 
also included this little extra component to focus the editor again when  
the user clicks on it. 
*/
