import Link from "next/link";
import type { ReactNode } from "react";

function Arrow() {
  return <span className="ar" aria-hidden="true" />;
}

type Variant = "primary" | "light" | "ghost" | "outline";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm";
  arrow?: boolean;
  block?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size,
  arrow,
  block,
  type = "button",
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = ["btn", `btn-${variant}`, size === "sm" && "btn-sm", block && "btn-block", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isInternal = href.startsWith("/");
    const isExternal = href.startsWith("http");
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
          {arrow && <Arrow />}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={cls}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
