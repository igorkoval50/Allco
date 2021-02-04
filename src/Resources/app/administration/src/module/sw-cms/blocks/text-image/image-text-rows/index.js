import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-rows',
    label: 'sw-cms.blocks.imageText.imageCategoryText.label-right',
    category: 'text-image',
    component: 'sw-cms-block-image-text-rows',
    previewComponent: 'sw-cms-preview-image-text-rows',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'top-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/allco/static/img/cms/right-image.jpg'
                    }
                }
            }
        },
        'top-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2>Futter und Snacks für Hunde.</h2>
                        <p class="transform"><span class="white">CARNILOVE WURDE MIT DEM GEDANKEN AN DIE NATÜRLICHE HERKUNFT DER HUNDE ZUSAMMENGESTELLT.</span></p>
                        <p>Das breite Spektrum an sorgfältig ausgewähltem Fleisch von 
                        <span class="white">frei lebenden Tieren </span>
                        wie Rentier, Ente, Fasan, Truthahn, Lamm, Wildschwein, Lachs und die neuen Futtermittel aus dem FRESH MEAT-Sortiment wie Karpfen, Forelle, Strauß, Kaninchen und Huhn 
                        <span class="white">entsprechen der Zusammensetzung der natürlichen Beute </span>
                        und gewährleisten die Aufnahme wichtiger Aminosäuren.</p>
                        <p><span class="white">Waldfrüchte, Gemüsearten, Wildbeeren</span> und sind natürliche Quellen wichtiger Vitamine, Antioxidanzien und anderer lebenswichtiger Inhaltsstoffe.</p>
                        `.trim()
                    }
                }
            }
        },
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/allco/static/img/cms/bags.jpg'
                    }
                }
            }
        },
        'left-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <a href="#"><span>TROCKENFUTTER</span></a>
                        `.trim()
                    }
                }
            }
        },
        'center-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/allco/static/img/cms/bags.jpg'
                    }
                }
            }
        },
        'center-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                         <a href="#"><span>NASSFUTTER</span></a>
                        `.trim()
                    }
                }
            }
        },
        'right-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/allco/static/img/cms/bags.jpg'
                    }
                }
            }
        },
        'right-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <a href="#"><span>SNACKS</span></a>
                        `.trim()
                    }
                }
            }
        }
    }
});
