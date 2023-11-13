import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const META_URL = 'https://led4c.github.io/ldc-docs/'
export const META_TITLE = "LDC Docs";
export const META_DESCRIPTION = "LDC Dokumentasi Website";
export const META_KEYWORDS = 'LDC, LEDAC, LED4C, LDC FiveM, LDC Fivem Script, LDC Script, LDC Docs, FiveM, GTA V, GTA V Roleplay'
export const LOCAL_CODE = 'id-ID'

export const idConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: 'LDC Docs',
    description: META_DESCRIPTION,
    themeConfig: {
        siteTitle: 'LDC Dokumentasi', // false,
        // logo: "/image/logo/ldc-text.png",
        outlineTitle: "Isi Halaman",
        lastUpdatedText: "Pembaruan Terakhir",
        returnToTopLabel: "Kembali Ke Atas",
        langMenuLabel: "Ubah Bahasa",
        notFound: {
            title: "Halaman Tidak Ditemukan",
            quote: "Sepertinya kamu tersesat, sebaiknya kembali ke beranda",
            linkLabel: "Beranda",
        },
        // socialLinks: [
        //     { icon: "github", link: "https://github.com/led4c" },
        //     { icon: "youtube", link: "https://www.youtube.com/@led4c" },
        // ],
        docFooter: {
            prev: "Halaman sebelumnya",
            next: "Halaman berikutnya",
        },
        // nav: nav(),
        sidebar: sidebar(),
        footer: footer(),
    },
};

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Beranda",
            link: "/",
        },
    ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return {
        // @ts-ignore
        "/": [
            { text: "Introduction", link: "/" },
            {
                text: "L-JOB",
                collapsed: true,
                items: [
                    { text: "Info", link: "/fivem/l-job/info" },
                    { text: "Setup", link: "/fivem/l-job/setup" },
                    { text: "Create", link: "/fivem/l-job/create" },
                    { 
                        collapsed: true, 
                        text: "Snippet", 
                        items: [
                            { text: "Client Exports", link: "/fivem/l-job/client-exports" },
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
