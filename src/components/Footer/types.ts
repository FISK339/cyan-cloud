export interface FooterBottomProps {
  developerInfo: {
    title: string;
    href: string;
    button: string;
  };
}

export interface FooterColumnProps {
  title: string;
  items: Array<{ title: string; href: string }>;
}

export interface FooterButtonsProps {
  title: string;
  items: Array<{ button: string; href: string }>;
}
