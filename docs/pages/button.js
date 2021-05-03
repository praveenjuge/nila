import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Button } from '../../dist';

export default function Buttons() {
  return (
    <ElementLayout title="Button">
      <Code title="Usage" code="import { Button } from 'nila';" />
      <Code title="Basic" code="<Button>Button</Button>">
        <Button>Button</Button>
      </Code>

      <Code
        title="Sizes"
        code='<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button>Base</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>'
      >
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button>Base</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </Code>

      <Code
        title="Solid Variant"
        code='<Button color="gray">Button</Button>
<Button color="red">Button</Button>
<Button color="yellow">Button</Button>
<Button color="green">Button</Button>
<Button color="blue">Button</Button>
<Button color="indigo">Button</Button>
<Button color="purple">Button</Button>
<Button color="pink">Button</Button>'
      >
        <Button color="gray">Button</Button>
        <Button color="red">Button</Button>
        <Button color="yellow">Button</Button>
        <Button color="green">Button</Button>
        <Button color="blue">Button</Button>
        <Button color="indigo">Button</Button>
        <Button color="purple">Button</Button>
        <Button color="pink">Button</Button>
      </Code>

      <Code
        title="Light Variant"
        code='<Button variant="light">Button</Button>
<Button variant="light" color="red">Button</Button>
<Button variant="light" color="yellow">Button</Button>
<Button variant="light" color="green">Button</Button>
<Button variant="light" color="blue">Button</Button>
<Button variant="light" color="indigo">Button</Button>
<Button variant="light" color="purple">Button</Button>
<Button variant="light" color="pink">Button</Button>'
      >
        <Button variant="light">Button</Button>
        <Button variant="light" color="red">
          Button
        </Button>
        <Button variant="light" color="yellow">
          Button
        </Button>
        <Button variant="light" color="green">
          Button
        </Button>
        <Button variant="light" color="blue">
          Button
        </Button>
        <Button variant="light" color="indigo">
          Button
        </Button>
        <Button variant="light" color="purple">
          Button
        </Button>
        <Button variant="light" color="pink">
          Button
        </Button>
      </Code>

      <Code
        title="Outline Variant"
        code='<Button variant="outline">Button</Button>
<Button variant="outline" color="red">Button</Button>
<Button variant="outline" color="yellow">Button</Button>
<Button variant="outline" color="green">Button</Button>
<Button variant="outline" color="blue">Button</Button>
<Button variant="outline" color="indigo">Button</Button>
<Button variant="outline" color="purple">Button</Button>
<Button variant="outline" color="pink">Button</Button>'
      >
        <Button variant="outline">Button</Button>
        <Button variant="outline" color="red">
          Button
        </Button>
        <Button variant="outline" color="yellow">
          Button
        </Button>
        <Button variant="outline" color="green">
          Button
        </Button>
        <Button variant="outline" color="blue">
          Button
        </Button>
        <Button variant="outline" color="indigo">
          Button
        </Button>
        <Button variant="outline" color="purple">
          Button
        </Button>
        <Button variant="outline" color="pink">
          Button
        </Button>
      </Code>
    </ElementLayout>
  );
}
