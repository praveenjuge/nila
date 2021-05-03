export default function PropsTable(props) {
  return (
    <>
      <h2 className="font-bold tracking-tight mb-4 text-2xl text-gray-900">
        Props
      </h2>
      <div className="prose max-w-none">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </>
  );
}
