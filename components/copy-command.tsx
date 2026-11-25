'use client';

import { useState } from 'react';

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="点击复制"
      className="group flex w-full items-center justify-between gap-3 rounded-lg border border-fd-border bg-fd-muted/60 px-3 py-2 text-left font-mono text-xs text-fd-muted-foreground transition-colors hover:border-fd-primary/50 hover:text-fd-foreground"
    >
      <span className="truncate">{command}</span>
      <span className="shrink-0 text-[11px] font-sans text-fd-primary">
        {copied ? '已复制' : '复制'}
      </span>
    </button>
  );
}
