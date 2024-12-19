import React from 'react';

interface FooterDict {
  copyright: string;
}

interface FooterProps {
  dict: FooterDict;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const content = dict.copyright.replace('{{year}}', currentYear.toString());

  return <div className="w-full bg-cream p-4 text-center">{content}</div>;
}
