import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  
  console.log(pageProps.message);
  return <Component {...pageProps} />;
}



App.getInitialProps = async ({Component,ctx}:any) => {
  let pageProps = {
    message:''
  };

  console.log('the component is running every time');

  pageProps.message = "the component is running every time";

  return {pageProps}
}


export default App;

