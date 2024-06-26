module.exports = {
  mySidebar: [
    'faq',
    'links',
    'auctions',
    {
      type: 'category',
      label: 'Risks',
      items: [{ type: 'autogenerated', dirName: 'risks' }],
    },
    {
      type: 'category',
      label: 'Deprecated Projects',
      items: [{ type: 'autogenerated', dirName: 'deprecated' }],
    },
    {
      type: 'link',
      href: 'https://github.com/yearn/yearn-pm/tree/master/financials/reports',
      label: 'Financials',
    },
    'defi-glossary',
  ],
}
