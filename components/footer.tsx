"use client";

import Link from "next/link";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center">
            <Link
              href="/"
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 hover:from-primary hover:to-primary/70 transition-all"
            >
              aviris
            </Link>
            <p className="text-sm text-muted-foreground">
              Built by{" "}
              <Link
                href="https://twitter.com/jkghartey"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                @jkghartey
              </Link>
              . The source code is available on{" "}
              <Link
                href="https://github.com/jkghartey/aviris"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/jkghartey/aviris"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/jkghartey"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href="https://discord.gg/your-invite-code"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <FaDiscord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
