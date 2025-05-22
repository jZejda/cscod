import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Zaslat docs',
      description: 'Documentation in English',
      themeConfig: {
        outline: {
          label: 'On this page'
        },
        nav: [
          { text: 'Home', link: '/en/docs/integrations/upgates' },
          { text: 'API', link: '/en/apiv1/index' }
        ],
        sidebar: {
          // This sidebar gets displayed when a user
          // is on `guide` directory.
          '/en/docs/': [
            {
              text: 'Ecom integration',
              collapsed: true,
              items: [
                { text: 'Upgates', link: '/en/docs/integrations/upgates' },
              ]
            },
            {
              text: 'How to do - FAQ',
              collapsed: true,
              items: [
                {
                  text: 'Integrace',
                  items: [
                    { text: 'Not show PUDO map', link: '/en/docs/faq/integration/pudo-map' },
                  ]
                },
                {
                  text: 'MZ',
                  items: [
                    { text: 'Not show login', link: '/en/docs/faq/mz/login-page' },
                  ]
                },
              ]
            }
          ],

          // API
          '/en/apiv1/': [
            {
              text: 'APIv1',
              collapsed: true,
              items: [
                {
                  text: 'Order',
                  items: [
                    { text: 'Create Order', link: '/en/apiv1/create' },
                    { text: 'Order print lagels', link: '/en/apiv1/create-ocassional' },
                  ]
                },
                {
                  text: 'How To',
                  items: [
                    { text: 'Order own print label', link: '/en/apiv1/howto/print-label' },
                  ]
                },
              ]
            }
          ],
        },
      }
    },
    root: {
      label: 'Čeština',
      lang: 'cs-CZ',
      link: '/cz/',
      title: 'Zaslat dokumentace',
      description: 'Uživatelská příručka',
      themeConfig: {
        outline: {
          label: 'Na této stránce'
        },
        nav: [
          { text: 'Domů', link: '/cz/docs/integrations/upgates' },
          { text: 'API', link: '/cz/apiv1/index' }
        ],
        sidebar: {
          // This sidebar gets displayed when a user
          // is on `guide` directory.
          '/cz/docs/': [
            {
              text: 'Ecom integrace',
              collapsed: true,
              items: [
                { text: 'Upgates', link: '/cz/docs/integrations/upgates' },
                { text: 'EshopRychle', link: '/cz/docs/integrations/eshop-rychle' },
                { text: 'Import', link: '/cz/docs/integrations/import' },
              ]
            },
            {
              text: 'Jak na to - FAQ',
              collapsed: true,
              items: [
                {
                  text: 'Integrace',
                  items: [
                    { text: 'Nezobrazuje se mi PUDO mapa', link: '/cz/docs/faq/integration/pudo-map' },
                  ]
                },
                {
                  text: 'MZ',
                  items: [
                    { text: 'Nevidím přihlášení', link: '/cz/docs/faq/mz/login-page' },
                  ]
                },
              ]
            }
          ],

          // API
          '/cz/apiv1/': [
            {
              text: 'APIv1',
              collapsed: true,
              items: [
                {
                  text: 'Objednávka',
                  items: [
                    { text: 'Vytvořit objednávku', link: '/cz/apiv1/create' },
                    { text: 'Vlastní tisků štítků', link: '/cz/apiv1/create-ocassional' },
                  ]
                },
                {
                  text: 'Jak na to',
                  items: [
                    { text: 'Vlastní tisk štítků', link: '/cz/apiv1/howto/print-label' },
                  ]
                },
              ]
            }
          ],
        },
      }
    }
  },
  // Search with multi-language support
  themeConfig: {
    // Common theme config for all languages
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search query',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          },
          cs: {
            translations: {
              button: {
                buttonText: 'Hledat',
                buttonAriaLabel: 'Prohledat dokumentaci'
              },
              modal: {
                noResultsText: 'Žádné výsledky pro',
                resetButtonTitle: 'Vymazat vyhledávání',
                footer: {
                  selectText: 'pro výběr',
                  navigateText: 'pro navigaci',
                  closeText: 'pro zavření'
                }
              }
            }
          }
        }
      }
    },

    // Social links shown in all languages
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-account/your-project' }
    ]
  },

  // Build configuration
  build: {
    // If you need special build options
  },

  base: '/cscod/',

  // Head tags to include in HTML
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})