"use client";

import React, { useState } from "react";
import Select, { components } from "react-select";

type Option = { value: string; label: string };

const projectOptions: Option[] = [
  // --- GENERAL
  { value: "branding", label: "Branding / Merchandising" },
  { value: "business", label: "Business Partnership" },
  { value: "creative", label: "Creative Consulting / Short Mentorship" },
  { value: "internship", label: "Internship / Job Opening" },
  { value: "other", label: "Other" },

  // --- FILM / VIDEO
  { value: "commercial", label: "Commercial / Advertisement / Company Profile" },
  { value: "feature", label: "Feature Film Production / Co-Production" },
  { value: "documentary", label: "Documentary Production / Co-Production" },
  { value: "short", label: "Short Film Production / Co-Production" },
  { value: "music", label: "Music Video / Animated Music Video" },
  { value: "trailer", label: "Trailer / Teaser" },
  { value: "web", label: "Web Series Production / Co-Production" },
  { value: "2d3d", label: "2D / 3D Animation Production / Co-Production" },
  { value: "experimental", label: "Experimental / Arthouse Film Production / Co-Production" },
  { value: "event", label: "Event / Live Capture (concert / festival / corporate event)" },
  { value: "regular", label: "Regular / Surround Audio Mixing" },
  { value: "foley", label: "Foley / Sound Design" },

  // --- POST / VFX
  { value: "compositing", label: "Compositing" },
  { value: "rendering", label: "Rendering Service" },
  { value: "motion", label: "Motion Graphics" },
  { value: "matte", label: "Matte Painting / Cleanup" },
  { value: "rotoscoping", label: "Rotoscoping / Masking" },
  { value: "computer", label: "Computer Simulation (fluid / smoke / particles / cloth / fur)" },
  { value: "vfxproduction", label: "VFX Production Supervision / Management" },
  { value: "vfxconsulting", label: "VFX Consulting / Short Applied Mentorship" },

  // --- GAME
  { value: "full", label: "Full Game Development / Co-Development / Outsourcing" },
  { value: "porting", label: "Porting / Platform Support" },
  { value: "gameasset", label: "Game Asset Creation (2D / 3D / UI / Animation)" },
  { value: "interactive", label: "Interactive Art UX / UI Design" },
  { value: "gamedesign", label: "Game Design / Narrative / Level Design" },
  { value: "technical", label: "Technical Art" },
  { value: "tool", label: "Tool / Engine / Plugin Development" },
  { value: "prototype", label: "Prototype / Demo Development" },
  { value: "educational", label: "Educational / Training Game" },
  { value: "cozy", label: "Cozy - Casual Games" },
  { value: "vrar", label: "VR / AR Interactive Experience" },
  { value: "interactiveconsult", label: "Interactive Art Consulting" },
  { value: "multimedia", label: "Interactive Art / Multimedia Installations" },
  { value: "gamepublishing", label: "Game Publishing" },
];

const DropdownIndicator = (props: any) => {
  // gunakan any supaya tidak timbul TS type errors saat membaca selectProps custom
  const selectProps = (props as any).selectProps || {};
  const menuIsOpen = !!selectProps.menuIsOpen;
  const setMenuIsOpen = selectProps.setMenuIsOpen as ((v: boolean) => void) | undefined;

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (setMenuIsOpen) setMenuIsOpen(!menuIsOpen);
  };

  return (
    <components.DropdownIndicator {...props}>
      <button
        type="button"
        onMouseDown={handleToggle}
        onKeyDown={(e) => {
          if ((e as React.KeyboardEvent).key === "Enter" || (e as React.KeyboardEvent).key === " ")
            handleToggle(e);
        }}
        aria-label={menuIsOpen ? "Close menu" : "Open menu"}
        className="p-1"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={`transform transition-transform ${menuIsOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
        </svg>
      </button>
    </components.DropdownIndicator>
  );
};

export default function SelectProject() {
  const [value, setValue] = useState<Option[] | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // supaya bisa passing prop custom (setMenuIsOpen) tanpa TS complaining, bungkus Select jadi any
  const RS: any = Select;

  return (
    <RS
      options={projectOptions}
      value={value}
      onChange={(v: any) => setValue(v)}
      isMulti
      isSearchable
      placeholder="Select your project type"
      // control menu open state
      menuIsOpen={menuIsOpen}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}
      openMenuOnClick={false} // mencegah klik di body control membuka menu
      components={{ DropdownIndicator }}
      className="w-full"
      classNamePrefix="custom-select"
      styles={{
        control: (base: any) => ({
          ...base,
          border: "2.5px solid #000",
          borderRadius: 5,
          paddingLeft: 8,
          paddingRight: 8,
          boxShadow: "none",
        }),
        placeholder: (base: any) => ({ ...base, color: "#999" }),
        multiValue: (base: any) => ({ ...base, backgroundColor: "#111", color: "#fff" }),
      }}
      // pass custom setter supaya DropdownIndicator dapat memanggilnya:
      setMenuIsOpen={setMenuIsOpen}
    />
  );
}
