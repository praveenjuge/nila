import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Avatar } from '../../dist';

export default function Avatars() {
  return (
    <ElementLayout title="Avatar">
      <Code
        code='{/* Basic */}
<Avatar />
<Avatar name="Praveen Juge" />
<Avatar image="/avatar.jpg" />
<Avatar image="/avatar.jpg" rounded />
<Avatar image="/avatar.jpg" dot="green" />'
      >
        <Avatar />
        <Avatar name="Praveen Juge" />
        <Avatar image="/avatar.jpg" />
        <Avatar image="/avatar.jpg" rounded />
        <Avatar image="/avatar.jpg" dot="green" />
      </Code>

      <Code
        code='{/* Sizes */}
<Avatar image="/avatar.jpg" size="6" />
<Avatar image="/avatar.jpg" size="8" />
<Avatar image="/avatar.jpg" size="10" />
<Avatar image="/avatar.jpg" size="12" />
<Avatar image="/avatar.jpg" size="14" />
<Avatar image="/avatar.jpg" size="16" />
<Avatar image="/avatar.jpg" size="20" />
<Avatar image="/avatar.jpg" size="24" />
<Avatar image="/avatar.jpg" size="28" />'
      >
        <Avatar image="/avatar.jpg" size="6" />
        <Avatar image="/avatar.jpg" size="8" />
        <Avatar image="/avatar.jpg" size="10" />
        <Avatar image="/avatar.jpg" size="12" />
        <Avatar image="/avatar.jpg" size="14" />
        <Avatar image="/avatar.jpg" size="16" />
        <Avatar image="/avatar.jpg" size="20" />
        <Avatar image="/avatar.jpg" size="24" />
        <Avatar image="/avatar.jpg" size="28" />
      </Code>

      <Code
        code='{/* Name, Indicator Color Examples */}
<Avatar name="Juge" dot="gray" size="6" />
<Avatar name="Juge" dot="red" size="8" />
<Avatar name="Juge" dot="yellow" size="10" />
<Avatar name="Juge" dot="green" size="12" />
<Avatar name="Juge" dot="blue" size="14" />
<Avatar name="Juge" dot="indigo" size="16" />
<Avatar name="Juge" dot="purple" size="20" />
<Avatar name="Juge" dot="pink" size="24" />
<Avatar name="Juge" dot="gray" size="28" />'
      >
        <Avatar name="Juge" dot="gray" size="6" />
        <Avatar name="Juge" dot="red" size="8" />
        <Avatar name="Juge" dot="yellow" size="10" />
        <Avatar name="Juge" dot="green" size="12" />
        <Avatar name="Juge" dot="blue" size="14" />
        <Avatar name="Juge" dot="indigo" size="16" />
        <Avatar name="Juge" dot="purple" size="20" />
        <Avatar name="Juge" dot="pink" size="24" />
        <Avatar name="Juge" dot="gray" size="28" />
      </Code>

      <Code
        code='{/* Placeholder Sizes Examples */}
<Avatar dot="gray" size="6" rounded />
<Avatar dot="red" size="8" rounded />
<Avatar dot="yellow" size="10" rounded />
<Avatar dot="green" size="12" rounded />
<Avatar dot="blue" size="14" rounded />
<Avatar dot="indigo" size="16" rounded />
<Avatar dot="purple" size="20" rounded />
<Avatar dot="pink" size="24" rounded />
<Avatar dot="gray" size="28" rounded />'
      >
        <Avatar dot="gray" size="6" rounded />
        <Avatar dot="red" size="8" rounded />
        <Avatar dot="yellow" size="10" rounded />
        <Avatar dot="green" size="12" rounded />
        <Avatar dot="blue" size="14" rounded />
        <Avatar dot="indigo" size="16" rounded />
        <Avatar dot="purple" size="20" rounded />
        <Avatar dot="pink" size="24" rounded />
        <Avatar dot="gray" size="28" rounded />
      </Code>
    </ElementLayout>
  );
}
