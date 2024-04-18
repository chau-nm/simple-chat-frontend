import { useEffect, type FC } from 'react';
import { socket } from 'socket';

const Hello: FC = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected');
    });
  }, []);

  return <div>Hello</div>;
};

export default Hello;
