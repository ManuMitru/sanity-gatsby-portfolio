export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600705d23da5ab2c798f2ab7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4m8yb4cs',
                  apiId: '657c6f8c-4438-4d17-9a03-b45adad6bd4e'
                },
                {
                  buildHookId: '600705d22d238c2c2995cd0d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-afm4s9uf',
                  apiId: '7c46719c-09c6-4185-9f11-ded01d7d6275'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ManuMitru/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-afm4s9uf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
