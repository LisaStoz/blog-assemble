...
  pages: {
    options: {
      flatten: true,
      layout: 'src/layouts/main.hbs',
      partials: 'src/components/*.hbs',
      data: 'src/data/*.json'
    },
    files: {
      'result/': ['src/pages/index.hbs', 'src/pages/article*.hbs']
    }
  },
...
