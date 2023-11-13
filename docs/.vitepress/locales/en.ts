import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_URL = 'https://led4c.github.io/ldc-docs/'
export const META_TITLE = "LDC Docs";
export const META_DESCRIPTION = "LDC Documentation Website";
export const META_KEYWORDS = 'LDC, LEDAC, LED4C, LDC FiveM, LDC Fivem Script, LDC Script, LDC Docs, FiveM, GTA V, GTA V Roleplay'
export const LOCAL_CODE = 'en-US'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: 'LDC Docs',
    description: META_DESCRIPTION,
    themeConfig: {
        siteTitle: "LDC Documentation", // false,
        // logo: "/image/logo/ldc-text.png",
        outlineTitle: "Page Contents",
        lastUpdatedText: "Last Update",
        returnToTopLabel: "Back to Top",
        langMenuLabel: "Change Language",
        notFound: {
            title: "Page Not Found",
            quote: "Looks like you're lost, you should go back to the homepage.",
            linkLabel: "Home",
        },
        // socialLinks: [
        //     { icon: "github", link: "https://github.com/led4c" },
        //     { icon: "youtube", link: "https://www.youtube.com/@led4c" },
        // ],
        docFooter: {
            prev: "Previous page",
            next: "Next page",
        },
        // nav: nav(),
        sidebar: sidebar(),
        footer: footer(),
    },
};

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Home",
            link: "/en/",
        },
    ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return {
        // @ts-ignore
        "/en/": [
            { text: "Introduction", link: "/en/" },
            {
                text: "L-JOB",
                collapsed: true,
                items: [
                    { text: "Info", link: "/en/fivem/l-job/info" },
                    { text: "Setup", link: "/en/fivem/l-job/setup" },
                    { text: "Create", link: "/en/fivem/l-job/create" },
                    { 
                        collapsed: true, 
                        text: "Snippet", 
                        items: [
                            { text: "Client Exports", link: "/en/fivem/l-job/client-exports" },
                        ],
                    },
                ],
            },
        ],
    };
}

function footer(): DefaultTheme.Footer {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;

    let yearRange = startYear.toString();
    if (currentYear > startYear) {
        yearRange += ` - ${currentYear}`;
    }

    return {
        message: 'Made With 🤍',
        copyright: `Copyright © ${yearRange} LDC - All rights reserved.`
    };
}
