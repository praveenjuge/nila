import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Select } from '../../dist';

const basicSelect = `{/* Basic */}
<Select label="How are you?" id="basic-select">
  <option>Good</option>
  <option>Great</option>
  <option>Amazing</option>
  <option>Awesome</option>
</Select>`

export default function Selects() {
  return (
    <ElementLayout title="Select">
      <Code
        code={basicSelect}
      >
        <Select label="How are you?" id="basic-select">
          <option>Good</option>
          <option>Great</option>
          <option>Amazing</option>
          <option>Awesome</option>
        </Select>
      </Code>
    </ElementLayout>
  );
}
