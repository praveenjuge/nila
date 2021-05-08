import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Select } from '../dist';

const basicSelect = `<Select
  label="How are you?"
  placeholder="Select one"
  data={[
    { value: 'good', label: 'Good' },
    { value: 'great', label: 'Great' },
    { value: 'amazing', label: 'Amazing', disabled: true },
    { value: 'awesome', label: 'Awesome' },
  ]}
/>`;

export default function Selects() {
  return (
    <ElementLayout title="Select">
      <Code title="Usage" code="import { Select } from 'nila';" />
      <Code title="Basic" code={basicSelect}>
        <Select
          label="How are you?"
          placeholder="Select one"
          data={[
            { value: 'good', label: 'Good' },
            { value: 'great', label: 'Great' },
            { value: 'amazing', label: 'Amazing', disabled: true },
            { value: 'awesome', label: 'Awesome' },
          ]}
        />
      </Code>
    </ElementLayout>
  );
}
