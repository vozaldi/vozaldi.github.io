import { useEffect, useRef } from "react";
import { useUiState } from "src/states/uiState";

type Props = React.HTMLAttributes<HTMLDivElement> & {
};

function BaseLayout({
  children,
}: Props) {
  // Hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const container = !containerRef.current ? {} : {
      height: containerRef.current.clientHeight,
      width: containerRef.current.clientWidth,
      element: containerRef.current,
    };
    const header = !headerRef.current ? {} : {
      height: headerRef.current.clientHeight,
      width: headerRef.current.clientWidth,
      element: headerRef.current,
    };

    useUiState.setState((state) => ({
      ...state,
      layouts: {
        ...state.layouts,
        body: {
          height: document.body.clientHeight,
          width: document.body.clientWidth,
          element: document.body,
        },
        container,
        header,
      },
    }));
  }, []);

  // Vars

  return (
    <div ref={containerRef} className="app-container shadow-lg">
      {children}
    </div>
  );
};

export default BaseLayout;
