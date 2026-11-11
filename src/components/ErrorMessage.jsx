export default function ErrorMessage({ message }) {
  return (
    <p role="alert">
      {/* API error */}
      Error: {message}
    </p>
  );
}