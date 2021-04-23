import Code from '../components/Code';
import PageHeader from '../components/PageHeader';
import { Alert } from '../../dist';
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';

export default function Alerts() {
  return (
    <>
      <PageHeader title="Alert" />

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
<Alert variant="blue" className="border-l-4">...</Alert>'
      >
        <Alert variant="blue" className="border-l-4">
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
      </Code>

      <Code
        code='{/* Top Border */}
<Alert variant="pink" className="border-t-4">...</Alert>'
      >
        <Alert variant="pink" className="border-t-4">
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
      </Code>

      <Code
        code='{/* With Icon */}
<Alert variant="green" icon><CheckCircleIcon className="flex-shrink-0 w-5 h-5" /><span>...</span></Alert>'
      >
        <Alert variant="green" icon>
          <CheckCircleIcon className="flex-shrink-0 w-5 h-5" />
          <span>
            “There is nothing in the world so irresistibly contagious as
            laughter and good humor.” ― Charles Dickens, A Christmas Carol
          </span>
        </Alert>
      </Code>

      <Code
        code='{/* With Close Button */}
<Alert variant="blue" icon closable><CheckCircleIcon className="flex-shrink-0 w-5 h-5" /><span>...</span></Alert>'
      >
        <Alert variant="blue" icon closable>
          <InformationCircleIcon className="flex-shrink-0 w-5 h-5" />
          <span>
            “Suffering has been stronger than all other teaching, and has taught
            me to understand what your heart used to be. I have been bent and
            broken, but - I hope - into a better shape.” ― Charles Dickens
          </span>
        </Alert>
      </Code>

      <Code
        code='{/* With Link */}
<Alert variant="yellow" icon>
  <XCircleIcon className="flex-shrink-0 w-5 h-5" />
  <div className="flex flex-col justify-between w-full md:items-center md:flex-row">
    <span>...</span>
    <a href="#" className="mt-3 underline md:mt-0">With a link</a>
  </div></Alert>'
      >
        <Alert variant="yellow" icon>
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
<Alert variant="red">...</Alert>
<Alert variant="yellow">...</Alert>
<Alert variant="green">...</Alert>
<Alert variant="blue">...</Alert>
<Alert variant="indigo">...</Alert>
<Alert variant="purple">...</Alert>
<Alert variant="pink">...</Alert>'
      >
        <Alert>
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
        <Alert variant="red">
          “You have been the last dream of my soul.” ― Charles Dickens, A Tale
          of Two Cities
        </Alert>
        <Alert variant="yellow">
          “Never close your lips to those whom you have already opened your
          heart.” ― Charles Dickens
        </Alert>
        <Alert variant="green">
          “There are books of which the backs and covers are by far the best
          parts.” ― Charles Dickens, Oliver Twist
        </Alert>
        <Alert variant="blue">
          “Have a heart that never hardens, and a temper that never tires, and a
          touch that never hurts.” ― Charles Dickens
        </Alert>
        <Alert variant="indigo">
          “It is a far, far better thing that I do, than I have ever done; it is
          a far, far better rest that I go to than I have ever known.” ― Charles
          Dickens
        </Alert>
        <Alert variant="purple">
          “No one is useless in this world who lightens the burdens of another.”
          ― Charles Dickens
        </Alert>
        <Alert variant="pink">
          “And O there are days in this life, worth life and worth death.” ―
          Charles Dickens, Our Mutual Friend
        </Alert>
      </Code>

      <Code
        code='{/* Solid Colors */}
<Alert solid>...</Alert>
<Alert solid variant="red">...</Alert>
<Alert solid variant="yellow">...</Alert>
<Alert solid variant="green">...</Alert>
<Alert solid variant="blue">...</Alert>
<Alert solid variant="indigo">...</Alert>
<Alert solid variant="purple">...</Alert>
<Alert solid variant="pink">...</Alert>'
      >
        <Alert solid>
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
        <Alert solid variant="red">
          “You have been the last dream of my soul.” ― Charles Dickens, A Tale
          of Two Cities
        </Alert>
        <Alert solid variant="yellow">
          “Never close your lips to those whom you have already opened your
          heart.” ― Charles Dickens
        </Alert>
        <Alert solid variant="green">
          “There are books of which the backs and covers are by far the best
          parts.” ― Charles Dickens, Oliver Twist
        </Alert>
        <Alert solid variant="blue">
          “Have a heart that never hardens, and a temper that never tires, and a
          touch that never hurts.” ― Charles Dickens
        </Alert>
        <Alert solid variant="indigo">
          “It is a far, far better thing that I do, than I have ever done; it is
          a far, far better rest that I go to than I have ever known.” ― Charles
          Dickens
        </Alert>
        <Alert solid variant="purple">
          “No one is useless in this world who lightens the burdens of another.”
          ― Charles Dickens
        </Alert>
        <Alert solid variant="pink">
          “And O there are days in this life, worth life and worth death.” ―
          Charles Dickens, Our Mutual Friend
        </Alert>
      </Code>
    </>
  );
}
