import Image from "next/image";

function IconSocial({ icon, text, href }) {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      {/* Instagram */}
      <div className={`social-icon`}>
        <Image src={icon} layout="fill" objectFit="contain" alt="" />
      </div>

      {href ? (
        <a
          className={`text-md ${href && "hover:underline"}  md:text-2xl`}
          target="_blank"
          rel="noreferrer"
          href={href}
        >
          {text}
        </a>
      ) : (
        <a
          className={`text-md md:text-2xl ${href && "hover:underline"} `}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      )}
    </div>
  );
}

export default IconSocial;
