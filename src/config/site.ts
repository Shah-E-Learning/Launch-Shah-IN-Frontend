export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Samuuel Hahnemann',
  description: 'Samuuel Hahnemann is a platform that provides online consultation and treatment for various diseases.',
  phone: '+91 7567756443',
  email: 'organon@samuelhahnemann.org',
  addressLine1: 'Town Hall, Anand - 388001, Gujarat',
  navItems: [
    {
      label: 'Home',
      href: '/'
    }
  ],

  links: {
    facebook: 'https://www.facebook.com/samuelhahnemannacademy',
    insta: 'https://www.instagram.com/samuelhahnemannacademy/',
    youtube: 'https://www.youtube.com/@samuelhahnemannacademy',
    linkedin: 'https://www.linkedin.com/company/samuelhahnemannacademy/'
  },

  images: {
    mainLogo: '/images/sh-icon-mh.png'
  }
}
