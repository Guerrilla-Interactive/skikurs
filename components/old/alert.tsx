import Container from "@components/layout/container";
import cn from "classnames";
import { EXAMPLE_PATH } from "@lib/constants";

import Link from "next/link";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-sm text-center">
          {preview ? (
            <>
              This page is a preview.
              <span className="underline transition-colors duration-200 hover:text-cyan">
                <Link
                  href="/api/exit-preview"
                >
                  Click here
                </Link>
              </span>
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is
              <span className="underline transition-colors duration-200 hover:text-success">
                <Link
                  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}

                >
                  available on GitHub
                </Link>
              </span>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
