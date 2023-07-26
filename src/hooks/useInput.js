import { useEffect, useRef } from 'react';

export const useInput = (setActiveAction) => {
  const input = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const keys = {
    ArrowUp: 'forward',
    ArrowDown: 'backward',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
  };

  const findKey = (key) => keys[key];

  const handleKeyUp = (e) => {
    input.current = {
      ...input.current,
      [findKey(e.code)]: false,
    };
    setActiveAction('Idle_Standing');
  };

  const handleKeyDown = (e) => {
    input.current = { ...input.current, [findKey(e.code)]: true };
    if (
      input.current.forward ||
      input.current.backward ||
      input.current.left ||
      input.current.right
    ) {
      setActiveAction('Running');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return input.current;
};
