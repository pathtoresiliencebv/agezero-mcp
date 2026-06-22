import * as React from "react";
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const Icon = ({ children, size = 16, ...props }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>{children}</svg>
);
export const Sparkles = (p: IconProps) => <Icon {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></Icon>;
export const ArrowRight = (p: IconProps) => <Icon {...p}><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></Icon>;
export const ArrowUpRight = (p: IconProps) => <Icon {...p}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></Icon>;
export const Search = (p: IconProps) => <Icon {...p}><circle cx="11" cy="11" r="6"></circle><path d="m20 20-4-4"></path></Icon>;
export const Terminal = (p: IconProps) => <Icon {...p}><path d="m4 17 6-6-6-6"></path><path d="M12 19h8"></path></Icon>;
export const Package = (p: IconProps) => <Icon {...p}><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></Icon>;
export const Check = (p: IconProps) => <Icon {...p}><path d="M5 12l5 5L20 7"></path></Icon>;
