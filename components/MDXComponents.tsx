// Dependencies
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react';

const CustomLink = (props: React.ComponentProps<"a"> & LinkProps) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        );
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents: any = {
    a: CustomLink,
    Image,
}

export default MDXComponents