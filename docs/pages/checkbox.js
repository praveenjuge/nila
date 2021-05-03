import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Checkbox } from '../../dist';

export default function Checkboxs() {
  return (
    <ElementLayout title="Checkbox">
      <Code title="Usage" code="import { Checkbox } from 'nila';" />
      <Code
        title="Basic"
        code='<Checkbox label="I accept the deal." id="basic-checkbox" />'
      >
        <Checkbox label="I accept the deal." id="basic-checkbox" />
      </Code>
    </ElementLayout>
  );
}
