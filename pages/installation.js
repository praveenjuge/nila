import Code from '../components/Code';
import ElementLayout from '../components/ElementLayout';

const tailwindConfig = `// tailwind.config.js
module.exports = {
  purge: [
    './node_modules/nila/src/*.tsx',
    // ...
  ],
};`;

const formConfig = `// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}`;

const interConfig = `// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        '.font-feature-alt': { 'font-feature-settings': '"salt"' },
      });
    }),
  ],
};`;

export default function Installation() {
  return (
    <ElementLayout title="Installation" prose>
      <p>
        First make sure you have installed Tailwind in your project. Learn how
        to install {''}
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noreferrer noopener"
        >
          tailwind here
        </a>
        . After installing tailwind, you can continue to install nila, run the
        following:
      </p>
      <Code
        prose
        code="// Using npm
npm install nila
// Using yarn
yarn add nila"
      />
      <h2>JIT and Purge Support</h2>
      <p>
        As nila uses tailwind to style the elements your tailwind config needs
        to know nila's files so that it can do proper purging and jit support.
        Add this in your <code>tailwind.config.js</code> file:
      </p>
      <Code prose code={tailwindConfig} />
      <h2>Forms Plugin</h2>
      <p>
        For form elements to work properly we need to install{' '}
        <code>@tailwindcss/forms</code> plugin too. It is a plugin that provides
        a basic reset for form styles that makes form elements easy to override
        with utilities.
      </p>
      <p>Install the plugin from npm:</p>
      <Code
        prose
        code="// Using npm
npm install @tailwindcss/forms
// Using yarn
yarn add @tailwindcss/forms"
      />
      <p>
        Then add the plugin to your <code>tailwind.config.js</code> file:
      </p>
      <Code prose code={formConfig} />
      <p>That's all ???</p>
      <h2>Optional: Fonts and Base Class</h2>
      <p>
        We use Inter font in this docs site, to use it you can add the following
        to the <code>head</code> tag:
      </p>
      <Code
        prose
        code='<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />'
      />
      <p>
        and in your <code>tailwind.config.js</code> file:
      </p>
      <Code prose code={interConfig} />
      <p>
        For better base styling you can add the following in your body class:
      </p>
      <Code
        prose
        code='<body className="min-h-screen font-sans font-feature-alt antialiased transition bg-white text-gray-900">'
      />
    </ElementLayout>
  );
}
