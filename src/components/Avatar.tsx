type Props = {
  image?: string | null;
};
const Avatar = ({ image }: Props) => {
  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
