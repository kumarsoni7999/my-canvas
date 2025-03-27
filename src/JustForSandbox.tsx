import { useEditor } from 'tldraw';
import { useEffect } from 'react';

export function JustForSandbox() {
  const editor = useEditor();

  useEffect(() => {
    const container = editor.getContainer();
    const focusOnPointerDown = () => editor.focus();
    container.addEventListener('pointerdown', focusOnPointerDown);
    return () => {
      container.removeEventListener('pointerdown', focusOnPointerDown);
    };
  }, [editor]);

  return null;
}
