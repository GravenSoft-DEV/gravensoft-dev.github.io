export interface HyperlinkSchema {
    name: string;
    link: string;
    icon?: string;
    isRoute?: boolean;
}

export const LEGAL: HyperlinkSchema[] = [
    {name: "Contact", link: "/contact", isRoute: true},
    {name: "Privacy Policy", link: ""},
    {name: "Terms of Service", link: ""},
]

export const NAVIGATE: HyperlinkSchema[] = [
    {name: "Home", link: "/home", isRoute: true},
    {name: "Portfolio", link: "/portfolio", isRoute: true},
    {name: "Blogs", link: "/blogs", isRoute: true},
]

export const SOCIALS: HyperlinkSchema[] = [
    {name: "Twitter", link: "https://twitter.com/GravenSoft", isRoute: false},
    {name: "LinkedIn", link: "https://linkedin.com/company/GravenSoft", isRoute: false},
    {name: "GitHub", link: "https://github.com/GravenSoft-DEV", isRoute: false},
    {name: "Discord", link: "https://discord.gg/qJp2ByQZq4", isRoute: false},
]

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Legal", LEGAL],
  ["Navigate", NAVIGATE],
  ["Connect", SOCIALS],
];