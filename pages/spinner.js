import Code from '../components/Code';
import { Spinner } from '../dist';
import ElementLayout from '../components/ElementLayout';

export default function Spinners() {
  return (
    <ElementLayout title="Spinner">
      <Code title="Usage" code="import { Spinner } from 'nila';" />

      <Code title="Basic" code="<Spinner />">
        <Spinner />
      </Code>

      <Code
        title="Colors"
        code='<Spinner className="text-gray-700" />
<Spinner className="text-red-700" />
<Spinner className="text-yellow-700" />
<Spinner className="text-green-700" />
<Spinner className="text-blue-700" />
<Spinner className="text-indigo-700" />
<Spinner className="text-purple-700" />
<Spinner className="text-pink-700" />'
      >
        <Spinner className="text-gray-700" />
        <Spinner className="text-red-700" />
        <Spinner className="text-yellow-700" />
        <Spinner className="text-green-700" />
        <Spinner className="text-blue-700" />
        <Spinner className="text-indigo-700" />
        <Spinner className="text-purple-700" />
        <Spinner className="text-pink-700" />
      </Code>

      <Code
        title="Sizes"
        code='<Spinner className="w-3 h-3" />
<Spinner className="w-4 h-4" />
<Spinner className="w-5 h-5" />
<Spinner className="w-6 h-6" />
<Spinner className="w-8 h-8" />
<Spinner className="w-10 h-10" />
<Spinner className="w-12 h-12" />
<Spinner className="w-14 h-14" />'
      >
        <Spinner className="w-3 h-3" />
        <Spinner className="w-4 h-4" />
        <Spinner className="w-5 h-5" />
        <Spinner className="w-6 h-6" />
        <Spinner className="w-8 h-8" />
        <Spinner className="w-10 h-10" />
        <Spinner className="w-12 h-12" />
        <Spinner className="w-14 h-14" />
      </Code>
    </ElementLayout>
  );
}
