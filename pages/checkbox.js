import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Checkbox } from '../dist';

export default function Checkboxs() {
  return (
    <ElementLayout title="Checkbox">
      <Code title="Usage" code="import { Checkbox } from 'nila';" />
      <Code title="Basic" code='<Checkbox label="This is a checkbox" />'>
        <Checkbox label="This is a checkbox" />
      </Code>
      <Code
        title="Colors"
        code='<Checkbox color="text-gray-600" label="Gray Checkbox" />
<Checkbox color="text-red-600" label="Red Checkbox" />
<Checkbox color="text-yellow-600" label="Yellow Checkbox" />
<Checkbox color="text-green-600" label="Green Checkbox" />
<Checkbox color="text-blue-600" label="Blue Checkbox" />
<Checkbox color="text-indigo-600" label="Indigo Checkbox" />
<Checkbox color="text-purple-600" label="Purple Checkbox" />
<Checkbox color="text-pink-600" label="Pink Checkbox" />'
      >
        <Checkbox defaultChecked color="text-gray-600" label="Gray Checkbox" />
        <Checkbox defaultChecked color="text-red-600" label="Red Checkbox" />
        <Checkbox
          defaultChecked
          color="text-yellow-600"
          label="Yellow Checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-green-600"
          label="Green Checkbox"
        />
        <Checkbox defaultChecked color="text-blue-600" label="Blue Checkbox" />
        <Checkbox
          defaultChecked
          color="text-indigo-600"
          label="Indigo Checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-purple-600"
          label="Purple Checkbox"
        />
        <Checkbox defaultChecked color="text-pink-600" label="Pink Checkbox" />
      </Code>
    </ElementLayout>
  );
}
