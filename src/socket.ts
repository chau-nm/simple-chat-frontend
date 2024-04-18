import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:8080';

// define socket io
export const socket = io(SOCKET_URL);
