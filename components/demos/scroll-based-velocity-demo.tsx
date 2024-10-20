import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Horizo Marketing Agency"
      default_velocity={2}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black/30 drop-shadow-sm dark:text-white md:text-3xl md:leading-[3rem]"
    />
  );
}
