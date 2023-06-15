import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image src="/images/logo.png" className="h-16 w-64 mr-2" alt="Logo" width={250} height={250} />
    </div>
  );
};

export default Logo;
