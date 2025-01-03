import useWebSocket from 'react-use-websocket';

export default function useSocketHandler(socketUrl, 
                                        onMessageCallback) {
                                            
    const { sendMessage } = useWebSocket(socketUrl, {
        onMessage: onMessageCallback,
    });

    return { sendMessage };
}