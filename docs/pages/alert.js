import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Alert } from '../../dist';
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';

const withIcon = `{/* With Icon */}
<Alert color="green" icon>
  <CheckCircleIcon className="flex-shrink-0 w-5 h-5" />
  <span>...</span>
</Alert>`;

const withCloseIcon = `{/* With Close Button */}
<Alert color="blue" icon closable>
  <CheckCircleIcon className="flex-shrink-0 w-5 h-5" />
  <span>...</span>
</Alert>`;

const withLink = `{/* With Link */}
<Alert color="yellow" icon>
  <XCircleIcon className="flex-shrink-0 w-5 h-5" />
  <div className="flex flex-col justify-between w-full md:items-center md:flex-row">
    <span>...</span>
    <a href="#" className="mt-3 underline md:mt-0">With a link</a>
  </div>
</Alert>`;

export default function Alerts() {
  return (
    <ElementLayout title="Alert">
      <Code
        code="{/* Basic */}
<Alert>I'm an Alert</Alert>"
      >
        <Alert>
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
      </Code>

      <Code
        code='{/* Left Border */}
<Alert color="blue" className="border-l-4">...</Alert>
{/* Top Border */}
<Alert color="pink" className="border-t-4">...</Alert>'
      >
        <Alert color="blue" className="border-l-4">
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
        <Alert color="pink" className="border-t-4">
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
      </Code>

      <Code code={withIcon}>
        <Alert color="green" icon>
          <CheckCircleIcon className="flex-shrink-0 w-5 h-5" />
          <span>
            “There is nothing in the world so irresistibly contagious as
            laughter and good humor.” ― Charles Dickens, A Christmas Carol
          </span>
        </Alert>
      </Code>

      <Code code={withCloseIcon}>
        <Alert color="blue" icon closable>
          <InformationCircleIcon className="flex-shrink-0 w-5 h-5" />
          <span>
            “Suffering has been stronger than all other teaching, and has taught
            me to understand what your heart used to be. I have been bent and
            broken, but - I hope - into a better shape.” ― Charles Dickens
          </span>
        </Alert>
      </Code>

      <Code code={withLink}>
        <Alert color="yellow" icon>
          <XCircleIcon className="flex-shrink-0 w-5 h-5" />
          <div className="flex flex-col justify-between w-full md:items-center md:flex-row">
            <span>
              “You have been the last dream of my soul.” ― Charles Dickens, A
              Tale of Two Cities
            </span>
            <a href="#" className="mt-3 underline md:mt-0">
              With a link
            </a>
          </div>
        </Alert>
      </Code>

      <Code
        code='{/* Light Colors */}
<Alert>...</Alert>
<Alert color="red">...</Alert>
<Alert color="yellow">...</Alert>
<Alert color="green">...</Alert>
<Alert color="blue">...</Alert>
<Alert color="indigo">...</Alert>
<Alert color="purple">...</Alert>
<Alert color="pink">...</Alert>'
      >
        <Alert>
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
        <Alert color="red">
          “You have been the last dream of my soul.” ― Charles Dickens, A Tale
          of Two Cities
        </Alert>
        <Alert color="yellow">
          “Never close your lips to those whom you have already opened your
          heart.” ― Charles Dickens
        </Alert>
        <Alert color="green">
          “There are books of which the backs and covers are by far the best
          parts.” ― Charles Dickens, Oliver Twist
        </Alert>
        <Alert color="blue">
          “Have a heart that never hardens, and a temper that never tires, and a
          touch that never hurts.” ― Charles Dickens
        </Alert>
        <Alert color="indigo">
          “It is a far, far better thing that I do, than I have ever done; it is
          a far, far better rest that I go to than I have ever known.” ― Charles
          Dickens
        </Alert>
        <Alert color="purple">
          “No one is useless in this world who lightens the burdens of another.”
          ― Charles Dickens
        </Alert>
        <Alert color="pink">
          “And O there are days in this life, worth life and worth death.” ―
          Charles Dickens, Our Mutual Friend
        </Alert>
      </Code>

      <Code
        code='{/* Solid Colors */}
<Alert variant="solid">...</Alert>
<Alert variant="solid" color="red">...</Alert>
<Alert variant="solid" color="yellow">...</Alert>
<Alert variant="solid" color="green">...</Alert>
<Alert variant="solid" color="blue">...</Alert>
<Alert variant="solid" color="indigo">...</Alert>
<Alert variant="solid" color="purple">...</Alert>
<Alert variant="solid" color="pink">...</Alert>'
      >
        <Alert variant="solid">
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
        <Alert variant="solid" color="red">
          “You have been the last dream of my soul.” ― Charles Dickens, A Tale
          of Two Cities
        </Alert>
        <Alert variant="solid" color="yellow">
          “Never close your lips to those whom you have already opened your
          heart.” ― Charles Dickens
        </Alert>
        <Alert variant="solid" color="green">
          “There are books of which the backs and covers are by far the best
          parts.” ― Charles Dickens, Oliver Twist
        </Alert>
        <Alert variant="solid" color="blue">
          “Have a heart that never hardens, and a temper that never tires, and a
          touch that never hurts.” ― Charles Dickens
        </Alert>
        <Alert variant="solid" color="indigo">
          “It is a far, far better thing that I do, than I have ever done; it is
          a far, far better rest that I go to than I have ever known.” ― Charles
          Dickens
        </Alert>
        <Alert variant="solid" color="purple">
          “No one is useless in this world who lightens the burdens of another.”
          ― Charles Dickens
        </Alert>
        <Alert variant="solid" color="pink">
          “And O there are days in this life, worth life and worth death.” ―
          Charles Dickens, Our Mutual Friend
        </Alert>
      </Code>
    </ElementLayout>
  );
}
