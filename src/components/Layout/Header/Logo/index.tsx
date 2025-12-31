import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/Logo (2).png"
        alt="AC"
        width={75}
        height={50}
        className="h-auto"
      />
    </Link>
  );
};

export default Logo;
