import Image from 'next/image';
import Link from 'next/link';
import Discord from 'public/assets/social_discord.png';
import Facebook from 'public/assets/social_facebook.png';
import Google from 'public/assets/social_google.png';
import Instagram from 'public/assets/social_instagram.png';
import Pinterest from 'public/assets/social_pinterest.png';
import Twitter from 'public/assets/social_twitter.png';

type Props = {
  isDark?: boolean;
};

export default function SocialLinks({ isDark = false }: Props) {
  return (
    <div className="flex justify-between items-center gap-7">
      <Link href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://pinterest.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          alt="pinterest"
          src={Pinterest}
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
