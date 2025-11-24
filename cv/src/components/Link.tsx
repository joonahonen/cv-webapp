
// Link component: helps making links in other components
type Props = {
  href?: string;
  children?: React.ReactNode;
  disappear?: boolean;
};

function Link({ href, children, disappear }: Props) {
  if (!href) return null;
  return <a href={href}>{children}</a>;
}

export default Link;
