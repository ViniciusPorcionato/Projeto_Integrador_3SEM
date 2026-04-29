import Image from "next/image";

export default function Logo({ size = "md", priority = false }) {
  const sizes = {
    sm: "h-8 w-auto md:h-10",
    md: "h-10 w-auto md:h-12",
    lg: "h-20 w-auto md:h-28 lg:h-36",
    xl: "h-28 w-auto md:h-40 lg:h-52",
  };

  return (
    <Image
      src="/LogoMM.svg"
      alt="MM Automações"
      width={190}
      height={81}
      priority={priority}
      className={`${sizes[size] || sizes.md} select-none`}
    />
  );
}
