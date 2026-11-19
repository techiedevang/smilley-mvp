"use client";

import { useEffect } from "react";

/**
 * SecurityGuard Component
 * 
 * Protects the website against:
 * 1. Right-click context menu (Inspect Element, View Source)
 * 2. Developer Tools keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S)
 * 3. Unauthorized image dragging / scraping
 * 4. DevTools console inspection & reverse-engineering
 */
export default function SecurityGuard() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable DevTools and View-Source Key Combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const isAlt = e.altKey;
      const key = e.key ? e.key.toUpperCase() : "";
      const keyCode = e.keyCode;

      // F12 key
      if (key === "F12" || keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + Shift + I (Inspect) / Cmd + Option + I
      // Ctrl + Shift + J (Console) / Cmd + Option + J
      // Ctrl + Shift + C (Inspect Element) / Cmd + Option + C
      // Ctrl + Shift + K (Firefox Console)
      if (
        (isCtrlOrCmd && isShift && (key === "I" || key === "J" || key === "C" || key === "K" || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 75)) ||
        (isCtrlOrCmd && isAlt && (key === "I" || key === "J" || key === "C" || keyCode === 73 || keyCode === 74 || keyCode === 67))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + U / Cmd + U (View Source)
      if (isCtrlOrCmd && (key === "U" || keyCode === 85)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + S / Cmd + S (Save Page)
      if (isCtrlOrCmd && (key === "S" || keyCode === 83)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + P / Cmd + P (Print / Save as PDF)
      if (isCtrlOrCmd && (key === "P" || keyCode === 80)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Prevent Dragging Images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.tagName === "A" || target.closest("img"))) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Console Security Warnings and Cleaning
    const logWarning = () => {
      if (typeof console !== "undefined") {
        try {
          console.clear();
          console.log(
            "%cSTOP!",
            "color: #ff3333; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 0px #000;"
          );
          console.log(
            "%cThis website and its source code are protected. Unauthorized inspection, reproduction, or reverse engineering of assets is strictly prohibited.",
            "color: #ffffff; background: #1a1a1a; padding: 6px 10px; font-size: 13px; border-radius: 4px;"
          );
        } catch {
          // ignore
        }
      }
    };

    // Attach DOM event listeners
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });

    // Show security banner
    logWarning();

    // In production, keep console clean and deter active DevTools inspection
    let antiInspectInterval: NodeJS.Timeout | null = null;
    if (process.env.NODE_ENV === "production") {
      antiInspectInterval = setInterval(() => {
        try {
          // Wipes any recorded console events
          console.clear();
          // Deterrent: triggers debugger pause only if DevTools is active/opened
          (function () {
            return false;
          })["constructor"]("debugger")();
        } catch {
          // ignore
        }
      }, 1500);
    }

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      if (antiInspectInterval) {
        clearInterval(antiInspectInterval);
      }
    };
  }, []);

  return null;
}
