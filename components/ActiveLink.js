import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{ color: isCurrentPath ? "#5e9af2" : "#fff" }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveLink);
