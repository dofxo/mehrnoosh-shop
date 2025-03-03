import { SidebarMenuItem } from "@/components/ui/sidebar/navbarData";

export const sidebarNavData: SidebarMenuItem = [
  {
    id: "category",
    label: {
      en: "category",
      fa: "دسته بندی",
    },
    children: [
      {
        id: "mobile-and-tablet",
        label: {
          en: "mobile and tablet",
          fa: "موبایل و تبلت",
        },
        children: [
          {
            id: "surface",
            label: {
              en: "surface",
              fa: "سرفیس",
            },
            children: [
              {
                id: "surface-pro",
                label: {
                  en: "surface pro",
                  fa: "سرفیس پرو",
                },
              },
              {
                id: "normal-surface",
                label: {
                  en: "normal surface",
                  fa: "سرفیس معمولی",
                },
              },
              {
                id: "copy-surface-version",
                label: {
                  en: "copy version",
                  fa: "نسخه کپی",
                },
              },
            ],
          },
          {
            id: "mobile",
            label: {
              en: "mobile",
              fa: "موبایل",
            },
            children: [
              {
                id: "samsung-mobile",
                label: {
                  en: "samsung",
                  fa: "سامسونگ",
                },
              },
              {
                id: "apple",
                label: {
                  en: "apple",
                  fa: "اپل",
                },
              },
              {
                id: "xiaomi",
                label: {
                  en: "xiaomi",
                  fa: "شیائومی",
                },
              },
              {
                id: "nokia",
                label: {
                  en: "nokia",
                  fa: "نوکیا",
                },
              },
            ],
          },
          {
            id: "tablet",
            label: {
              en: "tablet",
              fa: "تبلت",
            },
          },
        ],
      },
      {
        id: "laptop-and-computer",
        label: {
          en: "laptop and computer",
          fa: "لپتاپ و کامپیوتر",
        },
        children: [
          {
            id: "laptop",
            label: {
              en: "laptop",
              fa: "لپتاپ",
            },
          },
          {
            id: "full-case",
            label: {
              en: "full case",
              fa: "کیس کامل",
            },
          },
          {
            id: "keyboard",
            label: {
              en: "keyboard",
              fa: "کیبورد",
            },
          },
          {
            id: "wireless-mouse",
            label: {
              en: "wireless mouse",
              fa: "موس بیسیم",
            },
          },
          {
            id: "speaker",
            label: {
              en: "speaker",
              fa: "اسپیکر",
            },
          },
        ],
      },
      {
        id: "vacuum",
        label: {
          en: "vacuum",
          fa: "جارو برقی",
        },
      },
      {
        id: "cosmetics",
        label: {
          en: "cosmetics",
          fa: "لوازم آرایشی",
        },
      },
    ],
  },
  {
    id: "frier",
    label: {
      en: "frier",
      fa: "سرخ کن",
    },
    children: [
      {
        id: "fillips",
        label: {
          en: "fillips",
          fa: "برند فیلیپس",
        },
      },
      {
        id: "general",
        label: {
          en: "general",
          fa: "برند جنرال",
        },
      },
      {
        id: "lg",
        label: {
          en: "lg",
          fa: "برند ال جی",
        },
      },
      {
        id: "samsung",
        label: {
          en: "samsung",
          fa: "برند سامسونگ",
        },
      },
    ],
  },
  {
    id: "contact-us",
    label: {
      en: "contact us",
      fa: "تماس با ما",
    },
  },
  {
    id: "about-us",
    label: {
      en: "about us",
      fa: "درباره ما",
    },
  },
  {
    id: "faq",
    label: {
      en: "faq",
      fa: "سوالات متداول",
    },
  },
];
