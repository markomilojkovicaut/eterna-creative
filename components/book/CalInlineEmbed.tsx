"use client";

import { useEffect } from "react";

import { calEmbed } from "@/lib/book";

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalFn>;
  q?: unknown[][];
  config?: { forwardQueryParams?: boolean };
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

function initCalComEmbed() {
  (function (C, A, L) {
    const p = function (a: CalFn, ar: unknown[]) {
      a.q!.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      (function (...ar: unknown[]) {
        const cal = C.Cal!;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function (...apiArgs: unknown[]) {
            p(api, apiArgs);
          };
          const namespace = ar[1];
          (api as CalFn).q = (api as CalFn).q || [];
          if (typeof namespace === "string") {
            cal.ns![namespace] = cal.ns![namespace] || (api as CalFn);
            p(cal.ns![namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      } as CalFn);
  })(window, calEmbed.scriptSrc, "init");

  window.Cal!("init", calEmbed.namespace, { origin: calEmbed.origin });

  window.Cal!.config = window.Cal!.config || {};
  window.Cal!.config.forwardQueryParams = true;

  window.Cal!.ns![calEmbed.namespace]("inline", {
    elementOrSelector: `#${calEmbed.elementId}`,
    config: calEmbed.inlineConfig,
    calLink: calEmbed.calLink,
  });

  window.Cal!.ns![calEmbed.namespace]("ui", calEmbed.uiConfig);
}

export function CalInlineEmbed() {
  useEffect(() => {
    initCalComEmbed();
  }, []);

  return (
    <div
      id={calEmbed.elementId}
      className="h-[600px] w-full overflow-auto sm:h-[640px]"
    />
  );
}
