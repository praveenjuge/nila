import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-us" prefix="og: http://ogp.me/ns#">
        <Head />
        <body className="min-h-screen font-sans antialiased text-gray-900 transition bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
