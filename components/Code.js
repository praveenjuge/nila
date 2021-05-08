import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import { CheckIcon, DuplicateIcon } from '@heroicons/react/solid';
import { Button } from '../dist';
SyntaxHighlighter.registerLanguage('jsx', jsx);

function useClipboard({ timeout = 1500 } = {}) {
  const [error, setError] = useState();
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = value => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = valueToCopy => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch(err => setError(err));
    } else {
      setError(console.log('Clipboard is not supported'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}

const PreTag = props => {
  return (
    <pre
      className={
        '!my-0 py-4 pl-4 pr-12 md:pr-4 overflow-x-auto font-mono text-sm text-gray-200 bg-gray-800 ' +
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
  else if (router.asPath === '/checkbox')
    return 'flex-col max-w-xs mx-auto !items-start md:px-20 space-y-2';
  else return 'space-x-2 md:justify-center';
};

export default function Code(props) {
  const clipboard = useClipboard();
  const router = useRouter();

  return (
    <div className={props.prose ? '' : 'mb-16'}>
      {props.title && (
        <h2 className="font-bold tracking-tight mb-2.5 text-2xl text-gray-900">
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
            className="absolute top-2 right-2 !px-1.5"
            onClick={() => clipboard.copy(props.code)}
          >
            {clipboard.copied ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <DuplicateIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
