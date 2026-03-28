"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeFineHover(onChange: () => void) {
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getFineHoverSnapshot() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getFineHoverServerSnapshot() {
  return false;
}

function useFineHover() {
  return useSyncExternalStore(
    subscribeFineHover,
    getFineHoverSnapshot,
    getFineHoverServerSnapshot,
  );
}

type Item = { readonly href: string; readonly label: string };

export function WorkDropdown({ items }: { items: readonly Item[] }) {
  const fineHover = useFineHover();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fineHover || !open) return;
    function close(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [fineHover, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const onMouseEnter = useCallback(() => {
    if (fineHover) setOpen(true);
  }, [fineHover]);

  const onMouseLeave = useCallback(() => {
    if (fineHover) setOpen(false);
  }, [fineHover]);

  const onToggleClick = useCallback(() => {
    if (!fineHover) setOpen((o) => !o);
  }, [fineHover]);

  const onToggleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    },
    [],
  );

  return (
    <div
      ref={rootRef}
      className={`work-dropdown${open ? " work-dropdown--open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="work-dropdown__row">
        <Link
          href="/work"
          id="nav-work-work-link"
          className="work-dropdown__work-link"
        >
          Work
        </Link>
        {!fineHover ? (
          <button
            type="button"
            id="nav-work-submenu-trigger"
            className="work-dropdown__toggle"
            aria-expanded={open}
            aria-haspopup="menu"
            aria-controls="nav-work-menu"
            aria-label="Open project links menu"
            onClick={onToggleClick}
            onKeyDown={onToggleKeyDown}
          >
            <span className="work-dropdown__chevron" aria-hidden />
          </button>
        ) : null}
      </div>
      <ul
        id="nav-work-menu"
        role="menu"
        aria-labelledby="nav-work-work-link"
        className="work-dropdown__panel"
      >
        {items.map((item) => (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              className="work-dropdown__link"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
