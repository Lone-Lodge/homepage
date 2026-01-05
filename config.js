// ============================================
// CONFIGURATION - Edit your links and settings here!
// ============================================

const CONFIG = {
    // Social Media
    twitter: 'https://twitter.com/lonelodge',
    discord: 'https://discord.gg/lonelodge',
    youtube: 'https://youtube.com/@lonelodge',
    github: 'https://github.com/Lone-Lodge',

    // Store
    fabStore: 'https://fab.com/sellers/Lone%20Lodge%20Studios',

    // Contact
    email: 'support@lonelodgestudios.com',
};

// ============================================
// PRODUCTS - Add/edit products here!
// ============================================
// status: 'available' or 'soon'
// descKey: translation key from translations.js
// tags: array of tech tags to display
// link: URL to product page (optional)

const PRODUCTS = [
    {
        id: 'radial',
        name: 'Nova Radial Menu',
        descKey: 'products.radial.desc',
        status: 'available',
        price: '$24.99',
        tags: ['C++', 'UE5'],
        link: 'https://fab.com'
    },
    {
        id: 'toast',
        name: 'Nova Toast',
        descKey: 'products.toast.desc',
        status: 'soon',
        price: '$19.99',
        tags: ['C++', 'UE5'],
        link: 'https://fab.com'
    },
    {
        id: 'damage',
        name: 'Nova Damage Numbers',
        descKey: 'products.damage.desc',
        status: 'soon',
        price: '$19.99',
        tags: ['C++', 'UE5'],
        link: 'https://fab.com'
    },
    {
        id: 'health',
        name: 'Nova Health Bars',
        descKey: 'products.health.desc',
        status: 'soon',
        price: '$14.99',
        tags: ['C++', 'UE5'],
        link: 'https://fab.com'
    },
    // Add more products here:
    // {
    //     id: 'myproduct',
    //     name: 'Product Name',
    //     descKey: 'products.myproduct.desc',  // Add translation in translations.js
    //     status: 'available',  // or 'soon'
    //     price: '$9.99',
    //     tags: ['Tag1', 'Tag2'],
    //     link: 'https://example.com'
    // },
];
