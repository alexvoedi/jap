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
      { text: 'Grammatik', link: '/grammar' },
      { text: 'Vokabeln', link: '/vocabulary' },
      { text: 'Hilfsmittel', link: '/tools' },
    ],
    sidebar: {
      '/grammar/': [
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
              text: 'ばよかった', link: '/ba-yokatta',
            },
            {
              text: 'だい', link: '/dai',
            },
            {
              text: 'だけ', link: '/dake',
            },
            {
              text: 'だけで（は）なく', link: '/dake-de-wa-naku',
            },
            {
              text: 'だろう', link: '/darou',
            },
            {
              text: '〜出す', link: '/dasu',
            },
            {
              text: 'で¹', link: '/de-1',
            },
            {
              text: 'で²', link: '/de-2',
            },
            {
              text: 'で³', link: '/de-3',
            },
            {
              text: 'で⁴', link: '/de-4',
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
              text: 'が¹', link: '/ga-1',
            },
            {
              text: 'が²', link: '/ga-2',
            },
            {
              text: '〜がる', link: '/garu',
            },
            {
              text: 'ごろ', link: '/goro',
            },
            {
              text: 'ごとに', link: '/goto-ni',
            },
            {
              text: '〜はじめる', link: '/hajimeru',
            },
            {
              text: 'はず', link: '/hazu',
            },
            {
              text: 'ほうがいい', link: '/hou-ga-ii',
            },
            {
              text: '〜ほうが〜より', link: '/hou-ga-yori',
            },
            {
              text: 'ほしい¹', link: '/hoshii-1',
            },
            {
              text: 'ほしい²', link: '/hoshii-2',
            },
            {
              text: '一番', link: '/ichiban',
            },
            {
              text: '行く¹', link: '/iku-1',
            },
          ]
        },
      ],
      '/vocabulary/': [
        {
          text: 'Vokabeln',
          base: 'vocabulary',
          items: [],
        },
      ],
      '/tools/': [
        {
          text: 'Hilfsmittel',
          base: 'tools',
          items: [
            { text: 'Transitive und intransitive Verben', link: '/transitive-intransitive' },
            { text: 'Zusammengesetzte Verben', link: '/zusammengesetzte-verben' },
          ]
        }
      ]
    },
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
