export default function Callout({ children }) {
  return (
    <div className="p-4 my-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 dark:text-white rounded">
      {children}
    </div>
  );
}
