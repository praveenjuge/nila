import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Radio } from '../../dist';

export default function Radios() {
  return (
    <ElementLayout title="Radio">
      <Code
        code='{/* Basic */}
<Radio label="I accept the deal." id="basic-radio" />'
      >
        <Radio label="I accept the deal." id="basic-radio" />
      </Code>
    </ElementLayout>
  );
}
