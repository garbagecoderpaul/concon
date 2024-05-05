export class Region {
    id?: number;
    'aria-label'?: string;

    title?:string;
    nftId?: string;
   
    nftUri?: string;
    img?: string;
    
    nft_uri?: string;
    type?: ItemType;
    item_type?: ItemType;
    markingFav?: boolean;
    isFavourite?: boolean;

    item_label?:string;
    amount?: string;
    nft_image?: string;
    nft_s3_url?: string;
    nft_id?: string;
    card_id?: string;
    description?:string;
    created_at?:any;
    item_uri?:string;
    img_width?:string;
    img_height?:string;
    img_size?:string;
    lat?:string;
    lng?:string;
    background?:string;
    base?:string;
    skin?:string;
    eyes?:string;
    eyewear?:string;
    head?:string;
    helmet?:string;
    weapons?:string;
    
    buy_at?:string; // oncebought
    ownedItem?:boolean; //forfrontendcheckonly
    address?:boolean; //forfrontendcheckonly
    updated_at?:any;
}

export enum ItemType {
    'region' = 'region',
    'land' = 'land',
    'human' = 'human',
    'alien' = 'alien'
}

export let regionItems: Region[] = [
    { id: 1, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Aveiro', item_label: 'Aveiro',  'aria-label': 'Aveiro', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/aviero.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/aviero.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/aviero.png', img: 'aviero.png' },
    { id: 2, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Beja', item_label: 'Beja',  'aria-label': 'Beja', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/beja.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/beja.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/beja.png', img: 'beja.png' },
    { id: 3, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Braga', item_label: 'Braga',  'aria-label': 'Braga', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braga.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braga.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braga.png', img: 'braga.png' },
    { id: 4, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Bragança', item_label: 'Bragança',  'aria-label': 'Bragança', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braganca.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braganca.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/braganca.png', img: 'braganca.png' },
    { id: 5, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Castelo Branco', item_label: 'Castelo Branco',  'aria-label': 'Castelo Branco', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/castelo_branco.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/castelo_branco.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/castelo_branco.png', img: 'castelo_branco.png' },
    { id: 6, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Coimbra', item_label: 'Coimbra',  'aria-label': 'Coimbra', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/coimbra.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/coimbra.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/coimbra.png', img: 'coimbra.png' },
    { id: 7, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Évora', item_label: 'Évora',  'aria-label': 'Évora', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/evora.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/evora.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/evora.png', img: 'evora.png' },
    { id: 8, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Faro', item_label: 'Faro',  'aria-label': 'Faro', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/faro.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/faro.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/faro.png', img: 'faro.png' },
    { id: 9, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Guarda', item_label: 'Guarda',  'aria-label': 'Guarda', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/guarda.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/guarda.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/guarda.png', img: 'guarda.png' },
    { id: 10, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Leiria', item_label: 'Leiria',  'aria-label': 'Leiria', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/leiria.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/leiria.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/leiria.png', img: 'leiria.png' },
    { id: 11, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Lisboa', item_label: 'Lisboa',  'aria-label': 'Lisboa', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/lisboa.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/lisboa.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/lisboa.png', img: 'lisboa.png' },
    { id: 12, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Portalegre', item_label: 'Portalegre',  'aria-label': 'Portalegre', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/maderia.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/maderia.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/maderia.png', img: 'portalegre.png' },
    { id: 13, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Porto', item_label: 'Porto',  'aria-label': 'Porto', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/portalegre.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/portalegre.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/portalegre.png', img: 'porto.png' },
    { id: 14, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Santarém', item_label: 'Santarém',  'aria-label': 'Santarém', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/porto.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/porto.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/porto.png', img: 'santarem.png' },
    { id: 15, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Setúbal', item_label: 'Setúbal',  'aria-label': 'Setúbal', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/santarem.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/santarem.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/santarem.png', img: 'setubal.png' },
    { id: 16, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Viana do Castelo', item_label: 'Viana do Castelo',  'aria-label': 'Viana do Castelo', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/setubal.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/setubal.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/setubal.png', img: 'viana_de_costelo.png' },
    { id: 17, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Vila Real', item_label: 'Vila Real',  'aria-label': 'Vila Real', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viana_de_costelo.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viana_de_costelo.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viana_de_costelo.png', img: 'vila_real.png' },
    { id: 18, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Viseu', item_label: 'Viseu',  'aria-label': 'Viseu', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/vila_real.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/vila_real.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/vila_real.png', img: 'viseu.png' },
    { id: 19, type: ItemType.region, nftId: 'xjshjhdojdsd', title:'Madeira', item_label: 'Madeira',  'aria-label': 'Madeira', nft_image:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viseu.png', nft_uri:'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viseu.png',  nftUri: 'https://uzyth.s3.eu-west-2.amazonaws.com/regions/viseu.png', img: 'maderia.png' }
]

export let collectibles: Region[] = [
    { id: 20, type: ItemType.alien, nftId: 'xjshjhdojdsd', item_label: 'Collectible 1',  'aria-label': 'Collectible 1', nftUri: 'https://app.uzyth.com/assets/images/z-1.png', img: 'https://app.uzyth.com/assets/images/z-1.png' },
    { id: 21, type: ItemType.alien, nftId: 'xjshjhdojdsd', item_label: 'Collectible 2',  'aria-label': 'Collectible 2', nftUri: 'https://app.uzyth.com/assets/images/z-11.png', img: 'https://app.uzyth.com/assets/images/z-11.png' },
    { id: 22, type: ItemType.alien, nftId: 'xjshjhdojdsd', item_label: 'Collectible 3',  'aria-label': 'Collectible 3', nftUri: 'https://app.uzyth.com/assets/images/z-111.png', img: 'https://app.uzyth.com/assets/images/z-111.png' },
]