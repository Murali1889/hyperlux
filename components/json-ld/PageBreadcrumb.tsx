import { BreadcrumbJsonLd } from "./BreadcrumbJsonLd"
import { buildBreadcrumbs } from "@/lib/breadcrumbs"

export function PageBreadcrumb({ path }: { path: string }) {
  return <BreadcrumbJsonLd items={buildBreadcrumbs(path)} />
}
