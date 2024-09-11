import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ComponentType } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "@/store";
import { clusterApiUrl } from "@solana/web3.js";
import { ToastContainer } from 'react-toastify';
interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => <>{children}</>;

interface MyAppProps extends AppProps {
  Component: ComponentType & {
    Layout?: React.ComponentType<LayoutProps>;
  };
}

const App: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl('devnet')
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new TorusWalletAdapter()
  ], [network]);
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
          </Provider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  );
};

export default App;