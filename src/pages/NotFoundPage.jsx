import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      {/* Invalid route */}
      <h1>404 - Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}