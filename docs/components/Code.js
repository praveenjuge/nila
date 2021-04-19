import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const PreTag = props => {
  return (
    <pre className="p-4 overflow-x-auto font-mono text-sm text-gray-900 bg-gray-100 rounded-b">
      {props.children}
    </pre>
  );
};

const CodeTag = props => {
  return <code>{props.children}</code>;
};

export default function Code(props) {
  return (
    <div className="mb-16 border rounded">
      <h3 className="px-4 pt-3.5 text-sm font-medium text-gray-800">
        {props.title}
      </h3>
      <div className="flex flex-col items-end justify-start px-4 py-4 space-y-2 overflow-x-auto">
        {props.children}
      </div>
      <SyntaxHighlighter
        language="jsx"
        style={style}
        PreTag={PreTag}
        CodeTag={CodeTag}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}
