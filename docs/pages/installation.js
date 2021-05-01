import CodeBlock from '../components/CodeBlock';
import ProseLayout from '../components/ProseLayout';

const tailwindConfig = `// tailwind.config.js
module.exports = {
  purge: [
    // ...
    './node_modules/nila/src/*.tsx',
  ],
};`;

const importButton = `import { Button } from 'nila'; 
// ... 
return <Button>Button</Button>`;

export default function Installation() {
  return (
    <ProseLayout title="Installation">
      <p>
        First make sure you have installed Tailwind in your project. Learn how
        to install {''}
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noreferrer"
        >
          tailwind here
        </a>
        . After installing tailwind, you can continue to install nila, run the
        following:
      </p>

      <CodeBlock
        code="npm install nila
// or using yarn 
yarn add nila"
      />

      <p>This will install nila in your project.</p>

      <p>
        As nila uses tailwind to style the elements your tailwind config needs
        to know nila's files so that it can do proper purging and jit support.
      </p>

      <p>
        Add this in your <code>tailwind.config.js</code>:
      </p>

      <CodeBlock code={tailwindConfig} />

      <p>
        Now nila would fully work in your react projects. Let's test it by
        importing a basic button:
      </p>

      <CodeBlock code={importButton} />
    </ProseLayout>
  );
}
