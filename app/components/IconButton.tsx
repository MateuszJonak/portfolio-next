export type IconButtonProps = React.ComponentProps<'button'>;

const classNames = [
  'inline-flex',
  'items-center',
  'justify-center',
  'box-border',
  'bg-transparent',
  'outline-0',
  'border-0 m-0',
  'cursor-pointer',
  'select-none',
  'align-middle',
  'no-underline',
  'text-center',
  'r-50',
  'rounded-full',
  'overflow-visible',
  'text-white',
  'transition-colors',
  'p-1',
  'font-2',
  'text-lg',
  'hover:bg-white/[0.08]',
];

export const IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button className={[...classNames, className].join(' ')} {...props}>
      {children}
    </button>
  );
};

export type IconLinkProps = React.ComponentProps<'a'>;

export const IconLink = ({ children, className, ...props }: IconLinkProps) => {
  return (
    <a className={[...classNames, className].join(' ')} {...props}>
      {children}
    </a>
  );
};
