import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={clsx("h-10 bg-zinc-700 px-4 rounded-lg text-center content-center opacity-90", className)}>
      {children}
    </button>
  );
}
