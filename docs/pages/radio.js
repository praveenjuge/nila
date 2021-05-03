import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Radio } from '../../dist';

export default function Radios() {
  return (
    <ElementLayout title="Radio">
      <Code title="Usage" code="import { Radio } from 'nila';" />
      <Code
        title="Basic"
        code='<Radio label="I accept the deal." id="basic-radio" />'
      >
        <Radio label="I accept the deal." id="basic-radio" />
      </Code>
    </ElementLayout>
  );
}
