export interface HyperlinkSchema {
    name: string;
    link: string;
    icon?: string;
}

export const LEGAL: HyperlinkSchema[] = [
    {name: "Privacy Policy", link: ""},
    {name: "Terms of Service", link: ""},
]

export const SOCIALS: HyperlinkSchema[] = [
    {name: "Twitter", link: "https://twitter.com/GravenSoft"},
    {name: "LinkedIn", link: "https://linkedin.com/company/GravenSoft"},
    {name: "GitHub", link: "https://github.com/GravenSoft-DEV"},
    {name: "Discord", link: "https://discord.gg/qJp2ByQZq4"},
    {name: "E-Mail", link: "mailto:gravensoftdev@gmail.com"},
]

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Legal", LEGAL],
  ["Connect with Us", SOCIALS]
];