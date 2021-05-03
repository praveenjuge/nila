import ElementLayout from '../components/ElementLayout';
import Code from '../components/Code';
import { Avatar } from '../../dist';

export default function Avatars() {
  return (
    <ElementLayout title="Avatar">
      <Code title="Usage" code="import { Avatar } from 'nila';" />
      <Code
        title="Basic"
        code='<Avatar />
<Avatar name="Praveen Juge" />
<Avatar image="/avatar.jpg" />
<Avatar image="/avatar.jpg" rounded />
<Avatar image="/avatar.jpg" dot="bg-green-500" />'
      >
        <Avatar />
        <Avatar name="Praveen Juge" />
        <Avatar image="/avatar.jpg" />
        <Avatar image="/avatar.jpg" rounded />
        <Avatar image="/avatar.jpg" dot="bg-green-500" />
      </Code>

      <Code
        title="Sizes"
        code='<Avatar image="/avatar.jpg" size="6" />
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
        title="Indicator Colors"
        code='<Avatar name="Juge" dot="bg-gray-500" size="6" />
<Avatar name="Juge" dot="bg-red-500" size="8" />
<Avatar name="Juge" dot="bg-yellow-500" size="10" />
<Avatar name="Juge" dot="bg-green-500" size="12" />
<Avatar name="Juge" dot="bg-blue-500" size="14" />
<Avatar name="Juge" dot="bg-indigo-500" size="16" />
<Avatar name="Juge" dot="bg-purple-500" size="20" />
<Avatar name="Juge" dot="bg-pink-500" size="24" />
<Avatar name="Juge" dot="bg-gray-500" size="28" />'
      >
        <Avatar name="Juge" dot="bg-gray-500" size="6" />
        <Avatar name="Juge" dot="bg-red-500" size="8" />
        <Avatar name="Juge" dot="bg-yellow-500" size="10" />
        <Avatar name="Juge" dot="bg-green-500" size="12" />
        <Avatar name="Juge" dot="bg-blue-500" size="14" />
        <Avatar name="Juge" dot="bg-indigo-500" size="16" />
        <Avatar name="Juge" dot="bg-purple-500" size="20" />
        <Avatar name="Juge" dot="bg-pink-500" size="24" />
        <Avatar name="Juge" dot="bg-gray-500" size="28" />
      </Code>

      <Code
        title="Placeholder Sizes"
        code='<Avatar rounded size="6" />
<Avatar rounded size="8" />
<Avatar rounded size="10" />
<Avatar rounded size="12" />
<Avatar rounded size="14" />
<Avatar rounded size="16" />
<Avatar rounded size="20" />
<Avatar rounded size="24" />
<Avatar rounded size="28" />'
      >
        <Avatar rounded size="6" />
        <Avatar rounded size="8" />
        <Avatar rounded size="10" />
        <Avatar rounded size="12" />
        <Avatar rounded size="14" />
        <Avatar rounded size="16" />
        <Avatar rounded size="20" />
        <Avatar rounded size="24" />
        <Avatar rounded size="28" />
      </Code>
    </ElementLayout>
  );
}
