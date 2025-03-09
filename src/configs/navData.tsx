import { SidebarMenuItem } from "@/components/ui/sidebar/navbarData";
import {
  Computer,
  Headset,
  Info,
  Keyboard,
  Laptop,
  Layers,
  MessageCircle,
  Minus,
  Mouse,
  PcCase,
  Smartphone,
  Speaker,
  Tablet,
  TabletSmartphone,
  Utensils,
} from "lucide-react";

// TODO: add icons
export const sidebarNavData: SidebarMenuItem = [
  {
    id: "category",
    icon: Layers,
    label: {
      en: "category",
      fa: "دسته بندی",
    },
    children: [
      {
        id: "mobile-and-tablet",
        icon: TabletSmartphone,
        label: {
          en: "mobile and tablet",
          fa: "موبایل و تبلت",
        },
        children: [
          {
            icon: Minus,
            id: "surface",
            label: {
              en: "surface",
              fa: "سرفیس",
            },
            children: [
              {
                icon: Minus,
                id: "surface-pro",
                label: {
                  en: "surface pro",
                  fa: "سرفیس پرو",
                },
              },
              {
                icon: Minus,
                id: "normal-surface",
                label: {
                  en: "normal surface",
                  fa: "سرفیس معمولی",
                },
              },
              {
                icon: Minus,
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
            icon: Smartphone,
            label: {
              en: "mobile",
              fa: "موبایل",
            },
            children: [
              {
                icon: Minus,
                id: "samsung-mobile",
                label: {
                  en: "samsung",
                  fa: "سامسونگ",
                },
              },
              {
                icon: Minus,
                id: "apple",
                label: {
                  en: "apple",
                  fa: "اپل",
                },
              },
              {
                icon: Minus,
                id: "xiaomi",
                label: {
                  en: "xiaomi",
                  fa: "شیائومی",
                },
              },
              {
                icon: Minus,
                id: "nokia",
                label: {
                  en: "nokia",
                  fa: "نوکیا",
                },
              },
            ],
          },
          {
            icon: Tablet,
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
        icon: Computer,
        label: {
          en: "laptop and computer",
          fa: "لپتاپ و کامپیوتر",
        },
        children: [
          {
            icon: Laptop,
            id: "laptop",
            label: {
              en: "laptop",
              fa: "لپتاپ",
            },
          },
          {
            icon: PcCase,
            id: "full-case",
            label: {
              en: "full case",
              fa: "کیس کامل",
            },
          },
          {
            icon: Keyboard,
            id: "keyboard",
            label: {
              en: "keyboard",
              fa: "کیبورد",
            },
          },
          {
            icon: Mouse,
            id: "wireless-mouse",
            label: {
              en: "wireless mouse",
              fa: "موس بیسیم",
            },
          },
          {
            icon: Speaker,
            id: "speaker",
            label: {
              en: "speaker",
              fa: "اسپیکر",
            },
          },
        ],
      },
      {
        icon: Minus,
        id: "vacuum",
        label: {
          en: "vacuum",
          fa: "جارو برقی",
        },
      },
      {
        icon: Minus,
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
    icon: Utensils,
    label: {
      en: "frier",
      fa: "سرخ کن",
    },
    children: [
      {
        id: "fillips",
        icon: Minus,
        label: {
          en: "fillips",
          fa: "برند فیلیپس",
        },
      },
      {
        id: "general",
        icon: Minus,
        label: {
          en: "general",
          fa: "برند جنرال",
        },
      },
      {
        id: "lg",
        icon: Minus,
        label: {
          en: "lg",
          fa: "برند ال جی",
        },
      },
      {
        id: "samsung",
        icon: Minus,
        label: {
          en: "samsung",
          fa: "برند سامسونگ",
        },
      },
    ],
  },
  {
    id: "contact-us",
    icon: Headset,
    label: {
      en: "contact us",
      fa: "تماس با ما",
    },
  },
  {
    id: "about-us",
    icon: Info,
    label: {
      en: "about us",
      fa: "درباره ما",
    },
  },
  {
    id: "faq",
    icon: MessageCircle,
    label: {
      en: "faq",
      fa: "سوالات متداول",
    },
  },
];
