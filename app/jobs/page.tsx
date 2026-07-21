import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Careers | Eterna",
  description:
    "Careers at Eterna Creative - join a founder-led product studio when roles open.",
};

/** Legacy /jobs route — careers live at /careers. */
export default function JobsPage() {
  redirect("/careers");
}
