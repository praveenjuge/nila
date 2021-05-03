import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import { Button } from '../../dist';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const PreTag = props => {
  return (
    <pre
      className={
        '!my-0 p-4 overflow-x-auto font-mono text-sm text-gray-200 bg-gray-800 ' +
        (props.preview ? 'rounded-b' : 'rounded')
      }
    >
      {props.children}
    </pre>
  );
};

const CodeTag = props => {
  return <code>{props.children}</code>;
};

const getClassName = router => {
  if (router.asPath === '/alert') return 'flex-col space-y-2';
  else if (router.asPath === '/input' || router.asPath === '/select')
    return 'flex-col max-w-md mx-auto !items-start';
  else return 'space-x-2 md:justify-center';
};

export default function Code(props) {
  const [copySuccess, setCopySuccess] = useState('Copy');
  const textAreaRef = useRef(null);
  const router = useRouter();

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
    setTimeout(function() {
      setCopySuccess('Copy');
    }, 1500);
  }

  return (
    <div className={props.prose ? '' : 'mb-16'}>
      {props.title && (
        <h2 className="font-bold tracking-tight mb-2.5 text-xl text-gray-900">
          {props.title}
        </h2>
      )}
      <div className="border bg-white rounded">
        {props.children && (
          <div
            className={
              'flex items-end justify-start px-4 py-4 overflow-x-auto rounded ' +
              getClassName(router)
            }
          >
            {props.children}
          </div>
        )}
        <div className="relative">
          <SyntaxHighlighter
            language="jsx"
            style={style}
            PreTag={PreTag}
            CodeTag={CodeTag}
            title={props.title}
            preview={props.children}
          >
            {props.code}
          </SyntaxHighlighter>
          <Button
            size="xs"
            color="gray"
            className="absolute top-2 right-2"
            onClick={copyToClipboard}
          >
            {copySuccess}
          </Button>
          <textarea
            readOnly
            className="sr-only"
            ref={textAreaRef}
            value={props.code}
          />
        </div>
      </div>
    </div>
  );
}
