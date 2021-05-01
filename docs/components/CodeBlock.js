import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const PreTag = props => {
  return <pre>{props.children}</pre>;
};

const CodeTag = props => {
  return <code>{props.children}</code>;
};

export default function CodeBlock(props) {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={style}
      PreTag={PreTag}
      CodeTag={CodeTag}
    >
      {props.code}
    </SyntaxHighlighter>
  );
}
