const navigation = () => {
  return [
    {
      title: 'Home',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/home'
    },
    {
      sectionTitle: 'Applications'
    },
    {
      title: 'Workspaces',
      icon: 'tabler:command',
      path: '/workspaces'
    },
    {
      title: 'Services',
      icon: 'tabler:copy',
      path: '/services'
    },
    {
      sectionTitle: 'Communication'
    },
    {
      title: 'Forum',
      icon: 'tabler:message-circle',
      path: '/forum'
    },
    {
      title: 'FAQs',
      icon: 'tabler:search',
      path: '/faqs'
    }
  ]
}

export default navigation
