"use client";

import { useTheme } from "next-themes";

import {Switch} from "@heroui/react";
import { LuSunMoon } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-blue-700 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <LuSunMoon  className="size-4 text-cyan-600" />
                ) : (
                  <BsFillMoonStarsFill  className="size-4 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}