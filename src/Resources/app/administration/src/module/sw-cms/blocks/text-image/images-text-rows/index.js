import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'images-text-rows',
    label: 'sw-cms.blocks.imageText.imageCategoryText.label-left',
    category: 'text-image',
    component: 'sw-cms-block-images-text-rows',
    previewComponent: 'sw-cms-preview-images-text-rows',
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
                        url: '/allco/static/img/cms/left-image.jpg'
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
                        <h2>Futter und Snacks für Katzen.</h2>
                        <p class="transform"><span class="white">CARNILOVE WURDE MIT DEM GEDANKEN AN DIE NATÜRLICHE HERKUNFT DER HUNDE ZUSAMMENGESTELLT.</span></p>
                        
                        <p>
                        Getreidefreie Futtermittel, die reich an Fleisch von frei lebenden Tieren wie Lachs, 
                        <span class="white">Truthahn, Ente, Fasan, Lamm, Rentier und Wildschwein</span> 
                        sind, und die neuen Futtermittel aus dem Fresh Meat-Sortiment, wie 
                        <span class="white">Karpfen, Forelle, Kaninchen und Huhn</span> 
                        mit Waldfrüchten und -kräutern liefern essentielle Proteine, Fette, Vitamine und natürliche Antioxidanzien für eine perfekte 
                        körperliche Kondition und die optimale Unterstützung des Immunsystems.
                        </p>
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
