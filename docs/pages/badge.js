import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Badge } from '../../dist';

export default function Badges() {
  return (
    <ElementLayout title="Badge">
      <Code
        code="{/* Basic */}
<Badge>Badge</Badge>
<Badge rounded>Badge</Badge>"
      >
        <Badge>Badge</Badge>
        <Badge rounded>Badge</Badge>
      </Code>

      <Code
        code='{/* Light Colors */}
<Badge>Badge</Badge>
<Badge color="red">Badge</Badge>
<Badge color="yellow">Badge</Badge>
<Badge color="green">Badge</Badge>
<Badge color="blue">Badge</Badge>
<Badge color="indigo">Badge</Badge>
<Badge color="purple">Badge</Badge>
<Badge color="pink">Badge</Badge>'
      >
        <Badge>Badge</Badge>
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="pink">Badge</Badge>
      </Code>

      <Code
        code='{/* Solid Colors */}
<Badge variant="solid">Badge</Badge>
<Badge variant="solid" color="red">Badge</Badge>
<Badge variant="solid" color="yellow">Badge</Badge>
<Badge variant="solid" color="green">Badge</Badge>
<Badge variant="solid" color="blue">Badge</Badge>
<Badge variant="solid" color="indigo">Badge</Badge>
<Badge variant="solid" color="purple">Badge</Badge>
<Badge variant="solid" color="pink">Badge</Badge>'
      >
        <Badge variant="solid">Badge</Badge>
        <Badge variant="solid" color="red">
          Badge
        </Badge>
        <Badge variant="solid" color="yellow">
          Badge
        </Badge>
        <Badge variant="solid" color="green">
          Badge
        </Badge>
        <Badge variant="solid" color="blue">
          Badge
        </Badge>
        <Badge variant="solid" color="indigo">
          Badge
        </Badge>
        <Badge variant="solid" color="purple">
          Badge
        </Badge>
        <Badge variant="solid" color="pink">
          Badge
        </Badge>
      </Code>
    </ElementLayout>
  );
}
