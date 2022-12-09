import { useRouter } from "next/router";
function Anchor({ href, className, children }) {
  const router = useRouter();
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}

export default Anchor;
