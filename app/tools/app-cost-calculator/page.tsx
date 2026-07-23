import { redirect } from "next/navigation";

/** Old calculator URL — keep for bookmarks and external links. */
export default function AppCostCalculatorRedirectPage() {
  redirect("/calculator");
}
