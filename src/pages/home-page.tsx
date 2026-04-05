import { TeaCarousel } from "../components/tea-carousel";

export function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-10 pt-4 md:pb-14 md:pt-5">
      <TeaCarousel />
    </div>
  );
}
