import Link from 'next/link';

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  const external =
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');
  const classes = `button button--${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
    </Link>
  );
}
