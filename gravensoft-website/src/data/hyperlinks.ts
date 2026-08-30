import { Icons } from "../shared/Icons";

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
    {name: "Twitter", link: "https://twitter.com/GravenSoft", icon: Icons.twitterIcon, isRoute: false},
    {name: "LinkedIn", link: "https://linkedin.com/company/GravenSoft", icon: Icons.linkedInIcon, isRoute: false},
    {name: "GitHub", link: "https://github.com/GravenSoft-DEV", icon: Icons.githubIcon, isRoute: false},
    {name: "Discord", link: "https://discord.gg/qJp2ByQZq4", icon: Icons.discordIcon, isRoute: false},
]

export const LinkColumns: [title: string, HyperlinkSchema[]][] = [
  ["Legal", LEGAL],
  ["Navigate", NAVIGATE],
  ["Connect", SOCIALS],
];