import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MessageProvider } from '../contexts/MessageContext';
import StatusBar from '../components/StatusBar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MessageProvider>
          <Component {...pageProps} />
          <StatusBar />
        </MessageProvider>
    );
}

export default MyApp;