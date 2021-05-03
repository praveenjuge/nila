import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Checkbox } from '../../dist';

export default function Checkboxs() {
  return (
    <ElementLayout title="Checkbox">
      <Code title="Usage" code="import { Checkbox } from 'nila';" />
      <Code
        title="Basic"
        code='<Checkbox label="I accept the deal" id="basic-checkbox" />'
      >
        <Checkbox label="I accept the deal" id="basic-checkbox" />
      </Code>
      <Code
        title="Colors"
        code='<Checkbox color="text-gray-600" label="Gray Checkbox" id="gray-checkbox" />
<Checkbox color="text-red-600" label="Red Checkbox" id="red-checkbox" />
<Checkbox color="text-yellow-600" label="Yellow Checkbox" id="yellow-checkbox" />
<Checkbox color="text-green-600" label="Green Checkbox" id="green-checkbox" />
<Checkbox color="text-blue-600" label="Blue Checkbox" id="blue-checkbox" />
<Checkbox color="text-indigo-600" label="Indigo Checkbox" id="indigo-checkbox" />
<Checkbox color="text-purple-600" label="Purple Checkbox" id="purple-checkbox" />
<Checkbox color="text-pink-600" label="Pink Checkbox" id="pink-checkbox" />'
      >
        <Checkbox
          defaultChecked
          color="text-gray-600"
          label="Gray Checkbox"
          id="gray-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-red-600"
          label="Red Checkbox"
          id="red-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-yellow-600"
          label="Yellow Checkbox"
          id="yellow-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-green-600"
          label="Green Checkbox"
          id="green-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-blue-600"
          label="Blue Checkbox"
          id="blue-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-indigo-600"
          label="Indigo Checkbox"
          id="indigo-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-purple-600"
          label="Purple Checkbox"
          id="purple-checkbox"
        />
        <Checkbox
          defaultChecked
          color="text-pink-600"
          label="Pink Checkbox"
          id="pink-checkbox"
        />
      </Code>
    </ElementLayout>
  );
}
