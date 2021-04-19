import Code from '../components/Code';
import PageHeader from '../components/PageHeader';
import { Alert } from '../../dist';

export default function Alerts() {
  return (
    <>
      <PageHeader title="Alert" />

      <Code title="Basic" code="<Alert>I'm an Alert</Alert>">
        <Alert>
          “There is nothing in the world so irresistibly contagious as laughter
          and good humor.” ― Charles Dickens, A Christmas Carol
        </Alert>
      </Code>

      <Code
        title="Light Colors"
        code='<Alert>...</Alert>
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
        title="Solid Colors"
        code='<Alert solid>...</Alert>
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
