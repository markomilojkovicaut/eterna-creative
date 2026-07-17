import Image from "next/image";

import type { TeamMember } from "@/lib/founder-studio";
import { cn } from "@/lib/utils";

export function TeamMemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-soft border border-border-dark bg-bg-card/40 p-2",
        member.staggerClass,
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-square overflow-hidden rounded-soft",
          !member.imageSrc && member.gradientClass
        )}
      >
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-scanlines opacity-30" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg-base/50 via-transparent to-transparent"
              aria-hidden
            />
            <span className="absolute bottom-3 left-3 font-heading text-[2rem] font-bold leading-none text-text-heading/20 sm:text-[2.5rem]">
              {member.name.charAt(0)}
            </span>
          </>
        )}
      </div>

      <div className="px-2 pb-3 pt-4">
        <h3 className="font-heading text-body-md font-bold text-text-heading">
          {member.name}
        </h3>
        <p className="mt-1 text-body-sm text-text-sub">{member.role}</p>
      </div>
    </article>
  );
}
