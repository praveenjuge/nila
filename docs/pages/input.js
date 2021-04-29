import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Input } from '../../dist';

export default function Inputs() {
  return (
    <ElementLayout title="Input">
      <Code
        code='{/* Basic */}
<Input label="Your Name" id="basic-input" />'
      >
        <Input label="Your Name" id="basic-input" />
      </Code>
    </ElementLayout>
  );
}
