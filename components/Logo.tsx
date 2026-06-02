import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="logo-img"
      src="/logo.png"
      alt="TOP Sierhekwerken"
      width={1016}
      height={351}
      priority
    />
  );
}
