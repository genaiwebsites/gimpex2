"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";
import { countries, Country } from "@/data/countries";

interface CountrySelectProps {
  id?: string;
  value: string;          // country name string stored in form state
  onChange: (name: string) => void;
  required?: boolean;
}

function flagSrc(iso2: string) {
  return `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
  id,
  value,
  onChange,
  required,
}) => {
  const uid = useId();
  const inputId = id ?? uid;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // The currently selected country object
  const selected = countries.find(
    (c) => c.name.toLowerCase() === value.toLowerCase()
  ) ?? null;

  // Filtered list based on search query
  const filtered = query.trim()
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : countries;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[highlighted] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlighted, open]);

  const select = useCallback(
    (country: Country) => {
      onChange(country.name);
      setOpen(false);
      setQuery("");
      setHighlighted(0);
    },
    [onChange]
  );

  const openDropdown = () => {
    setOpen(true);
    setHighlighted(0);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlighted]) select(filtered[highlighted]);
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className="cs-wrap"
      onKeyDown={handleKeyDown}
    >
      {/* Trigger — looks like the other form inputs */}
      <button
        type="button"
        id={inputId}
        className="cs-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-required={required}
        onClick={() => (open ? setOpen(false) : openDropdown())}
      >
        {selected ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flagSrc(selected.iso2)}
              alt={`${selected.name} flag`}
              className="cs-flag"
              width={20}
              height={15}
              loading="lazy"
            />
            <span className="cs-label">{selected.name}</span>
          </>
        ) : (
          <span className="cs-placeholder">Select country…</span>
        )}
        {/* Chevron */}
        <svg
          className="cs-chevron"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="cs-panel" role="dialog" aria-label="Select country">
          {/* Search */}
          <div className="cs-search">
            <svg viewBox="0 0 18 18" fill="none" aria-hidden>
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.5 12.5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="cs-input"
              placeholder="Search countries…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlighted(0);
              }}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          {/* List */}
          <ul
            ref={listRef}
            className="cs-list"
            role="listbox"
            aria-label="Countries"
          >
            {filtered.length === 0 ? (
              <li className="cs-empty">No countries found</li>
            ) : (
              filtered.map((country, i) => (
                <li
                  key={country.iso2}
                  role="option"
                  aria-selected={country.name === value}
                  className={[
                    "cs-option",
                    country.name === value ? "cs-selected" : "",
                    i === highlighted ? "cs-hi" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() => setHighlighted(i)}
                  onMouseDown={(e) => {
                    e.preventDefault(); // prevent blur before click registers
                    select(country);
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flagSrc(country.iso2)}
                    alt=""
                    aria-hidden
                    className="cs-flag"
                    width={20}
                    height={15}
                    loading="lazy"
                  />
                  {country.name}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
