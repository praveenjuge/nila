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
<Badge variant="red">Badge</Badge>
<Badge variant="yellow">Badge</Badge>
<Badge variant="green">Badge</Badge>
<Badge variant="blue">Badge</Badge>
<Badge variant="indigo">Badge</Badge>
<Badge variant="purple">Badge</Badge>
<Badge variant="pink">Badge</Badge>'
      >
        <Badge>Badge</Badge>
        <Badge variant="red">Badge</Badge>
        <Badge variant="yellow">Badge</Badge>
        <Badge variant="green">Badge</Badge>
        <Badge variant="blue">Badge</Badge>
        <Badge variant="indigo">Badge</Badge>
        <Badge variant="purple">Badge</Badge>
        <Badge variant="pink">Badge</Badge>
      </Code>

      <Code
        code='{/* Solid Colors */}
<Badge solid>Badge</Badge>
<Badge solid variant="red">Badge</Badge>
<Badge solid variant="yellow">Badge</Badge>
<Badge solid variant="green">Badge</Badge>
<Badge solid variant="blue">Badge</Badge>
<Badge solid variant="indigo">Badge</Badge>
<Badge solid variant="purple">Badge</Badge>
<Badge solid variant="pink">Badge</Badge>'
      >
        <Badge solid>Badge</Badge>
        <Badge solid variant="red">
          Badge
        </Badge>
        <Badge solid variant="yellow">
          Badge
        </Badge>
        <Badge solid variant="green">
          Badge
        </Badge>
        <Badge solid variant="blue">
          Badge
        </Badge>
        <Badge solid variant="indigo">
          Badge
        </Badge>
        <Badge solid variant="purple">
          Badge
        </Badge>
        <Badge solid variant="pink">
          Badge
        </Badge>
      </Code>
    </ElementLayout>
  );
}
