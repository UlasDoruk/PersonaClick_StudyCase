((self) => {
    'use strict';

    const isDesktop = window.innerWidth >= 1200;

    const config = {
        closeIcon: 'X',
        customerLogo: 'http://static.personaclick.com/Suwen/assets/suwen_logo.png',
        searchText: 'Aradığınız ürün... ?',
        searchButtonText: 'Ara',
        clearButtonText: 'Temizle',
        filtersText: 'Popüler kategoriler',
        secondSectionText: 'İndirimdeki ürünler',
        productsText: 'En popüler ürünler',
        categories: [
            { name: 'İç Giyim', link: 'https://www.suwen.com.tr/c/ic-giyim' },
            { name: 'Ev giyim', link: 'https://www.suwen.com.tr/c/ev-giyim' },
            { name: 'Hamile', link: 'https://www.suwen.com.tr/c/hamile-lohusa' },
            { name: 'Plaj', link: 'https://www.suwen.com.tr/c/plaj' }
        ],
        discountedProducts: [
            { 
                name: 'İndirimli Ürün 1',
                firstPrice: '100 TL',
                secondPrice: '50 TL',
                ratio: '-50%',
                link: 'https://www.suwen.com.tr/c/indirimli-urun-1',
                image: ''
            },
            { name: 'İndirimli Ürün 2',
                firstPrice: '100 TL',
                secondPrice: '50 TL',
                ratio: '-50%',
                link: 'https://www.suwen.com.tr/c/indirimli-urun-2',
                image: ''
            },
            { name: 'İndirimli Ürün 3',
                firstPrice: '100 TL',
                secondPrice: '50 TL',
                ratio: '-50%',
                link: 'https://www.suwen.com.tr/c/indirimli-urun-3',
                image: ''
            },
            { name: 'İndirimli Ürün 4',
                firstPrice: '100 TL',
                secondPrice: '50 TL',
                ratio: '-50%',
                link: 'https://www.suwen.com.tr/c/indirimli-urun-4',
                image: ''
            }, 
        ],
        fakeProductUrl: 'https://fakestoreapi.com/products',
    };

    const classes = {
        style: 'custom-style',
        overlay: 'general-overlay',
        wrapper: 'general-wrapper',
        container: 'general-container',
        header: 'search-section-header',
        headerTitle: 'search-section-header-title',
        headerSearchbar: 'search-section-header-searchbar',
        headerInput: 'search-section-header-searchbar-input',
        searchButton: 'search-section-header-searchbar-button',
        clearButton: 'search-section-header-searchbar-clear-button',
        mainSection: 'search-section-main-section',
        mainLeftSide: 'search-section-main-left-side',
        mainLeftSideFirstSection: 'search-section-main-left-side-first-section',
        filterUnit: 'search-section-main-left-side-first-section-filters-item',
        filterUnitSection: 'search-section-main-left-side-first-section-filters-unit',
        mainLeftSideFirstSectionFilters: 'search-section-main-left-side-first-section-filters',
        secondSectionUnits: 'search-section-main-left-side-second-section-units',
        mainLeftSideSecondSection: 'search-section-main-left-side-second-section',
        discountedProductWrapper: 'search-section-main-left-side-second-section-discounted-product-wrapper',
        discountedProductImage: 'search-section-main-left-side-second-section-discounted-product-image',
        discountedProductName: 'search-section-main-left-side-second-section-discounted-product-name',
        discountedProductPrices: 'search-section-main-left-side-second-section-discounted-product-prices',
        discountedProductFirstPrice: 'search-section-main-left-side-second-section-discounted-product-first-price',
        discountedProductSecondPrice: 'search-section-main-left-side-second-section-discounted-product-second-price',
        discountedProductRatio: 'search-section-main-left-side-second-section-discounted-product-ratio',
        mainRightSide: 'search-section-main-right-side',
        mainRightSideProducts: 'search-section-main-right-side-products',
        mainRightSideProductsSection: 'search-section-main-right-side-products-section',
        rightSideProducts: 'search-section-main-right-side-products-unit',
        mainProductImage: 'search-section-main-right-side-products-image',
        mainProductName: 'search-section-main-right-side-products-name',
        mainProductPrice: 'search-section-main-right-side-products-price',
        closeButton: 'close-button',
        customerSearchButton: isDesktop ? '[data-test-id="header_search"]' : 'personaclick-instant-search-button',
        customerSearchButtonAttribute: '[onclick="pcToggleSearchBox(event)"]',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${ classes[key] }`, createdSelector
    ), {});

    self.init = () => {
        const { customerSearchButton, customerSearchButtonAttribute } = classes;

        document.querySelector(customerSearchButtonAttribute)?.removeAttribute('onclick');

        document.querySelector(isDesktop ? customerSearchButton : selectors.customerSearchButton).onclick = () => {
            self.reset();
            self.buildCss();
            self.buildHTML();
        };
    };

    self.reset = () => {
        const { style, wrapper, overlay } = selectors;

        [wrapper, style, overlay].forEach((selector) => document.querySelector(selector)?.remove());
    };

    self.buildCss = () => {
        const { overlay, wrapper, container, header, headerTitle, headerSearchbar, headerInput, searchButton,
            clearButton, mainSection, mainLeftSide, mainLeftSideFirstSection, mainLeftSideSecondSection,
            mainRightSide, mainRightSideProducts, closeButton, filterUnit, filterUnitSection, discountedProductWrapper,
            discountedProductImage, discountedProductPrices, discountedProductFirstPrice, discountedProductSecondPrice,
            discountedProductRatio, secondSectionUnits, mainProductImage, mainProductName, mainRightSideProductsSection,
            rightSideProducts } = selectors;
        
        const customStyle =
        `${ overlay } {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .3);
            z-index: 9998;
        }
        ${ wrapper } {
            display: flex;
            background: #fff;
            position: fixed;
            transform: translate(-50%, 0%);
            top: 0%;
            left: 50%;
            z-index: 10000;
            width: 100%;
            font-family: Outfit, Outfit Fallback;
            font-size: .875rem;
            animation: slideDown 0.5s ease-out;
        }
        ${ container } {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        ${ header } {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0px;
            gap: 20px;
            border-bottom: 2px solid #e7e5e5;
        }
        ${ headerTitle} {
            max-width: 200px;
        }
        ${ headerSearchbar } {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            width: 95%;
        }
        ${ headerInput } {
            flex: 1;
            padding: 10px 14px;
            font-size: 16px;
            border-radius: 6px;
            outline: none;
            transition: border 0.3s ease;
            font-weight: bold;
        }
        ${ searchButton },
        ${ clearButton } {
            padding: 10px 16px;
            font-size: 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-weight: bold;
            min-width: 100px;
        }
        ${ searchButton } {
            background-color: #007BFF;
            color: white;
        }
        ${ searchButton }:hover {   
            background-color: #0056b3;
        }
        ${ clearButton } {
            background-color: #e53e51;
            color: #fff;
        }
        ${ clearButton }:hover {
            background-color: #fc021f;
        }
        ${ mainSection } {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        ${ mainLeftSide } {
            display: flex;
            flex-direction: column;
            flex: 0.5;
            padding: 10px;
        }
        ${ filterUnitSection } {
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding: 20px 0px;
        }
        ${ filterUnit } {
            background: #edd6d6;
            padding: 2px 0px;
            border-radius: 5px;
            min-width: 80px;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        }
        ${ filterUnit }:hover {
            background: #e96b6b;
            color: #fff;
        } 
        ${ mainLeftSideFirstSection },
        ${ mainLeftSideSecondSection } {
            display: flex;
            flex-direction: column;
            padding: 15px 10px;
            border-right: 1px solid #ccc;
            font-weight: 600;
            gap: 20px;
        }
        ${ discountedProductWrapper } {
            display: flex;
            gap: 20px;
            background: #fffcfc;
            border-radius: 5px;
            min-height: 100px;
            align-items: center;
            padding: 0px 10px;
            border: 1px solid #f7f6f6;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            width: max-content;
            padding-right: 40px;
        }
        ${ discountedProductImage } {
            max-width: 50px;
            max-height: 100px;
        }
        ${ secondSectionUnits } {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        ${ discountedProductPrices } {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        ${ discountedProductFirstPrice } {
            color: #d3d3d3;
            text-decoration: line-through;
            font-weight: bold;
        }
        ${ discountedProductSecondPrice } {
            color: black;
            font-weight: bold;
        }
        ${ discountedProductRatio } {
            background: #ff3232;
            padding: 7px;
            border-radius: 10px;
            color: #fff;
            margin-left: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
        ${ mainRightSide} {
            display: flex;
            flex: 1;
            height: 100%;
            padding: 20px;
        }
        ${ mainRightSideProducts } {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-weight: bold;
            max-height: 600px;
            overflow-y: scroll;
        }
        ${ mainRightSideProductsSection } {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        ${ rightSideProducts } {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 360px;
            gap: 20px;
            background: #f8f5f5;
            border-radius: 10px;
            padding: 10px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            cursor: pointer;
        }
        ${ mainProductImage } {
            max-width: 200px;
            max-height: 200px;
            width: 100%;
            height: 180px;
            object-fit: contain;
            border-radius: 8px;
            margin-bottom: 12px;
            background-color: #f9f9f9;
        }
        ${ mainProductName } {
            overflow: hidden;
            color: #333;
            margin: 0 0 8px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 40px;
        }
        ${ closeButton } {
            position: absolute;
            top: 0;
            right: 0;
            width: 50px;
            height: 50px;
            cursor: pointer;
            color: #353131;
            font-weight: bold;
            align-items: center;
            justify-content: center;
            display: flex;
            font-size: 25px;
        }
        @keyframes slideDown {
            from {
                transform: translate(-50%, -100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0%);
                opacity: 1;
            }
        }
        @media screen and (max-width: 1024px) {
            ${ wrapper } {
                height: 100vh;
                overflow: auto;
            }
            ${ mainRightSideProductsSection } {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;
                gap: 16px;
                padding-bottom: 10px;
            }
            ${ mainLeftSide } {
                flex: unset;                
            }
            ${ discountedProductWrapper } {
                width: unset;
                padding-right: unset;         
            }
            ${ mainRightSideProducts } {
                overflow: hidden;
            }
            ${ rightSideProducts } {
                flex: 0 0 240px;
                min-height: auto;
            }
            ${ mainSection } {
                flex-direction: column-reverse;
            }
            ${ headerSearchbar } {
                width: 95%;
                overflow: hidden;
                justify-content: end;
            }
            ${ clearButton } {
                min-width: min-content;
            }
            ${ filterUnit } {
                padding: 2px 15px;
                min-width: max-content;
            }
            ${ secondSectionUnits } {
                font-size: 11px;
            }
            ${ mainLeftSideFirstSection },
            ${ mainLeftSideSecondSection } {
                border-right: none;
            }
        }`;

        const styleTag = document.createElement('style');
        styleTag.className = classes.style;
        styleTag.textContent = customStyle;
        document.head.appendChild(styleTag);
    };

    self.buildHTML = async () => {
        const { wrapper, container, header, headerTitle, headerSearchbar, headerInput, mainSection, mainLeftSide,
            mainLeftSideFirstSection, mainLeftSideSecondSection, mainLeftSideFirstSectionFilters, mainRightSide,
            mainRightSideProducts, closeButton, overlay, searchButton, clearButton, filterUnitSection,
            secondSectionUnits, mainRightSideProductsSection } = classes;
        const { closeIcon, customerLogo, searchButtonText, searchText, clearButtonText ,filtersText,
            secondSectionText, productsText } = config; 

        const outerHTML =
        `<div class="${ wrapper }">
            <div class="${  container }">
                <div class="${ header }">
                    <img src="${ customerLogo }" class="${ headerTitle }">
                    <div class="${ headerSearchbar }">
                        <input type="text" class="${ headerInput }" placeholder="${ searchText }"/>
                        <!--<button class= "${ searchButton }" type="submit">${ searchButtonText }</button>--!>
                        <button class= "${ clearButton }" type="submit">${  clearButtonText }</button>
                    </div>
                </div>
                <div class="${ mainSection }">
                    <div class="${ mainLeftSide }">
                        <div class="${ mainLeftSideFirstSection }">
                            <div class="${ mainLeftSideFirstSectionFilters }">
                                ${ filtersText }
                                <div class="${ filterUnitSection }">
                                    ${ self.setCategories() }
                                </div>
                            </div>
                        </div>
                        <div class="${ mainLeftSideSecondSection }">
                            ${ secondSectionText }
                            <div class="${ secondSectionUnits }">
                                ${ await self.setDiscountedProducts() }
                            </div>
                        </div>
                    </div>
                    <div class="${ mainRightSide }">
                        <div class="${ mainRightSideProducts }">
                            ${ productsText }
                            <div class="${ mainRightSideProductsSection }">
                                ${ await self.setMainProducts() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="${ closeButton }">${ closeIcon }</div>
        </div>
        <div class="${ overlay }"></div>`;

        document.body.insertAdjacentHTML('beforeend', outerHTML);

        self.setEvents();
    };

    self.setEvents = () => {
        const { headerInput, clearButton, closeButton } = selectors;

        document.querySelector(closeButton).onclick = () => {
            self.reset();
        };

        document.querySelector(clearButton).onclick = () => {
            document.querySelector(headerInput).value = '';
        };
    };

    self.setCategories = () => {
        const { filterUnit } = classes;
        const { categories } = config;

        const filtersHTML = [];

        categories.forEach((category) => {
            const { name, link } = category;

            filtersHTML.push(`<a href="${ link }" class="${ filterUnit }">${ name }</a>`);
        });

        return filtersHTML.join('');
    };

    self.setDiscountedProducts = async () => {
        const { discountedProducts, fakeProductUrl } = config;
        const { discountedProductName, discountedProductPrices, discountedProductFirstPrice,
            discountedProductSecondPrice, discountedProductRatio, discountedProductWrapper,
            discountedProductImage } = classes;

        const discountedProductsHTML = [];

        for (const product of discountedProducts) {
            const { name, firstPrice, secondPrice, ratio, link } = product;

            try {
                const response = await fetch(fakeProductUrl);
                const products = await response.json();
                const randomIndex = Math.floor(Math.random() * products.length);
                const randomProduct = products[randomIndex];

                const outerHTML =
                `<a href="${ link }" class="${ discountedProductWrapper }">
                    <img src="${ randomProduct.image }" alt="${ name }" class="${ discountedProductImage }">
                    <div class="${ discountedProductName }">${ name }</div>
                    <div class="${ discountedProductPrices }">
                        <span class="${ discountedProductFirstPrice }">${ firstPrice }</span>
                        <span class="${ discountedProductSecondPrice }">${ secondPrice }</span>
                        <span class="${ discountedProductRatio }">${ ratio }</span>
                    </div>
                </a>`;

                discountedProductsHTML.push(outerHTML);
            } catch (err) {
                console.error('Ürün çekilirken hata:', err.message);
            }
        }

        return discountedProductsHTML.join('');
    };

    self.setMainProducts = async () => {
        const { fakeProductUrl } = config;
        const { rightSideProducts, mainProductImage, mainProductName, mainProductPrice } = classes;

        try {
            const response = await fetch(fakeProductUrl);
            const products = await response.json();
            const randomProducts = products.slice(0, 12).sort(() => Math.random() - 0.5);

            const productHTML = randomProducts.map((product) => (
                `<div class="${ rightSideProducts }">
                    <img class="${ mainProductImage }" src="${ product.image }" alt="${ product.title }" />
                    <h3 class="${ mainProductName }" >${ product.title }</h3>
                    <span class="${ mainProductPrice }">${ product.price } TL</span>
                </div>`
            )).join('');

            return productHTML;
        } catch (err) {
            console.error('Ürünler çekilirken hata:', err.message);
        }
    };

    return self.init();
})({});   