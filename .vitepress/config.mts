import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Japanisch",
  description: "Notizen zur japanischen Sprache",
  base: "/jap/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Grammatik', link: '/grammar' }
    ],
    sidebar: [
      {
        text: 'Grammatik',
        base: "grammar",
        items: [
          { text: 'あげる¹', link: '/ageru-1' },
          { text: 'あげる²', link: '/ageru-2' },
          { text: '間（に）', link: '/aida-ni' },
          { text: 'あまり', link: '/amari' },
          { text: 'ある¹', link: '/aru-1' },
          { text: 'ある²', link: '/aru-2' },
          {
            text: 'あとで', link: '/ato-de',
          },
          {
            text: 'ば', link: '/ba',
          },
          {
            text: 'ばかり', link: '/bakari',
          },
          {
            text: 'ばよかった', link: '/bayokatta',
          },
          {
            text: 'だい', link: '/dai',
          },
          {
            text: 'だけ', link: '/dake',
          },
          {
            text: 'だけではなく', link: '/dakedewanaku',
          },
          {
            text: 'だろう', link: '/darou',
          },
          {
            text: '出す', link: '/dasu',
          },
          {
            text: 'で', collapsed: true, items: [
              {
                text: 'Ort', link: '/de/1',
              },
              {
                text: 'Mittel/Methode', link: '/de/2',
              },
              {
                text: 'Grund', link: '/de/3',
              },
              {
                text: 'Zeitpunkt', link: '/de/4',
              },
            ]
          },
          {
            text: 'でも', link: '/demo',
          },
          {
            text: 'どう', link: '/dou',
          },
          {
            text: 'へ', link: '/e',
          },
          {
            text: 'が', collapsed: true, items: [
              {
                text: 'Subjekt', link: '/ga/1',
              },
              {
                text: 'Konjunktion', link: '/ga/2',
              }
            ]
          },
          {
            text: 'がる', link: '/garu',
          },
          {
            text: 'ごろ', link: '/goro',
          },
          {
            text: 'ごとに', link: '/gotoni',
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexvoedi/jap' }
    ],
    search: {
      provider: "local"
    },
    editLink: {
      pattern: "https://github.com/alexvoedi/jap/edit/main/docs/:path",
    },
    docFooter: {
      prev: false,
      next: false,
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(footnote)

      md.renderer.rules.footnote_ref = (tokens, index, options, env, self) => {
        const id = self.rules.footnote_anchor_name?.(tokens, index, options, env, self)
        const caption = self.rules.footnote_caption?.(tokens, index, options, env, self)
        let refid = id

        if (tokens[index].meta.subId > 0) refid += `:${tokens[index].meta.subId}`

        return `<a href="#fn${id}" id="fnref${refid}">${caption}</a>`
      }

      md.renderer.rules.footnote_block_open = () => {
        return '<section class="footnotes">\n' +
          '<ol class="footnotes-list">\n'
      }
    }
  },

  sitemap: {
    hostname: "https://japanisch.nekatz.com"
  },
  locales: {
    root: {
      label: 'Deutsch',
      description: 'Deutsch',
      themeConfig: {
        outline: {
          label: 'Inhaltsverzeichnis',
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonAriaLabel: 'Suche öffnen',
                buttonText: 'Suche',
              },
              modal: {
                backButtonTitle: 'Zurück zur Übersicht',
                displayDetails: 'Details anzeigen',
                footer: {
                  closeKeyAriaLabel: 'Schließe Suche',
                  closeText: 'Schließen',
                  navigateDownKeyAriaLabel: 'Navigiere nach unten',
                  navigateText: 'Navigiere',
                  navigateUpKeyAriaLabel: 'Navigiere nach oben',
                  selectKeyAriaLabel: 'Wähle diese Seite',
                  selectText: 'Wählen',
                },
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Suche zurücksetzen',
              },
            }
          }
        },
      }
    }
  }
})
